import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, HeartHandshake, MessageCircle, ShieldCheck } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TeamPreview } from "@/components/team-section";
import { Button } from "@/components/ui/button";
import { aboutContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us – Wyoming Family Dentistry",
  description:
    "Meet the friendly, knowledgeable team behind Wyoming Family Dentistry and learn how patient-centered care guides every visit.",
  alternates: { canonical: "/about-us" },
};

const values = [
  {
    icon: HeartHandshake,
    title: "Patient-centered",
    text: "Every patient deserves personalized attention and treatment tailored to their unique needs.",
  },
  {
    icon: MessageCircle,
    title: "Open communication",
    text: "We build lasting relationships with our patients based on trust, compassion, and open communication.",
  },
  {
    icon: ShieldCheck,
    title: "Skilled care",
    text: "Our staff members are friendly, knowledgeable, and highly proficient in their office duties.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="About Us"
        description={aboutContent.intro}
        image="/assets/images/team-emily.webp"
        imageAlt="Dr. Emily Boehm of Wyoming Family Dentistry"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Who we are"
              title="About Wyoming Family Dentistry"
              description="A Wyoming, Ohio practice built around relationships, comfort, and care that lasts beyond a single visit."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.06}>
                <article className="h-full rounded-4xl border border-ink/10 bg-paper p-7 shadow-soft">
                  <span className="flex size-11 items-center justify-center rounded-full bg-teal/10 text-teal">
                    <value.icon aria-hidden="true" className="size-5" />
                  </span>
                  <h2 className="mt-5 text-2xl leading-tight text-ink">
                    {value.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-ink-soft">
                    {value.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-sand/35 py-16 sm:py-24">
        <div className="container-x">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow="Our people"
                title="Friendly faces, familiar care."
                description="Get to know the people who make your visits feel like part of the family."
              />
            </Reveal>
            <Reveal delay={0.08}>
              <Button asChild variant="outline">
                <Link href="/meet-the-team">
                  Meet the full team
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
          <TeamPreview className="mt-10" />
        </div>
      </section>

      <CtaBand
        eyebrow="Come see us"
        title="A first visit should feel like a conversation."
        description="Tell us what you need and what matters to you. We will follow up to confirm your appointment and help you prepare."
      />
    </>
  );
}
