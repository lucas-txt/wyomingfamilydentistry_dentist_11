import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Banknote,
  CheckCircle2,
  CreditCard,
  HeartHandshake,
  PenLine,
  Wallet,
} from "lucide-react";

import { ContactPanel } from "@/components/contact-panel";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { officeContent } from "@/lib/content";
import { paymentMethods } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insurance & Payment – Wyoming Family Dentistry",
  description:
    "Learn about dental insurance, payment methods, and financial arrangements at Wyoming Family Dentistry in Wyoming, Ohio.",
  alternates: { canonical: "/insurance-payment" },
};

function PaymentIcon({ method }: { method: string }) {
  if (method === "Cash") {
    return <Banknote aria-hidden="true" className="size-4" />;
  }
  if (method === "Check") {
    return <PenLine aria-hidden="true" className="size-4" />;
  }
  if (method === "Care Credit") {
    return <HeartHandshake aria-hidden="true" className="size-4" />;
  }
  return <CreditCard aria-hidden="true" className="size-4" />;
}

const notes = [
  "Our insurance coordinator helps determine the benefits available through your plan.",
  "Please bring your insurance card with you to your first visit.",
  "Payment arrangements for account balances are due at the time services are rendered.",
];

export default function InsurancePaymentPage() {
  return (
    <>
      <PageHero
        eyebrow="Financial care"
        title="Insurance & Payment"
        description={officeContent.insurance}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about-us" },
          { label: "Insurance & Payment" },
        ]}
      />

      <section className="py-16 sm:py-24">
        <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-start lg:gap-12">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Payments"
                title="We Accept the Following"
                description="We accept many forms of payment, including cash and most major credit cards."
              />
            </Reveal>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {paymentMethods.map((method, index) => (
                <Reveal key={method} delay={index * 0.04}>
                  <div className="flex items-center gap-3 rounded-2xl border border-ink/10 bg-paper px-5 py-4 shadow-soft">
                    <span className="flex size-10 items-center justify-center rounded-full bg-teal/10 text-teal">
                      <PaymentIcon method={method} />
                    </span>
                    <span className="text-sm font-bold text-ink">{method}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="mt-8 rounded-4xl border border-ink/10 bg-sage/50 p-7 sm:p-9">
                <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-teal">
                  <Wallet aria-hidden="true" className="size-3.5" />
                  Good to know
                </p>
                <h2 className="mt-3 text-3xl leading-tight text-ink">
                  Planning for your visit
                </h2>
                <ul className="mt-5 space-y-3">
                  {notes.map((note) => (
                    <li
                      key={note}
                      className="flex items-start gap-2.5 text-sm leading-6 text-ink-soft"
                    >
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-teal"
                      />
                      {note}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-ink/10 pt-5 text-sm leading-6 text-ink-soft">
                  {officeContent.paymentNote}
                </p>
                <Button asChild className="mt-6">
                  <Link href="/contact-us">
                    Ask about insurance
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <ContactPanel showHours={false} heading="Talk with our office." />
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Before your visit"
        title="Have your insurance card ready."
        description="Bring your insurance card to your first visit. Our team can help you understand your benefits and payment options."
        primaryLabel="Request an appointment"
        secondaryLabel="Patient forms"
        secondaryHref="/patient-forms"
      />
    </>
  );
}
