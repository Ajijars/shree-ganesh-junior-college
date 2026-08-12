import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { scienceBatches } from "@/data/college";

type Props = { params: Promise<{ batch: string }> };

export async function generateStaticParams() {
  return scienceBatches.map((b) => ({ batch: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { batch: slug } = await params;
  const batch = scienceBatches.find((b) => b.slug === slug);
  return { title: batch ? `${batch.name} — Science` : "Science Batch" };
}

export default async function ScienceBatchPage({ params }: Props) {
  const { batch: slug } = await params;
  const batch = scienceBatches.find((b) => b.slug === slug);
  if (!batch) notFound();

  return (
    <>
      <section className="page-hero py-16">
        <div className="mx-auto max-w-7xl px-4">
          <Link href="/academics" className="mb-4 inline-flex items-center gap-1 text-sm text-brand-200 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to Academics
          </Link>
          <h1 className="font-display text-4xl font-bold md:text-5xl">{batch.name}</h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-100">{batch.description}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="section-heading">Subjects</h2>
              <ul className="mt-4 space-y-2">
                {batch.subjects.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-stone-700">
                    <CheckCircle className="h-5 w-5 text-brand-700" /> {s}
                  </li>
                ))}
              </ul>

              <h2 className="section-heading mt-10">Program Features</h2>
              <ul className="mt-4 space-y-2">
                {batch.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-stone-700">
                    <CheckCircle className="h-5 w-5 shrink-0 text-accent-500" /> {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="section-heading">Syllabus Overview</h2>
              <p className="mt-2 text-sm text-stone-500">
                Based on Maharashtra State Board HSC syllabus. Detailed PDFs will be updated soon.
              </p>
              <div className="mt-6 space-y-4">
                {batch.syllabus.map((unit) => (
                  <div key={unit.unit} className="card">
                    <h3 className="font-display font-bold text-brand-900">{unit.unit}</h3>
                    <p className="mt-2 text-sm text-stone-600">{unit.topics}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-xl bg-brand-50 p-8 text-center">
            <p className="text-stone-700">Interested in the {batch.name}?</p>
            <Link href="/admissions" className="btn-primary mt-4">
              Submit Admission Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
