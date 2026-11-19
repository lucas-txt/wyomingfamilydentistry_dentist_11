import type { Metadata } from "next";
import { CalendarCheck, CheckCircle2, Clock, FileText } from "lucide-react";

import { ContactPanel } from "@/components/contact-panel";
import { AppointmentForm } from "@/components/forms/appointment-form";
import { LocationHours } from "@/components/location-hours";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { appointmentIntro } from "@/lib/content";

export const metadata: Metadata = {
  title: "Request An Appointment – Wyoming Family Dentistry",
  description:
    "Request a dental appointment at Wyoming Family Dentistry in Wyoming, Ohio. Our team will follow up to confirm your visit.",
  alternates: { canonical: "/request-an-appointment" },
};

const preparation = [
  {
    icon: CalendarCheck,
    title: "Choose a time that fits",
    text: "Tell us your preferred time of day. We will follow up to confirm availability.",
  },
  {
    icon: FileText,
    title: "Complete your forms",
    text: "Prepare your patient forms before you arrive to spend less time in the waiting area.",
  },
  {
    icon: CheckCircle2,
    title: "Bring your insurance card",
    text: "Please bring your insurance card with you to your first visit.",
  },
];

export default function RequestAppointmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Appointments"
        title="Request An Appointment"
        description={appointmentIntro}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Request An Appointment" },
        ]}
      />

      <section className="py-14 sm:py-20">
        <div className="container-x grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:items-start lg:gap-10">
          <Reveal>
            <AppointmentForm />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="space-y-5">
              <ContactPanel showHours={false} heading="Prefer to talk with us?" />
              <div className="rounded-4xl border border-ink/10 bg-sage/45 p-6">
                <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-teal">
                  <Clock aria-hidden="true" className="size-3.5" />
                  Before your visit
                </p>
                <ul className="mt-4 space-y-4">
                  {preparation.map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-paper text-teal">
                        <item.icon aria-hidden="true" className="size-4" />
                      </span>
                      <span>
                        <span className="block text-sm font-bold text-ink">
                          {item.title}
                        </span>
                        <span className="mt-1 block text-xs leading-5 text-ink-soft">
                          {item.text}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper/60 py-14 sm:py-20">
        <div className="container-x">
          <LocationHours />
        </div>
      </section>
    </>
  );
}
