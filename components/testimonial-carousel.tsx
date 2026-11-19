"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

import type { Testimonial } from "@/lib/content";
import { cn } from "@/lib/utils";

type TestimonialCarouselProps = {
  testimonials: Testimonial[];
  className?: string;
};

export function TestimonialCarousel({
  testimonials,
  className,
}: TestimonialCarouselProps) {
  const [index, setIndex] = React.useState(0);
  const reduce = useReducedMotion();
  const count = testimonials.length;

  const go = React.useCallback(
    (direction: 1 | -1) => {
      setIndex((current) => (current + direction + count) % count);
    },
    [count],
  );

  const active = testimonials[index];

  return (
    <div
      className={cn("relative", className)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Patient testimonials"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          go(-1);
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          go(1);
        }
      }}
    >
      <div className="relative overflow-hidden rounded-5xl border border-ink/10 bg-paper p-6 shadow-soft sm:p-10 lg:p-14">
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-20 size-64 rounded-full bg-lime/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -left-16 size-64 rounded-full bg-teal/10 blur-3xl"
        />
        <Quote
          aria-hidden="true"
          className="relative size-10 fill-lime/30 text-lime-deep sm:size-14"
        />
        <div aria-live="polite" aria-atomic="true" className="relative">
          <AnimatePresence mode="wait" initial={false}>
            <motion.figure
              key={index}
              initial={reduce ? false : { opacity: 0, x: 18 }}
              animate={reduce ? undefined : { opacity: 1, x: 0 }}
              exit={reduce ? undefined : { opacity: 0, x: -18 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <blockquote className="mt-5 text-pretty font-display text-[1.65rem] leading-[1.38] tracking-[-0.015em] text-ink sm:text-3xl sm:leading-[1.42] lg:text-[2.1rem]">
                “{active.quote}”
              </blockquote>
              <figcaption className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
                <div className="flex items-center gap-1 text-lime-deep" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="size-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-bold text-ink">{active.author}</span>
                <span className="hidden h-4 w-px bg-ink/15 sm:block" />
                {active.source === "Google review" ? (
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-ink-soft">
                    <Image
                      src="/assets/images/google-icon.webp"
                      alt=""
                      width={180}
                      height={180}
                      loading="eager"
                      className="size-4"
                    />
                    {active.source}
                  </span>
                ) : (
                  <span className="text-xs font-semibold text-ink-soft">
                    {active.source}
                  </span>
                )}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-1.5">
          {testimonials.map((testimonial, dotIndex) => (
            <button
              key={testimonial.author}
              type="button"
              aria-label={`Show testimonial ${dotIndex + 1} of ${count}`}
              aria-current={dotIndex === index ? "true" : undefined}
              onClick={() => setIndex(dotIndex)}
              className={cn(
                "h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2",
                dotIndex === index
                  ? "w-8 bg-teal"
                  : "w-2 bg-ink/15 hover:bg-ink/30",
              )}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="flex size-11 items-center justify-center rounded-full border border-ink/15 bg-paper text-ink transition-colors hover:border-teal hover:bg-teal hover:text-cream"
          >
            <ChevronLeft aria-hidden="true" className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="flex size-11 items-center justify-center rounded-full border border-ink/15 bg-paper text-ink transition-colors hover:border-teal hover:bg-teal hover:text-cream"
          >
            <ChevronRight aria-hidden="true" className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
