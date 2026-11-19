import { ArrowUpRight, Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";

import { HoursList } from "@/components/contact-panel";
import { business } from "@/lib/site";
import { cn } from "@/lib/utils";

export function LocationHours({ className }: { className?: string }) {
  return (
    <section
      aria-label="Location and business hours"
      className={cn("grid gap-5 lg:grid-cols-[1.1fr_0.9fr]", className)}
    >
      <div className="relative overflow-hidden rounded-4xl border border-ink/10 bg-paper p-7 shadow-soft sm:p-9">
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-20 size-52 rounded-full bg-lime/20 blur-3xl"
        />
        <p className="relative text-[11px] font-bold uppercase tracking-[0.2em] text-teal">
          Find us in Wyoming
        </p>
        <h2
          id="location"
          className="relative mt-3 scroll-mt-32 text-3xl leading-tight tracking-[-0.03em] text-ink"
        >
          Location
        </h2>

        <div className="relative mt-6 space-y-4">
          <a
            href={business.directions}
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-3 text-ink transition-colors hover:text-teal"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
              <MapPin aria-hidden="true" className="size-4" />
            </span>
            <span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-ink-soft">
                Address
              </span>
              <span className="mt-1 block text-sm font-semibold leading-6">
                {business.address}
              </span>
            </span>
          </a>
          <a
            href={business.phoneHref}
            className="flex items-center gap-3 text-ink transition-colors hover:text-teal"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
              <Phone aria-hidden="true" className="size-4" />
            </span>
            <span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-ink-soft">
                Phone
              </span>
              <span className="mt-1 block text-sm font-semibold">
                {business.phone}
              </span>
            </span>
          </a>
          <a
            href={`mailto:${business.email}`}
            className="flex items-center gap-3 text-ink transition-colors hover:text-teal"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
              <Mail aria-hidden="true" className="size-4" />
            </span>
            <span className="min-w-0">
              <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-ink-soft">
                Email
              </span>
              <span className="mt-1 block break-all text-sm font-semibold">
                {business.email}
              </span>
            </span>
          </a>
        </div>

        <div
          aria-hidden="true"
          className="relative mt-7 h-40 overflow-hidden rounded-3xl border border-teal/15 bg-sage/60"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(14,46,51,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,46,51,0.08)_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="absolute -left-8 top-12 h-4 w-[70%] -rotate-6 rounded-full bg-paper/80" />
          <div className="absolute -right-10 top-24 h-3 w-[62%] rotate-12 rounded-full bg-paper/70" />
          <div className="absolute bottom-0 left-[28%] top-0 w-2.5 -rotate-3 bg-paper/75" />
          <div className="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-paper bg-teal text-cream shadow-float">
            <MapPin aria-hidden="true" className="size-6" />
          </div>
          <span className="absolute bottom-3 left-3 rounded-full bg-paper/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-teal-deep">
            411 Wyoming Ave
          </span>
        </div>

        <div className="relative mt-5 flex flex-col gap-2 sm:flex-row">
          <a
            href={business.directions}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-cream transition-colors hover:bg-teal-deep"
          >
            <Navigation aria-hidden="true" className="size-4" />
            Get directions
          </a>
          <a
            href={business.maps}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-teal/40 hover:bg-teal/5"
          >
            View on map
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-4xl bg-ink p-7 text-cream shadow-soft sm:p-9">
        <div className="grain absolute inset-0" aria-hidden="true" />
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-20 size-56 rounded-full bg-[radial-gradient(circle_at_center,_rgba(182,208,106,0.28),_transparent_68%)] blur-2xl"
        />
        <p className="relative flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-lime">
          <Clock aria-hidden="true" className="size-3.5" />
          Plan your visit
        </p>
        <h2
          id="hours"
          className="relative mt-3 scroll-mt-32 text-3xl leading-tight tracking-[-0.03em] text-cream"
        >
          Hours
        </h2>
        <div className="relative mt-6">
          <HoursList tone="dark" />
        </div>
        <p className="relative mt-6 border-t border-white/10 pt-5 text-sm leading-6 text-cream/70">
          Call{" "}
          <a
            href={business.phoneHref}
            className="font-semibold text-cream underline decoration-lime/50 underline-offset-4 transition-colors hover:text-lime"
          >
            {business.phone}
          </a>{" "}
          or text{" "}
          <a
            href={business.textHref}
            className="font-semibold text-cream underline decoration-lime/50 underline-offset-4 transition-colors hover:text-lime"
          >
            {business.email}
          </a>
          . We look forward to hearing from you.
        </p>
      </div>
    </section>
  );
}
