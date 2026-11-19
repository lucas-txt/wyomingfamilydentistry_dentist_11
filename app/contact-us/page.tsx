import type { Metadata } from "next";

import { ContactPanel } from "@/components/contact-panel";
import { ContactForm } from "@/components/forms/contact-form";
import { LocationHours } from "@/components/location-hours";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact Us – Wyoming Family Dentistry",
  description:
    "Contact Wyoming Family Dentistry in Wyoming, Ohio. Call, text, email, or send a message with your questions.",
  alternates: { canonical: "/contact-us" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact Us"
        description="Please use the form below to send us a direct message with any questions, comments or concerns you may have. We look forward to hearing from you!"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <section className="py-14 sm:py-20">
        <div className="container-x grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:items-start lg:gap-10">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.08}>
            <ContactPanel showHours={false} heading="Visit, call, or text us." />
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
