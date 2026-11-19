import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Quote, Star } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/lib/content";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  title: "Testimonials – Wyoming Family Dentistry",
  description:
    "Read patient reviews and a featured Google review for Wyoming Family Dentistry in Wyoming, Ohio.",
  alternates: { canonical: "/testimonials" },
};

const featured = testimonials.find((item) => item.featured);
const patientReviews = testimonials.filter((item) => !item.featured);

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient stories"
        title="Testimonials"
        description="Whether you are a long-time patient or new to our office, we would love to hear from you."
        image="/assets/images/hero-family.webp"
        imageAlt="A family smiling together at Wyoming Family Dentistry"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Patients", href: "/patient-forms" },
          { label: "Testimonials" },
        ]}
      />

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="Shared experiences"
                title="In their own words."
                description="If you’ve had an experience at Wyoming Family Dentistry that you would like to share with us or with others, please feel free to."
              />
              <Button asChild variant="outline">
                <Link href="/rate-our-office">
                  Rate our office
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>

          {featured ? (
            <Reveal delay={0.08}>
              <section
                aria-labelledby="featured-review"
                className="relative mt-10 overflow-hidden rounded-5xl border border-ink/10 bg-ink p-7 text-cream shadow-soft sm:p-10 lg:p-14"
              >
                <div className="grain absolute inset-0" aria-hidden="true" />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-24 -top-28 size-80 rounded-full bg-[radial-gradient(circle_at_center,_rgba(182,208,106,0.3),_transparent_68%)] blur-2xl"
                />
                <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2
                        id="featured-review"
                        className="text-[11px] font-bold uppercase tracking-[0.2em] text-lime"
                      >
                        Featured Google Review
                      </h2>
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-cream/70">
                        <Image
                          src="/assets/images/google-icon.webp"
                          alt=""
                          width={180}
                          height={180}
                          loading="eager"
                          className="size-3.5"
                        />
                        Google review
                      </span>
                    </div>
                    <Quote
                      aria-hidden="true"
                      className="mt-6 size-10 fill-lime/30 text-lime"
                    />
                    <blockquote className="mt-4 max-w-4xl text-pretty font-display text-2xl leading-[1.42] tracking-[-0.015em] text-cream sm:text-3xl lg:text-[2.15rem]">
                      “{featured.quote}”
                    </blockquote>
                    <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2">
                      <div
                        className="flex items-center gap-1 text-lime"
                        aria-hidden="true"
                      >
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star key={index} className="size-4 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm font-bold text-cream">
                        {featured.author}
                      </p>
                      <span className="hidden h-4 w-px bg-white/20 sm:block" />
                      <p className="text-xs font-semibold text-cream/65">
                        {featured.source}
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <a
                      href={business.reviews}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-cream"
                    >
                      Read more reviews on Google
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </a>
                  </div>
                </div>
              </section>
            </Reveal>
          ) : null}

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {patientReviews.map((review, index) => (
              <Reveal key={review.author} delay={index * 0.04}>
                <article className="flex h-full flex-col rounded-4xl border border-ink/10 bg-paper p-7 shadow-soft">
                  <div
                    className="flex items-center gap-1 text-lime-deep"
                    aria-hidden="true"
                  >
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="size-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-5 flex-1 text-pretty text-[15.5px] leading-7 text-ink-soft">
                    “{review.quote}”
                  </blockquote>
                  <div className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-5">
                    <span className="flex size-9 items-center justify-center rounded-full bg-teal/10 font-display text-sm text-teal">
                      {review.author.charAt(0)}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-ink">{review.author}</p>
                      <p className="text-xs text-ink-soft">{review.source}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-col gap-4 rounded-4xl border border-ink/10 bg-sage/50 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal">
                  Your voice matters
                </p>
                <h2 className="mt-3 text-3xl leading-tight text-ink">
                  Tell us how we did.
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-soft">
                  We always encourage your feedback. Share your experience with
                  our patient satisfaction survey.
                </p>
              </div>
              <Button asChild className="shrink-0">
                <Link href="/rate-our-office">
                  Rate our office
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Join our dental family"
        title="We would love to care for your smile."
        description="Request an appointment and our team will follow up to confirm a time that works for you."
      />
    </>
  );
}
