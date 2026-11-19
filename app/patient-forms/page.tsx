import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Download, FileText } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { patientForms, patientFormsIntro } from "@/lib/content";

export const metadata: Metadata = {
  title: "Patient Forms – Wyoming Family Dentistry",
  description:
    "Complete your new patient information, medical history, HIPAA explanation, and financial policy forms before your visit.",
  alternates: { canonical: "/patient-forms" },
};

export default function PatientFormsPage() {
  return (
    <>
      <PageHero
        eyebrow="Before your visit"
        title="Patient Forms"
        description={patientFormsIntro}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Patients", href: "/patient-forms" },
          { label: "Patient Forms" },
        ]}
      />

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Simple preparation"
              title="Your paperwork, ready when you are."
              description="Open a form below, complete it before your appointment, and spend less time in the waiting area."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {patientForms.map((form, index) => (
              <Reveal key={form.name} delay={index * 0.05}>
                <article className="group flex h-full flex-col rounded-4xl border border-ink/10 bg-paper p-7 shadow-soft transition-colors hover:border-teal/25">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex size-12 items-center justify-center rounded-full bg-teal/10 text-teal">
                      <FileText aria-hidden="true" className="size-5" />
                    </span>
                    <span className="rounded-full border border-ink/10 bg-cream px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-ink-soft">
                      PDF
                    </span>
                  </div>
                  <h2 className="mt-5 text-2xl leading-tight text-ink">
                    {form.name}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-6 text-ink-soft">
                    {form.description}
                  </p>
                  <a
                    href={form.file}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-cream transition-colors hover:bg-teal-deep"
                  >
                    <Download aria-hidden="true" className="size-4" />
                    Open form
                    <ArrowUpRight aria-hidden="true" className="size-3.5" />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-8 grid gap-6 rounded-4xl border border-ink/10 bg-sage/50 p-7 sm:p-9 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal">
                  A smoother first visit
                </p>
                <h2 className="mt-3 text-balance text-3xl leading-tight text-ink">
                  Complete your forms before you arrive.
                </h2>
                <ul className="mt-5 space-y-2.5 text-sm leading-6 text-ink-soft">
                  {[
                    "Spend less time in the waiting area.",
                    "Help us understand your background.",
                    "Get the most effective care possible.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-teal"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl bg-paper p-6 shadow-soft">
                <p className="text-sm leading-6 text-ink-soft">
                  Questions about a form or your appointment? Our team is happy
                  to help.
                </p>
                <div className="mt-5 flex flex-col gap-2">
                  <Button asChild>
                    <Link href="/request-an-appointment">
                      Request an appointment
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/contact-us">Contact the office</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="New patients"
        title="Let us help you prepare for your first visit."
        description="Tell us what you need and when you would like to come in. We will follow up to confirm your appointment."
      />
    </>
  );
}
