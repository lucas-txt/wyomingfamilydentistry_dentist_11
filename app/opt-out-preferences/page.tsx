import type { Metadata } from "next";

import { LegalPageContent } from "@/components/legal-page";
import { legalPages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Opt-out preferences – Wyoming Family Dentistry",
  description:
    "Cookie and opt-out preferences for the Wyoming Family Dentistry website.",
  alternates: { canonical: "/opt-out-preferences" },
};

export default function OptOutPreferencesPage() {
  const page = legalPages["opt-out-preferences"];

  return (
    <LegalPageContent
      eyebrow="Privacy"
      title={page.title}
      blocks={page.blocks}
    />
  );
}
