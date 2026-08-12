import type { Metadata } from "next";
import { Mail, Phone, MapPin, Instagram, Clock } from "lucide-react";
import { siteConfig, leadership } from "@/data/college";
import EnquiryForm from "@/components/EnquiryForm";
import LeadershipCard from "@/components/LeadershipCard";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="font-display text-4xl font-bold md:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-100">
            Get in touch for admissions, hostel enquiries, or any questions about SGJC Korhale.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="section-heading">Get In Touch</h2>

              <div className="mt-8 space-y-6">
                <div className="card flex items-start gap-4">
                  <MapPin className="h-6 w-6 shrink-0 text-brand-800" />
                  <div>
                    <h3 className="font-semibold text-brand-900">Address</h3>
                    <p className="mt-1 text-sm text-stone-600">
                      {siteConfig.address.line1}<br />
                      {siteConfig.address.line2}<br />
                      {siteConfig.address.line3}
                    </p>
                  </div>
                </div>

                <div className="card flex items-start gap-4">
                  <Phone className="h-6 w-6 shrink-0 text-brand-800" />
                  <div>
                    <h3 className="font-semibold text-brand-900">Phone</h3>
                    <p className="mt-1 text-sm text-stone-600">{siteConfig.phone}</p>
                    <p className="text-sm text-stone-500">{siteConfig.phoneAlt}</p>
                  </div>
                </div>

                <div className="card flex items-start gap-4">
                  <Mail className="h-6 w-6 shrink-0 text-brand-800" />
                  <div>
                    <h3 className="font-semibold text-brand-900">Email</h3>
                    <a href={`mailto:${siteConfig.emails.primary}`} className="mt-1 block text-sm text-brand-700 hover:underline">
                      {siteConfig.emails.primary}
                    </a>
                    <a href={`mailto:${siteConfig.emails.documents}`} className="block text-sm text-brand-700 hover:underline">
                      {siteConfig.emails.documents}
                    </a>
                  </div>
                </div>

                <div className="card flex items-start gap-4">
                  <Instagram className="h-6 w-6 shrink-0 text-brand-800" />
                  <div>
                    <h3 className="font-semibold text-brand-900">Instagram</h3>
                    <a
                      href={siteConfig.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm text-brand-700 hover:underline"
                    >
                      @shreeganesh_official
                    </a>
                  </div>
                </div>

                <div className="card flex items-start gap-4">
                  <Clock className="h-6 w-6 shrink-0 text-brand-800" />
                  <div>
                    <h3 className="font-semibold text-brand-900">Office Hours</h3>
                    <p className="mt-1 text-sm text-stone-600">{siteConfig.officeHours}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <LeadershipCard person={leadership.chairman} size="sm" />
                <LeadershipCard person={leadership.biologyFaculty} size="sm" />
              </div>
            </div>

            <div>
              <h2 className="section-heading">Send a Message</h2>
              <div className="mt-8">
                <EnquiryForm />
              </div>
            </div>
          </div>

          <div className="mt-12 flex h-64 items-center justify-center rounded-xl bg-stone-200 text-stone-600">
            Google Maps — Location pin will be added when address is confirmed
          </div>
        </div>
      </section>
    </>
  );
}
