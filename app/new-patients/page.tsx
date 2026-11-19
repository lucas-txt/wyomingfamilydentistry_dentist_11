import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  FileText,
} from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import {
  appointmentIntro,
  homeContent,
  newPatientSteps,
  patientForms,
  patientFormsIntro,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "New Patients – Wyoming Family Dentistry",
  description:
    "What to expect as a new patient at Wyoming Family Dentistry, from your first appointment to patient forms and insurance.",
  alternates: { canonical: "/new-patients" },
};

const stepIcons = [CalendarCheck, ClipboardList, CreditCard];

export default function NewPatientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Welcome"
        title="New Patients"
        description={homeContent.welcomeParagraphs[0]}
        image="/assets/images/hero-family.webp"
        imageAlt="A family smiling together at Wyoming Family Dentistry"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Patients", href: "/patient-forms" },
          { label: "New Patients" },
        ]}
      />

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Your first visit"
              title="What to expect"
              description="A simple path from your first call to your first appointment."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {newPatientSteps.map((step, index) => {
              const Icon = stepIcons[index] ?? CheckCircle2;

              return (
                <Reveal key={step.title} delay={index * 0.06}>
                  <article className="flex h-full flex-col rounded-4xl border border-ink/10 bg-paper p-7 shadow-soft">
                    <div className="flex items-center justify-between gap-4">
                      <span className="flex size-11 items-center justify-center rounded-full bg-teal/10 text-teal">
                        <Icon aria-hidden="true" className="size-5" />
                      </span>
                      <span
                        aria-hidden="true"
                        data-step={`0${index + 1}`}
                        className="step-number font-display text-4xl leading-none text-ink"
                      />
                    </div>
                    <h3 className="mt-5 text-2xl leading-tight text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-ink-soft">
                      {step.text}
                    </p>
                    <Link
                      href={step.href}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal transition-colors hover:text-teal-deep"
                    >
                      {step.action}
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-sand/35 py-16 sm:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-14">
          <Reveal>
            <SectionHeading eyebrow="Paperwork made simple" title="Patient forms" />
            <p className="mt-5 text-pretty text-[15.5px] leading-7 text-ink-soft sm:text-base sm:leading-8">
              {patientFormsIntro}
            </p>
            <div className="mt-7 rounded-3xl border border-ink/10 bg-paper p-6 shadow-soft">
              <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-teal">
                <FileText aria-hidden="true" className="size-3.5" />
                Available forms
              </p>
              <ul className="mt-4 space-y-2.5">
                {patientForms.map((form) => (
                  <li
                    key={form.name}
                    className="flex items-center justify-between gap-4 border-b border-ink/8 pb-2.5 last:border-0 last:pb-0"
                  >
                    <span className="text-sm font-semibold text-ink">
                      {form.name}
                    </span>
                    <a
                      href={form.file}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 text-xs font-bold text-teal transition-colors hover:text-teal-deep"
                    >
                      Open
                    </a>
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="mt-5 w-full">
                <Link href="/patient-forms">
                  Go to patient forms
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-4xl bg-ink p-7 text-cream shadow-soft sm:p-9">
              <div className="grain absolute inset-0" aria-hidden="true" />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime">
                Appointments
              </p>
              <h2 className="mt-3 text-3xl leading-tight text-cream">
                Request an appointment
              </h2>
              <p className="mt-4 text-pretty text-sm leading-7 text-cream/70">
                {appointmentIntro}
              </p>
              <Button asChild variant="lime" className="mt-6 w-full">
                <Link href="/request-an-appointment">
                  Request an appointment
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </Link>
              </Button>
              <p className="mt-5 flex items-start gap-2 border-t border-white/10 pt-5 text-xs leading-5 text-cream/70">
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-lime"
                />
                Payment arrangements for account balances are due at the time
                services are rendered.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="We are glad you are here"
        title="Make your first visit a comfortable one."
        description="Tell us what you need and when you would like to come in. We will help you prepare before you arrive."
      />
    </>
  );
}
