import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { business } from "@/lib/site";
import { cn } from "@/lib/utils";

type CtaBandProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  className?: string;
};

export function CtaBand({
  eyebrow = "Ready when you are",
  title = "Your next visit starts with a conversation.",
  description = "Tell us what you need and when you would like to come in. Our team will follow up to confirm your appointment.",
  primaryLabel = "Request an appointment",
  primaryHref = "/request-an-appointment",
  secondaryLabel = "Call the office",
  secondaryHref = business.phoneHref,
  className,
}: CtaBandProps) {
  return (
    <section className={cn("relative overflow-hidden bg-ink py-20 sm:py-24", className)}>
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 size-[26rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(182,208,106,0.45),_transparent_66%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-[8%] size-[24rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(15,111,120,0.55),_transparent_68%)] blur-2xl"
      />
      <div className="container-x relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <Reveal>
          <p className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-lime">
            <span className="inline-block size-1.5 rounded-full bg-lime" />
            {eyebrow}
          </p>
          <h2 className="max-w-3xl text-balance text-4xl leading-[1.04] tracking-[-0.04em] text-cream sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-cream/70 sm:text-lg sm:leading-8">
            {description}
          </p>
        </Reveal>
        <Reveal delay={0.1} y={16}>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Button asChild variant="lime" size="lg" className="group">
              <Link href={primaryHref}>
                {primaryLabel}
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </Button>
            <Button asChild variant="light" size="lg">
              <Link href={secondaryHref}>
                <Phone aria-hidden="true" className="size-4" />
                {secondaryLabel}
              </Link>
            </Button>
          </div>
          <p className="mt-5 text-sm text-cream/55">
            {business.address}
            <span aria-hidden="true" className="mx-2 text-cream/60">
              /
            </span>
            {business.phone}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
