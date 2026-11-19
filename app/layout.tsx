import type { Metadata, Viewport } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { business, hours, services } from "@/lib/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wyomingfamilydentistry.com"),
  title: {
    default:
      "Wyoming Family Dentistry – Begin Your Journey To a Perfect Smile",
    template: "%s",
  },
  description:
    "Family dentistry in Wyoming, Ohio, centered on comfort, clear communication, and care that fits real life.",
  applicationName: business.name,
  keywords: [
    "Wyoming Family Dentistry",
    "dentist in Wyoming OH",
    "family dentist Cincinnati",
    "preventative dentistry",
    "restorative dentistry",
    "cosmetic dentistry",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: business.name,
    title:
      "Wyoming Family Dentistry – Begin Your Journey To a Perfect Smile",
    description:
      "High-quality oral healthcare through a patient-centered approach in Wyoming, Ohio.",
    images: [
      {
        url: "/assets/images/hero-family.webp",
        width: 1500,
        height: 844,
        alt: "Wyoming Family Dentistry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Wyoming Family Dentistry – Begin Your Journey To a Perfect Smile",
    description:
      "High-quality oral healthcare through a patient-centered approach in Wyoming, Ohio.",
    images: ["/assets/images/hero-family.webp"],
  },
  icons: {
    icon: "/icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e2e33",
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: business.name,
  description:
    "Family dentistry in Wyoming, Ohio, centered on comfort, clear communication, and care that fits real life.",
  telephone: business.phone,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "411 Wyoming Ave",
    addressLocality: "Wyoming",
    addressRegion: "OH",
    postalCode: "45215",
    addressCountry: "US",
  },
  openingHoursSpecification: hours
    .filter((entry) => !entry.closed)
    .map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: entry.day,
      opens: entry.time.split(" - ")[0],
      closes: entry.time.split(" - ")[1],
    })),
  sameAs: [business.facebook],
  url: "https://www.wyomingfamilydentistry.com",
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.name,
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="sr-only z-50 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-cream focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
