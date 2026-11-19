import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Microscope, MonitorSmartphone, Sofa } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { officeContent } from "@/lib/content";
import { paymentMethods } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Office – Wyoming Family Dentistry",
  description:
    "Comfortable treatment areas, modern diagnostic technology, and a patient-first team at Wyoming Family Dentistry in Wyoming, Ohio.",
  alternates: { canonical: "/our-office" },
};

const officeFeatures = [
  {
    icon: Sofa,
    title: "Comfortable spaces",
    text: "Comfortable waiting and treatment areas complete with the types of amenities you would expect from the premier dental practice in Wyoming.",
  },
  {
    icon: Microscope,
    title: "Modern diagnostics",
    text: "Our office is filled with state of the art diagnostic and dental treatment technology to ensure accuracy and early detection of oral complications.",
  },
  {
    icon: MonitorSmartphone,
    title: "A superior experience",
    text: "We believe our patients deserve only the best, and our staff works hard to deliver a superior experience at every visit.",
  },
];

export default function OurOfficePage() {
  return (
    <>
      <PageHero
        eyebrow="Our office"
        title="Our Office"
        description={officeContent.intro}
        image="/assets/images/hero-family.webp"
        imageAlt="A family smiling together at Wyoming Family Dentistry"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about-us" },
          { label: "Our Office" },
        ]}
      />

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <div className="grid gap-4 md:grid-cols-3">
            {officeFeatures.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.06}>
                <article className="h-full rounded-4xl border border-ink/10 bg-paper p-7 shadow-soft">
                  <span className="flex size-11 items-center justify-center rounded-full bg-lime/25 text-teal-deep">
                    <feature.icon aria-hidden="true" className="size-5" />
                  </span>
                  <h2 className="mt-5 text-2xl leading-tight text-ink">
                    {feature.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-ink-soft">
                    {feature.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand/35 py-16 sm:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <Reveal>
              <SectionHeading
                eyebrow="Financial care"
                title="Insurance and Payment"
              />
              <p className="mt-5 text-pretty text-[15.5px] leading-7 text-ink-soft sm:text-base sm:leading-8">
                {officeContent.insurance}
              </p>
              <p className="mt-4 text-pretty text-[15.5px] leading-7 text-ink-soft sm:text-base sm:leading-8">
                {officeContent.paymentNote}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/insurance-payment">
                    Insurance & payment details
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/patient-forms">Patient forms</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-4xl border border-ink/10 bg-paper p-7 shadow-soft sm:p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal">
                  {officeContent.paymentIntro}
                </p>
                <ul className="mt-5 grid grid-cols-2 gap-2.5">
                  {paymentMethods.map((method) => (
                    <li
                      key={method}
                      className="rounded-2xl border border-ink/10 bg-cream/60 px-4 py-3 text-sm font-semibold text-ink"
                    >
                      {method}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-ink/10 pt-5 text-xs leading-5 text-ink-soft">
                  Please bring your insurance card with you to your first visit.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Plan a visit"
        title="Questions about the office or your first appointment?"
        description="Call, text, or send a message. Our team is happy to help you prepare before you arrive."
        primaryLabel="Request an appointment"
        secondaryLabel="Contact the office"
        secondaryHref="/contact-us"
      />
    </>
  );
}
