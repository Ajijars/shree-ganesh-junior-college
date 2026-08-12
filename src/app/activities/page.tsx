import type { Metadata } from "next";
import Image from "next/image";
import { sports, events, competitions, galleryImages } from "@/data/college";
import ImageGallery from "@/components/ImageGallery";

export const metadata: Metadata = {
  title: "Sports & Activities",
};

export default function ActivitiesPage() {
  return (
    <>
      <section className="relative overflow-hidden py-16">
        <Image
          src="/images/ceremony.png"
          alt="Campus ceremony at Shree Ganesh Junior College"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-900/75" />
        <div className="relative mx-auto max-w-7xl px-4">
          <h1 className="font-display text-4xl font-bold text-white md:text-5xl">Sports & Activities</h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-100">
            Beyond academics — sports, cultural events, gatherings, and competitions that build character and teamwork.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-heading">Sports</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sports.map((sport) => (
              <div key={sport.name} className="card">
                <h3 className="font-display text-lg font-bold text-brand-900">{sport.name}</h3>
                <p className="mt-2 text-sm text-stone-600">{sport.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-heading">Events & Gatherings</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <div key={event.title} className="card">
                <span className="inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-800">
                  {event.date}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-brand-900">{event.title}</h3>
                <p className="mt-2 text-sm text-stone-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-heading">Competitions</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {competitions.map((comp) => (
              <div key={comp.name} className="card flex items-center justify-between">
                <h3 className="font-semibold text-brand-900">{comp.name}</h3>
                <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700">
                  {comp.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-heading">Gallery</h2>
          <p className="section-subheading">Campus life, ceremonies, and achievements at SGJC Korhale.</p>
          <div className="mt-8">
            <ImageGallery images={galleryImages} columns={4} />
          </div>
        </div>
      </section>
    </>
  );
}
