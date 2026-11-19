import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CalendarCheck, ClipboardList, MessagesSquare } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services – Wyoming Family Dentistry",
  description:
    "Preventative, restorative, cosmetic, and specialized dental services at Wyoming Family Dentistry in Wyoming, Ohio.",
  alternates: { canonical: "/services" },
};

const steps = [
  {
    icon: MessagesSquare,
    title: "Start with a conversation",
    text: "Tell us what you are noticing and what you would like to change. We will listen first.",
  },
  {
    icon: ClipboardList,
    title: "Build a clear plan",
    text: "Your dentist explains the options, the timeline, and what to expect so you can decide with confidence.",
  },
  {
    icon: CalendarCheck,
    title: "Follow through together",
    text: "From routine visits to treatment, our team stays available for questions before, during, and after care.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Complete care"
        title="Services"
        description="From everyday prevention to restorative and cosmetic treatment, Wyoming Family Dentistry offers care for every stage of your smile."
        image="/assets/images/service-cosmetic.webp"
        imageAlt="Cosmetic dentistry at Wyoming Family Dentistry"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Nine ways we care for you"
              title="Our Services"
              description="Explore the treatments available at our Wyoming, Ohio office. If you are unsure which service fits your needs, start with a conversation."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.href} delay={index * 0.035}>
                <ServiceCard service={service} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-sand/35 py-16 sm:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="What to expect"
              title="A straightforward path to care."
              description="No pressure and no guesswork. Just a clear next step, explained in plain language."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.06}>
                <article className="h-full rounded-4xl border border-ink/10 bg-paper p-7 shadow-soft">
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex size-11 items-center justify-center rounded-full bg-teal/10 text-teal">
                      <step.icon aria-hidden="true" className="size-5" />
                    </span>
                    <span
                      aria-hidden="true"
                      data-step={`0${index + 1}`}
                      className="step-number font-display text-4xl leading-none text-ink"
                    />
                  </div>
                  <h2 className="mt-5 text-2xl leading-tight text-ink">
                    {step.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-ink-soft">
                    {step.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-col gap-3 rounded-3xl bg-ink p-6 text-cream sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <p className="font-display text-2xl leading-tight">
                Have a question about a treatment?
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 text-sm font-bold text-lime transition-colors hover:text-cream"
              >
                Contact our office
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
