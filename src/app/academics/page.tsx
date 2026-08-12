import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { scienceBatches, commerceStream, teachingStaff, nonTeachingStaff } from "@/data/college";

export const metadata: Metadata = {
  title: "Academics",
};

export default function AcademicsPage() {
  return (
    <>
      <section className="page-hero py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="font-display text-4xl font-bold md:text-5xl">Academics</h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-100">
            11th & 12th Science and Commerce programs with specialized batches and experienced faculty.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-heading">Science Stream — Batches</h2>
          <p className="section-subheading">
            Choose the batch that aligns with your career goals — NEET, JEE, CET, or Regular Board.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {scienceBatches.map((batch) => (
              <Link
                key={batch.id}
                href={`/academics/science/${batch.slug}`}
                className="card group"
              >
                <h3 className="font-display text-xl font-bold text-brand-900">{batch.name}</h3>
                <p className="mt-2 text-stone-600">{batch.description}</p>
                <p className="mt-3 text-sm text-stone-500">
                  Subjects: {batch.subjects.join(", ")}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-800">
                  View details & syllabus <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-heading">Commerce Stream</h2>
          <p className="section-subheading">{commerceStream.description}</p>
          <Link href="/academics/commerce" className="btn-primary mt-6">
            View Commerce Details
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-heading">Teaching Staff</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teachingStaff.map((staff) => (
              <div key={staff.name} className="card text-center">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 font-display text-xl font-bold text-brand-800">
                  {staff.name.split(" ").slice(-1)[0][0]}
                </div>
                <h3 className="font-display font-bold text-brand-900">{staff.name}</h3>
                <p className="text-sm font-medium text-accent-600">{staff.subject}</p>
                <p className="mt-1 text-xs text-stone-500">{staff.qualification}</p>
                <p className="text-xs text-stone-400">{staff.experience} experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-heading">Non-Teaching Staff</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {nonTeachingStaff.map((staff) => (
              <div key={staff.name} className="card flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-stone-200 font-bold text-stone-600">
                  {staff.name.split(" ")[1]?.[0] ?? staff.name[0]}
                </div>
                <div>
                  <h3 className="font-semibold text-brand-900">{staff.name}</h3>
                  <p className="text-sm text-stone-600">{staff.role}</p>
                  <p className="text-xs text-stone-400">{staff.department}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
