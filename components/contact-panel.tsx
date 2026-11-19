import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { business, hours } from "@/lib/site";
import { cn } from "@/lib/utils";

export function HoursList({
  compact = false,
  tone = "light",
}: {
  compact?: boolean;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";

  return (
    <dl className={cn("space-y-2.5", compact && "space-y-2")}>
      {hours.map((item) => (
        <div
          key={item.day}
          className={cn(
            "flex items-baseline justify-between gap-4 border-b pb-2.5 last:border-0 last:pb-0",
            dark ? "border-white/10" : "border-ink/8",
          )}
        >
          <dt
            className={cn(
              "text-sm font-semibold",
              dark ? "text-cream" : "text-ink",
            )}
          >
            {item.day}
          </dt>
          <dd
            className={cn(
              "text-right text-sm tabular-nums",
              dark ? "text-cream/70" : "text-ink-soft",
            )}
          >
            {item.time}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function ContactPanel({
  className,
  heading = "Visit, call, or text us.",
  showHours = true,
}: {
  className?: string;
  heading?: string;
  showHours?: boolean;
}) {
  return (
    <aside
      className={cn(
        "relative w-full min-w-0 overflow-hidden rounded-4xl border border-ink/10 bg-paper p-7 shadow-soft sm:p-8",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute -right-12 -top-16 size-40 rounded-full bg-lime/20 blur-2xl"
      />
      <p className="relative text-[11px] font-bold uppercase tracking-[0.2em] text-teal">
        Wyoming Family Dentistry
      </p>
      <h2 className="relative mt-3 text-3xl leading-tight text-ink">{heading}</h2>

      <div className="relative mt-7 space-y-3">
        <a
          href={business.phoneHref}
          className="flex items-center gap-3 rounded-2xl border border-ink/8 bg-cream/60 p-3.5 transition-colors hover:border-teal/30 hover:bg-teal/5"
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
            <Phone aria-hidden="true" className="size-4" />
          </span>
          <span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-ink-soft">
              Call
            </span>
            <span className="block text-sm font-semibold text-ink">
              {business.phone}
            </span>
          </span>
        </a>
        <a
          href={business.textHref}
          className="flex items-center gap-3 rounded-2xl border border-ink/8 bg-cream/60 p-3.5 transition-colors hover:border-teal/30 hover:bg-teal/5"
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
            <MessageCircle aria-hidden="true" className="size-4" />
          </span>
          <span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-ink-soft">
              Text
            </span>
            <span className="block text-sm font-semibold text-ink">
              {business.email}
            </span>
          </span>
        </a>
        <a
          href={business.directions}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-2xl border border-ink/8 bg-cream/60 p-3.5 transition-colors hover:border-teal/30 hover:bg-teal/5"
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
            <MapPin aria-hidden="true" className="size-4" />
          </span>
          <span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-ink-soft">
              Directions
            </span>
            <span className="block text-sm font-semibold leading-5 text-ink">
              {business.address}
            </span>
          </span>
        </a>
        <a
          href={`mailto:${business.email}`}
          className="flex items-center gap-3 rounded-2xl border border-ink/8 bg-cream/60 p-3.5 transition-colors hover:border-teal/30 hover:bg-teal/5"
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
            <Mail aria-hidden="true" className="size-4" />
          </span>
          <span className="min-w-0">
            <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-ink-soft">
              Email
            </span>
            <span className="block break-all text-sm font-semibold leading-5 text-ink">
              {business.email}
            </span>
          </span>
        </a>
      </div>

      {showHours ? (
        <div className="relative mt-7 rounded-2xl bg-teal-light/45 p-5">
          <p className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-teal-deep">
            <Clock aria-hidden="true" className="size-3.5" />
            Business Hours
          </p>
          <HoursList compact />
        </div>
      ) : null}

      <Button asChild className="relative mt-6 w-full">
        <Link href="/request-an-appointment">
          Request an appointment
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </Link>
      </Button>
    </aside>
  );
}
