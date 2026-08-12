import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { leadership, visionMission } from "@/data/college";
import LeadershipCard from "@/components/LeadershipCard";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden py-16">
        <Image
          src="/images/campus-aerial.png"
          alt="Shree Ganesh campus aerial view"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-brand-900/75" />
        <div className="relative mx-auto max-w-7xl px-4">
          <h1 className="font-display text-4xl font-bold text-white md:text-5xl">About Us</h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-100">
            Discover the vision, leadership, and values that drive Shree Ganesh Junior College, Korhale.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="section-heading">Our Vision</h2>
              <p className="mt-4 text-lg leading-relaxed text-stone-700">{visionMission.vision}</p>
            </div>
            <div>
              <h2 className="section-heading">Our Mission</h2>
              <ul className="mt-4 space-y-3">
                {visionMission.mission.map((item, i) => (
                  <li key={i} className="flex gap-3 text-stone-700">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-800">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl shadow-lg">
            <div className="relative aspect-[21/9]">
              <Image
                src="/images/campus-building.jpg"
                alt="Shree Ganesh Junior College building"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-heading text-center">Leadership & Faculty</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <LeadershipCard person={leadership.chairman} />
            <LeadershipCard person={leadership.biologyFaculty} />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-heading">Infrastructure</h2>
          <p className="section-subheading">
            Modern facilities to support academic excellence and holistic development.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Well-equipped Physics, Chemistry & Biology labs",
              "Computer lab with internet access",
              "Library with reference & competitive exam books",
              "Smart classrooms with audio-visual aids",
              "Sports ground & indoor game facilities",
              "Boys & Girls hostel with mess",
            ].map((item) => (
              <div key={item} className="card flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-600" />
                <span className="text-stone-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/contact" className="btn-primary">
              Schedule a Campus Visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
