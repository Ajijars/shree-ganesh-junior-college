import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import { navLinks, siteConfig } from "@/data/college";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-brand-950 text-stone-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Shree Ganesh logo"
              width={44}
              height={44}
              className="h-11 w-11 object-contain brightness-0 invert"
            />
            <div>
              <p className="font-display font-bold text-white">Shree Ganesh</p>
              <p className="text-xs">Junior College, Korhale</p>
            </div>
          </div>
          <p className="mb-2 text-sm italic text-accent-300">{siteConfig.tagline}</p>
          <p className="text-sm leading-relaxed">{siteConfig.description}</p>
        </div>

        <div>
          <h3 className="mb-4 font-display font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-accent-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display font-semibold text-white">Academics</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/academics/science/neet" className="transition hover:text-accent-300">NEET Batch</Link></li>
            <li><Link href="/academics/science/jee" className="transition hover:text-accent-300">JEE Batch</Link></li>
            <li><Link href="/academics/science/cet" className="transition hover:text-accent-300">CET Batch</Link></li>
            <li><Link href="/academics/science/regular-board" className="transition hover:text-accent-300">Regular Board</Link></li>
            <li><Link href="/academics/commerce" className="transition hover:text-accent-300">Commerce Stream</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display font-semibold text-white">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
              <span>
                {siteConfig.address.line1}<br />
                {siteConfig.address.line2}<br />
                {siteConfig.address.line3}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-accent-400" />
              <span>{siteConfig.phone}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-accent-400" />
              <a href={`mailto:${siteConfig.emails.primary}`} className="transition hover:text-accent-300">
                {siteConfig.emails.primary}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="h-4 w-4 shrink-0 text-accent-400" />
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-accent-300"
              >
                @shreeganesh_official
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-900 px-4 py-4 text-center text-xs text-stone-500">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
