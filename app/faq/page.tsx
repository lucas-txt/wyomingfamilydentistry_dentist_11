import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, HelpCircle, Phone, Send } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq-accordion";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { faqs } from "@/lib/content";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions – Wyoming Family Dentistry",
  description:
    "Answers about preventative care, root canals, dental implants, Botox, and appointments at Wyoming Family Dentistry.",
  alternates: { canonical: "/faq" },
};

const groups = [
  {
    title: "Preventative care",
    description:
      "Everyday habits and routine visits that help protect your teeth and gums.",
    items: faqs.slice(0, 3),
  },
  {
    title: "Restorative care",
    description:
      "What to expect from treatment that repairs, protects, or replaces a tooth.",
    items: faqs.slice(3, 6),
  },
  {
    title: "Appointments & treatments",
    description:
      "Answers about Botox visits and planning your time with our team.",
    items: faqs.slice(6, 8),
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Good to know"
        title="Frequently Asked Questions"
        description="Clear answers to common questions about our care, treatments, and what to expect at Wyoming Family Dentistry."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />

      <section className="py-16 sm:py-24">
        <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-start lg:gap-12">
          <Reveal>
            <FaqAccordion groups={groups} />
          </Reveal>

          <Reveal delay={0.08}>
            <aside className="space-y-5 lg:sticky lg:top-32">
              <div className="rounded-4xl border border-ink/10 bg-paper p-6 shadow-soft">
                <span className="flex size-11 items-center justify-center rounded-full bg-lime/25 text-teal-deep">
                  <HelpCircle aria-hidden="true" className="size-5" />
                </span>
                <h2 className="mt-4 text-2xl leading-tight text-ink">
                  Still have a question?
                </h2>
                <p className="mt-2 text-sm leading-6 text-ink-soft">
                  If you did not find what you need, our team is happy to help.
                </p>
                <div className="mt-5 flex flex-col gap-2">
                  <Button asChild>
                    <Link href="/contact-us">
                      <Send aria-hidden="true" className="size-4" />
                      Contact us
                    </Link>
                  </Button>
                  <a
                    href={business.phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-teal/40 hover:bg-teal/5"
                  >
                    <Phone aria-hidden="true" className="size-4 text-teal" />
                    {business.phone}
                  </a>
                </div>
              </div>

              <div className="rounded-4xl bg-ink p-6 text-cream shadow-soft">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime">
                  New patients
                </p>
                <h2 className="mt-3 text-2xl leading-tight text-cream">
                  Prepare for your first visit.
                </h2>
                <p className="mt-2 text-sm leading-6 text-cream/70">
                  Find patient forms, insurance details, and appointment
                  information in one place.
                </p>
                <Link
                  href="/new-patients"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-lime transition-colors hover:text-cream"
                >
                  New patient information
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </Link>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Let’s talk"
        title="A question is a good place to start."
        description="Call, text, or send a message. Our team will help you understand your options and find the right next step."
      />
    </>
  );
}
