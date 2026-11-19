import type { MetadataRoute } from "next";

import { serviceSlugs } from "@/lib/site";

const baseUrl = "https://www.wyomingfamilydentistry.com";

const pages = [
  "/",
  "/about-us",
  "/meet-the-team",
  "/our-office",
  "/services",
  ...serviceSlugs.map((slug) => `/${slug}`),
  "/patient-forms",
  "/new-patients",
  "/insurance-payment",
  "/testimonials",
  "/faq",
  "/request-an-appointment",
  "/contact-us",
  "/rate-our-office",
  "/privacy-statement-us",
  "/opt-out-preferences",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date("2026-11-19"),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
