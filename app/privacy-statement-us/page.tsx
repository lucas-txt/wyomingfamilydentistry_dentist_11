import type { Metadata } from "next";

import { LegalPageContent } from "@/components/legal-page";
import { legalPages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Statement (US) – Wyoming Family Dentistry",
  description:
    "The privacy statement for Wyoming Family Dentistry, including how personal data is collected, used, and protected.",
  alternates: { canonical: "/privacy-statement-us" },
};

export default function PrivacyStatementPage() {
  const page = legalPages["privacy-statement-us"];

  return (
    <LegalPageContent
      eyebrow="Privacy"
      title={page.title}
      blocks={page.blocks}
    />
  );
}
