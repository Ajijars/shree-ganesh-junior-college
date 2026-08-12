import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Trophy,
  Users,
  Building2,
  Bell,
  Newspaper,
} from "lucide-react";
import ImageGallery from "@/components/ImageGallery";
import LeadershipCard from "@/components/LeadershipCard";
import {
  siteConfig,
  stats,
  scienceBatches,
  announcements,
  leadership,
  visionMission,
  galleryImages,
  sscResults2022,
} from "@/data/college";

export default function HomePage() {
  return (
    <>
      {/* Hero with campus photo */}
      <section className="relative min-h-[520px] overflow-hidden">
        <Image
          src="/images/campus-building.jpg"
          alt="Shree Ganesh Junior College campus, Korhale"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 via-brand-800/80 to-brand-700/60" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start px-4 py-20 md:min-h-[520px] md:justify-center md:py-28">
          <Image
            src="/images/logo.png"
            alt="Shree Ganesh logo"
            width={80}
            height={80}
            className="mb-6 h-20 w-20 rounded-xl bg-white/95 p-2 object-contain shadow-lg"
          />
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-300">
            11th & 12th Science · Commerce
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mt-2 text-xl text-brand-100">{siteConfig.location}</p>
          <p className="mt-6 text-2xl font-medium italic text-accent-300 md:text-3xl">
            &ldquo;{siteConfig.tagline}&rdquo;
          </p>
          <p className="mt-6 max-w-xl text-lg text-brand-50">{siteConfig.description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/admissions" className="btn-primary bg-brand-400 hover:bg-brand-500">
              Admission Enquiry
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/about" className="btn-secondary border-white text-white hover:bg-white/10">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
          <Bell className="h-5 w-5 shrink-0 text-brand-600" />
          <div className="flex flex-wrap gap-x-8 gap-y-1 text-sm">
            {announcements.map((a) => (
              <span key={a.text}>
                <span className="font-semibold text-brand-700">{a.date}:</span>{" "}
                <span className="text-stone-600">{a.text}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-bold text-brand-600 md:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-stone-600">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* In the News — Newspaper Clipping */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-heading flex items-center justify-center gap-3">
            <Newspaper className="h-8 w-8 text-amber-600" />
            In the News
          </h2>
          <p className="section-subheading">
            Featured in Punya Nagari — {sscResults2022.headline}
          </p>
          <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">
            <div className="group relative overflow-hidden rounded-2xl border-2 border-amber-200 bg-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-amber-400">
              <div className="absolute left-4 top-4 z-10 rounded-full bg-amber-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                📰 Punya Nagari
              </div>
              <Image
                src={sscResults2022.newspaperImage}
                alt="Punya Nagari newspaper — Shree Ganesh 100% SSC results 3rd consecutive year"
                width={800}
                height={600}
                className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl border border-amber-200 bg-white/80 p-6 shadow-md backdrop-blur-sm">
                <h3 className="font-display text-2xl font-bold text-brand-900">
                  🏆 {sscResults2022.headline}
                </h3>
                <p className="mt-2 text-stone-600">
                  {sscResults2022.institution} achieved <strong>100% pass rate</strong> in SSC Board exams
                  for the <strong>3rd consecutive year</strong>, with <strong>{sscResults2022.stats.distinction} distinctions</strong> out
                  of {sscResults2022.stats.appeared} students.
                </p>
                <p className="mt-3 text-sm italic text-stone-500">
                  — {sscResults2022.source}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-brand-100 bg-white p-4 text-center shadow-sm">
                  <p className="font-display text-3xl font-bold text-brand-600">{sscResults2022.stats.pass}</p>
                  <p className="text-xs text-stone-500">Pass Rate</p>
                </div>
                <div className="rounded-xl border border-brand-100 bg-white p-4 text-center shadow-sm">
                  <p className="font-display text-3xl font-bold text-brand-600">{sscResults2022.stats.distinction}</p>
                  <p className="text-xs text-stone-500">Distinctions</p>
                </div>
              </div>
              <Link href="/results" className="btn-primary inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600">
                View All Results
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Gallery */}
      <section className="bg-brand-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-heading">Our Campus</h2>
          <p className="section-subheading">
            A modern, well-maintained campus with spacious buildings and green surroundings at Korhale.
          </p>
          <div className="mt-10">
            <ImageGallery images={galleryImages} columns={4} />
          </div>
        </div>
      </section>

      {/* Science Batches */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-heading">Science Batches</h2>
          <p className="section-subheading">
            Specialized 11th & 12th Science programs tailored for NEET, JEE, CET, and Board examinations.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {scienceBatches.map((batch) => (
              <Link
                key={batch.id}
                href={`/academics/science/${batch.slug}`}
                className="card group hover:border-brand-200"
              >
                <h3 className="font-display text-lg font-bold text-brand-900 group-hover:text-brand-700">
                  {batch.name}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-stone-600">{batch.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                  View Syllabus <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/academics/commerce" className="btn-secondary">
              Explore Commerce Stream
            </Link>
          </div>
        </div>
      </section>

      {/* Vision & Leadership preview */}
      <section className="bg-brand-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="section-heading">Our Vision</h2>
              <p className="mt-4 leading-relaxed text-stone-700">{visionMission.vision}</p>
              <Link href="/about" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                Read full mission <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <LeadershipCard person={leadership.chairman} size="sm" />
              <LeadershipCard person={leadership.biologyFaculty} size="sm" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick links grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-heading text-center">Explore SGJC Korhale</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/academics", icon: BookOpen, title: "Academics", desc: "Science & Commerce streams" },
              { href: "/hostel", icon: Building2, title: "Hostel", desc: "Safe residential facilities" },
              { href: "/results", icon: Trophy, title: "Results", desc: "Board & entrance achievements" },
              { href: "/activities", icon: Users, title: "Activities", desc: "Sports, events & competitions" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="card text-center">
                <item.icon className="mx-auto h-10 w-10 text-brand-600" />
                <h3 className="mt-4 font-display font-bold text-brand-900">{item.title}</h3>
                <p className="mt-1 text-sm text-stone-600">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-hero py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Ready to Join SGJC Korhale?</h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-100">
            Admissions are open for 11th & 12th Science and Commerce. Contact us or submit an enquiry today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/admissions" className="btn-primary bg-brand-400 hover:bg-brand-500">
              Start Admission Enquiry
            </Link>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white/10">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
