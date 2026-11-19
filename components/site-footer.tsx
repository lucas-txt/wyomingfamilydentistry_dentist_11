import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { FacebookIcon } from "@/components/facebook-icon";
import { Logo } from "@/components/logo";
import { HoursList } from "@/components/contact-panel";
import {
  aboutLinks,
  business,
  legalLinks,
  patientLinks,
  services,
} from "@/lib/site";

const exploreLinks = [
  { label: "Home", href: "/" },
  ...aboutLinks,
  { label: "Services", href: "/services" },
  { label: "Patient Forms", href: "/patient-forms" },
  { label: "New Patients", href: "/new-patients" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Request Appointment", href: "/request-an-appointment" },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-44 size-[36rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(182,208,106,0.22),_transparent_68%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-56 left-[-10%] size-[32rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(15,111,120,0.45),_transparent_70%)] blur-2xl"
      />

      <div className="container-x relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.7fr_0.9fr_1.05fr]">
          <div>
            <div className="inline-flex rounded-2xl bg-cream p-3.5 shadow-soft">
              <Logo />
            </div>
            <p className="mt-6 max-w-sm text-pretty text-sm leading-7 text-cream/65">
              Family dentistry in Wyoming, Ohio, centered on comfort, clear
              communication, and care that fits real life.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={business.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Wyoming Family Dentistry on Facebook"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-white/15 px-4 text-cream transition-colors hover:border-lime hover:bg-lime hover:text-ink"
              >
                <FacebookIcon className="size-4" />
                <span className="text-xs font-semibold">Facebook</span>
              </a>
              <a
                href={business.phoneHref}
                className="inline-flex h-11 items-center gap-2 rounded-full border border-white/15 px-4 text-cream transition-colors hover:border-lime hover:bg-lime hover:text-ink"
              >
                <Phone aria-hidden="true" className="size-4" />
                <span className="text-xs font-semibold">Call</span>
              </a>
              <a
                href={business.textHref}
                className="inline-flex h-11 items-center gap-2 rounded-full border border-white/15 px-4 text-cream transition-colors hover:border-lime hover:bg-lime hover:text-ink"
              >
                <MessageCircle aria-hidden="true" className="size-4" />
                <span className="text-xs font-semibold">Text</span>
              </a>
            </div>
          </div>

          <nav aria-label="Footer explore links">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.22em] text-lime">
              Explore
            </h2>
            <ul className="mt-5 space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1.5 text-sm text-cream/65 transition-colors hover:text-cream"
                  >
                    {link.label}
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-3 opacity-0 transition-opacity group-hover:opacity-60"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer service links">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.22em] text-lime">
              Services
            </h2>
            <ul className="mt-5 space-y-2.5">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-cream/65 transition-colors hover:text-cream"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.22em] text-lime">
              Visit
            </h2>
            <div className="mt-5 space-y-4 text-sm">
              <a
                href={business.directions}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-cream/65 transition-colors hover:text-cream"
              >
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-lime"
                />
                <span className="leading-6">{business.address}</span>
              </a>
              <a
                href={business.phoneHref}
                className="flex items-center gap-3 font-semibold text-cream/85 transition-colors hover:text-cream"
              >
                <Phone aria-hidden="true" className="size-4 text-lime" />
                {business.phoneAlt}
              </a>
              <a
                href={`mailto:${business.email}`}
                className="flex items-center gap-3 break-all text-cream/65 transition-colors hover:text-cream"
              >
                <Mail aria-hidden="true" className="size-4 shrink-0 text-lime" />
                {business.email}
              </a>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-lime">
                  <Clock aria-hidden="true" className="size-3.5" />
                  Business Hours
                </p>
                <HoursList compact tone="dark" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-cream/60">
            Wyoming Family Dentistry© Copyright
          </p>
          <nav aria-label="Legal links">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-cream/65 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {patientLinks
                .filter((link) => link.href === "/rate-our-office")
                .map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-cream/65 transition-colors hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
