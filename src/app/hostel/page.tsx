import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Phone } from "lucide-react";
import { hostelInfo } from "@/data/college";

export const metadata: Metadata = {
  title: "Hostel",
};

export default function HostelPage() {
  return (
    <>
      <section className="page-hero py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="font-display text-4xl font-bold md:text-5xl">Hostel</h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-100">{hostelInfo.description}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 overflow-hidden rounded-2xl shadow-lg">
            <div className="relative aspect-[21/9]">
              <Image
                src="/images/campus-aerial.png"
                alt="Shree Ganesh campus with hostel facilities"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="section-heading">{hostelInfo.title}</h2>
              <ul className="mt-6 space-y-3">
                {hostelInfo.facilities.map((f) => (
                  <li key={f} className="flex gap-3 text-stone-700">
                    <CheckCircle className="h-5 w-5 shrink-0 text-brand-600" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="section-heading">Hostel Rules</h2>
              <ul className="mt-6 space-y-3">
                {hostelInfo.rules.map((r) => (
                  <li key={r} className="flex gap-3 text-stone-700">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-400" />
                    {r}
                  </li>
                ))}
              </ul>

              <div className="card mt-8">
                <h3 className="font-display font-bold text-brand-900">Hostel Warden</h3>
                <p className="mt-1 text-stone-600">{hostelInfo.warden.name}</p>
                <p className="mt-2 flex items-center gap-2 text-sm text-brand-700">
                  <Phone className="h-4 w-4" />
                  {hostelInfo.warden.phone}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { src: "/images/campus-building.jpg", label: "Campus Building" },
              { src: "/images/ceremony.png", label: "Campus Life" },
              { src: "/images/campus-aerial.png", label: "Full Campus View" },
            ].map((img) => (
              <figure key={img.label} className="overflow-hidden rounded-xl border border-stone-200 shadow-sm">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={img.src}
                    alt={img.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <figcaption className="px-4 py-2 text-sm font-medium text-brand-800">{img.label}</figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/admissions" className="btn-primary">
              Enquire About Hostel Admission
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
