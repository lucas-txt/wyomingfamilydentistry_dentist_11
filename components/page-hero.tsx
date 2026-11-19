import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, MapPin, Phone } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { business } from "@/lib/site";
import { cn } from "@/lib/utils";

export type Crumb = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  breadcrumbs?: Crumb[];
  children?: React.ReactNode;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "Wyoming Family Dentistry",
  breadcrumbs,
  children,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden border-b border-line/60 bg-cream",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-52 size-[34rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(182,208,106,0.35),_transparent_66%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-64 -left-40 size-[30rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(15,111,120,0.18),_transparent_68%)] blur-2xl"
      />
      <div className="container-x relative grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-24">
        <div>
          {breadcrumbs?.length ? (
            <nav aria-label="Breadcrumb" className="mb-7">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-ink-soft">
                {breadcrumbs.map((crumb, index) => (
                  <li key={crumb.label} className="flex items-center gap-1.5">
                    {crumb.href ? (
                      <Link
                        href={crumb.href}
                        className="transition-colors hover:text-teal"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span aria-current="page" className="text-ink">
                        {crumb.label}
                      </span>
                    )}
                    {index < breadcrumbs.length - 1 ? (
                      <ChevronRight
                        aria-hidden="true"
                        className="size-3 text-ink-soft/50"
                      />
                    ) : null}
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}
          <Reveal>
            <Badge className="mb-5 border-teal/15 bg-teal/5 text-teal">
              <span className="size-1.5 rounded-full bg-lime" />
              {eyebrow}
            </Badge>
            <h1 className="text-balance text-[2.7rem] leading-[1.02] tracking-[-0.045em] text-ink sm:text-6xl lg:text-[4.4rem]">
              {title}
            </h1>
            {description ? (
              <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
                {description}
              </p>
            ) : null}
            {children ? <div className="mt-8">{children}</div> : null}
          </Reveal>
        </div>

        <Reveal delay={0.12} y={18}>
          {image ? (
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] rounded-tr-[5rem] border border-white/70 shadow-soft">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
              </div>
              <div className="glass absolute -bottom-5 left-5 right-5 rounded-2xl p-4 shadow-float sm:left-7 sm:right-auto sm:max-w-xs">
                <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <MapPin aria-hidden="true" className="size-4 text-teal" />
                  {business.address}
                </p>
              </div>
            </div>
          ) : (
            <div className="relative overflow-hidden rounded-4xl border border-white/70 bg-paper p-7 shadow-soft sm:p-9">
              <div
                aria-hidden="true"
                className="absolute -right-14 -top-16 size-44 rounded-full bg-lime/25 blur-2xl"
              />
              <p className="relative text-[11px] font-bold uppercase tracking-[0.22em] text-teal">
                Here when you need us
              </p>
              <p className="relative mt-4 font-display text-3xl leading-tight text-ink">
                Personal care, close to home.
              </p>
              <div className="relative mt-7 space-y-4 text-sm font-semibold text-ink">
                <a
                  href={business.phoneHref}
                  className="flex items-center gap-3 transition-colors hover:text-teal"
                >
                  <span className="flex size-9 items-center justify-center rounded-full bg-teal/10 text-teal">
                    <Phone aria-hidden="true" className="size-4" />
                  </span>
                  {business.phone}
                </a>
                <p className="flex items-start gap-3 leading-6">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                    <MapPin aria-hidden="true" className="size-4" />
                  </span>
                  {business.address}
                </p>
              </div>
              <Button asChild className="relative mt-7 w-full" variant="primary">
                <Link href="/request-an-appointment">
                  Request appointment
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </Link>
              </Button>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
