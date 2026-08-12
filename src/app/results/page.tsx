import type { Metadata } from "next";
import Image from "next/image";
import { Trophy, TrendingUp, GraduationCap, Stethoscope, Newspaper } from "lucide-react";
import ResultBanner from "@/components/ResultBanner";
import {
  results,
  resultBanners,
  neetToppers2022,
  jeeMains2023Toppers,
  iitSelection2023,
  medicalSelection2022,
  jeeMains2024Toppers,
  sscResults2022,
} from "@/data/college";

export const metadata: Metadata = {
  title: "Results & Achievements",
};

export default function ResultsPage() {
  return (
    <>
      <section className="page-hero py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="font-display text-4xl font-bold md:text-5xl">Results & Achievements</h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-100">
            Outstanding results in NEET, JEE, MH-CET, IIT selection, and medical admissions — a testament to
            dedicated faculty and hardworking students at Shree Ganesh Junior College, Korhale.
          </p>
        </div>
      </section>

      {/* Result Banners */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl space-y-12 px-4">
          {resultBanners.map((banner, i) => (
            <ResultBanner
              key={banner.src}
              title={banner.title}
              subtitle={banner.subtitle}
              src={banner.src}
              alt={banner.alt}
              priority={i === 0}
            />
          ))}
        </div>
      </section>

      {/* SSC 10th Results — Newspaper */}
      <section className="bg-brand-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-heading flex items-center gap-2">
            <Newspaper className="h-8 w-8 text-brand-600" />
            SSC Board Results 2022
          </h2>
          <p className="section-subheading">
            {sscResults2022.headline} — {sscResults2022.institution}. Featured in {sscResults2022.source}.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-lg">
              <Image
                src={sscResults2022.newspaperImage}
                alt="Punya Nagari newspaper — Shree Ganesh 100% SSC results"
                width={800}
                height={1000}
                className="h-auto w-full object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2">
                <div className="card text-center">
                  <p className="font-display text-3xl font-bold text-brand-600">{sscResults2022.stats.pass}</p>
                  <p className="text-xs text-stone-500">Pass Rate</p>
                </div>
                <div className="card text-center">
                  <p className="font-display text-3xl font-bold text-brand-600">{sscResults2022.stats.appeared}</p>
                  <p className="text-xs text-stone-500">Students Appeared</p>
                </div>
                <div className="card text-center">
                  <p className="font-display text-3xl font-bold text-brand-600">{sscResults2022.stats.distinction}</p>
                  <p className="text-xs text-stone-500">Distinction</p>
                </div>
                <div className="card text-center">
                  <p className="font-display text-3xl font-bold text-brand-600">3rd</p>
                  <p className="text-xs text-stone-500">Year in a Row</p>
                </div>
              </div>

              <h3 className="mt-8 font-display text-lg font-bold text-brand-900">SSC Toppers 2022</h3>
              <div className="mt-4 space-y-3">
                {sscResults2022.toppers.map((student, i) => (
                  <div key={student.name} className="card flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Trophy className={`h-5 w-5 ${i === 0 ? "text-accent-500" : "text-brand-600"}`} />
                      <span className="font-medium text-stone-800">{student.name}</span>
                    </div>
                    <span className="font-display font-bold text-brand-600">{student.score}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick highlight cards */}
      <section className="bg-brand-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-heading">Entrance Exam Highlights</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.entranceHighlights.map((item) => (
              <div key={item.exam} className="card flex items-start gap-4">
                <TrendingUp className="h-8 w-8 shrink-0 text-brand-600" />
                <div>
                  <h3 className="font-display font-bold text-brand-900">{item.exam}</h3>
                  <p className="mt-1 text-sm text-stone-600">{item.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JEE Mains 2023 toppers */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-heading">JEE Mains 2023 — Top Performers</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {jeeMains2023Toppers.map((student, i) => (
              <div key={student.name} className="card text-center">
                <Trophy className={`mx-auto h-8 w-8 ${i === 0 ? "text-accent-500" : "text-brand-600"}`} />
                <h3 className="mt-3 font-display font-bold text-brand-900">{student.name}</h3>
                <p className="mt-1 font-display text-xl font-bold text-brand-600">{student.score}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IIT & Medical selections */}
      <section className="bg-brand-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="section-heading flex items-center gap-2">
                <GraduationCap className="h-8 w-8 text-brand-600" />
                IIT Selection 2023
              </h2>
              <div className="mt-6 space-y-4">
                {iitSelection2023.map((student) => (
                  <div key={student.name} className="card">
                    <h3 className="font-display font-bold text-brand-900">{student.name}</h3>
                    <p className="mt-1 text-sm text-brand-600">{student.achievement}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="section-heading flex items-center gap-2">
                <Stethoscope className="h-8 w-8 text-brand-600" />
                Medical Selection 2022
              </h2>
              <div className="mt-6 space-y-4">
                {medicalSelection2022.map((student) => (
                  <div key={student.name} className="card">
                    <h3 className="font-display font-bold text-brand-900">{student.name}</h3>
                    <p className="mt-1 text-sm text-brand-600">{student.achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEET 2022 toppers */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-heading">NEET 2022 — Top Scorers</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {neetToppers2022.map((student, i) => (
              <div key={student.name} className="card text-center">
                <Trophy className={`mx-auto h-8 w-8 ${i === 0 ? "text-accent-500" : "text-brand-600"}`} />
                <h3 className="mt-3 font-display font-bold text-brand-900">{student.name}</h3>
                <p className="mt-1 font-display text-xl font-bold text-brand-600">{student.score}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JEE Mains 2024 */}
      <section className="bg-brand-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-heading">JEE Mains 2024 — All Toppers</h2>
          <p className="section-subheading">
            20 students with outstanding percentiles — see the full banner above for photos.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            {jeeMains2024Toppers.map((student, i) => (
              <div key={student.name} className="card text-center">
                {i === 0 && (
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-500">
                    Top Scorer
                  </p>
                )}
                <h3 className="font-display font-bold text-brand-900">{student.name}</h3>
                <p className="mt-1 font-display text-lg font-bold text-brand-600">{student.score}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board results placeholder */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-heading">HSC Board Results</h2>
          <p className="section-subheading">Updated figures will be added when official board results are published.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {(["science", "commerce"] as const).map((stream) => (
              <div key={stream} className="card">
                <h3 className="font-display text-xl font-bold capitalize text-brand-900">
                  {stream} Stream
                </h3>
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="font-display text-2xl font-bold text-brand-600">
                      {results.board2025[stream].pass}
                    </p>
                    <p className="text-xs text-stone-500">Pass Rate</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-brand-600">
                      {results.board2025[stream].distinction}
                    </p>
                    <p className="text-xs text-stone-500">Distinction</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-accent-600">
                      {results.board2025[stream].topScore}
                    </p>
                    <p className="text-xs text-stone-500">Top Score</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
