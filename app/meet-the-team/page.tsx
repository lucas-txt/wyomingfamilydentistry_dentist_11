import type { Metadata } from "next";

import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { TeamProfiles } from "@/components/team-section";
import { aboutContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Meet the Team – Wyoming Family Dentistry",
  description:
    "Meet Emily Boehm DDS, Susan Pass, and Heather Reed, the team behind patient-centered dentistry in Wyoming, Ohio.",
  alternates: { canonical: "/meet-the-team" },
};

export default function MeetTheTeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="Meet the Team"
        description={aboutContent.intro}
        image="/assets/images/team-heather.webp"
        imageAlt="Heather Reed, Registered Dental Hygienist at Wyoming Family Dentistry"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about-us" },
          { label: "Meet the Team" },
        ]}
      />

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="The people behind the practice"
            title="Care that starts with knowing you."
            description="Our team brings different strengths to the same goal: helping every patient feel informed, comfortable, and well cared for."
          />
          <TeamProfiles className="mt-12" />
        </div>
      </section>

      <CtaBand
        eyebrow="We would love to meet you"
        title="Ready to make Wyoming Family Dentistry your dental home?"
        description="Request an appointment and our team will follow up to confirm a time that works for you."
      />
    </>
  );
}
