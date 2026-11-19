import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, MessageCircleHeart, Star } from "lucide-react";

import { RatingForm } from "@/components/forms/rating-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rate Our Office – Wyoming Family Dentistry",
  description:
    "Share your experience with Wyoming Family Dentistry through our patient satisfaction survey.",
  alternates: { canonical: "/rate-our-office" },
};

export default function RateOurOfficePage() {
  return (
    <>
      <PageHero
        eyebrow="Patient feedback"
        title="Rate Our Office"
        description="We want to hear from you! Tell us about your visit and how we can keep improving."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Rate Our Office" },
        ]}
      />

      <section className="py-14 sm:py-20">
        <div className="container-x grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:items-start lg:gap-10">
          <Reveal>
            <RatingForm />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="space-y-5">
              <div className="relative overflow-hidden rounded-4xl bg-ink p-7 text-cream shadow-soft sm:p-8">
                <div className="grain absolute inset-0" aria-hidden="true" />
                <Image
                  src="/assets/images/stars.webp"
                  alt="Five stars"
                  width={300}
                  height={69}
                  loading="eager"
                  className="relative h-5 w-auto"
                />
                <h2 className="relative mt-5 text-balance text-3xl leading-tight text-cream">
                  We want to hear from you!
                </h2>
                <p className="relative mt-4 text-sm leading-7 text-cream/70">
                  Your feedback helps our team understand what is working and
                  where we can do better. Every response is appreciated.
                </p>
                <div className="relative mt-6 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Star
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-lime"
                  />
                  <p className="text-xs leading-5 text-cream/70">
                    Prefer to leave a public review? You can also read and share
                    reviews on Google.
                  </p>
                </div>
                <a
                  href={business.reviews}
                  target="_blank"
                  rel="noreferrer"
                  className="relative mt-5 inline-flex items-center gap-2 text-sm font-bold text-lime transition-colors hover:text-cream"
                >
                  Read reviews on Google
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              </div>

              <div className="rounded-4xl border border-ink/10 bg-sage/45 p-6">
                <MessageCircleHeart
                  aria-hidden="true"
                  className="size-5 text-teal"
                />
                <h2 className="mt-3 text-2xl leading-tight text-ink">
                  A note about your rating
                </h2>
                <p className="mt-2 text-sm leading-6 text-ink-soft">
                  Use a scale from 1 to 10, where 1 is the worst and 10 is the
                  best. Share as much detail as you like.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
