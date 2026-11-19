import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import { ContentBlocks } from "@/components/content-blocks";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { ServiceIcon } from "@/components/service-icon";
import { Button } from "@/components/ui/button";
import { servicePages } from "@/lib/content";
import {
  business,
  serviceSlugs,
  services,
  type ServiceSlug,
} from "@/lib/site";
import { cn } from "@/lib/utils";

type ServicePageProps = {
  params: Promise<{ service: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceSlugs.map((service) => ({ service }));
}

function isServiceSlug(value: string): value is ServiceSlug {
  return (serviceSlugs as readonly string[]).includes(value);
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { service: slug } = await params;
  if (!isServiceSlug(slug)) return {};

  const page = servicePages[slug];
  const service = services.find((item) => item.slug === slug);

  return {
    title: `${page.title} – Wyoming Family Dentistry`,
    description: service?.summary,
    alternates: { canonical: `/${slug}` },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { service: slug } = await params;
  if (!isServiceSlug(slug)) notFound();

  const page = servicePages[slug];
  const service = services.find((item) => item.slug === slug);

  if (!service) notFound();

  return (
    <>
      <PageHero
        eyebrow={service.kicker}
        title={page.title}
        description={service.summary}
        image={service.image}
        imageAlt={`${service.name} at Wyoming Family Dentistry`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: page.title },
        ]}
      />

      <section className="py-14 sm:py-20">
        <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-start lg:gap-12">
          <article className="relative overflow-hidden rounded-4xl border border-ink/10 bg-paper p-6 shadow-soft sm:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 size-64 rounded-full bg-lime/15 blur-3xl"
            />
            <div className="relative flex items-center gap-3 border-b border-ink/10 pb-6">
              <span className="flex size-11 items-center justify-center rounded-full bg-teal/10 text-teal">
                <ServiceIcon icon={service.icon} />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal">
                  Treatment overview
                </p>
                <p className="mt-1 text-sm text-ink-soft">
                  Wyoming Family Dentistry · Wyoming, OH
                </p>
              </div>
            </div>
            <ContentBlocks blocks={page.blocks} className="relative mt-2 max-w-none" />
          </article>

          <aside className="space-y-5 lg:sticky lg:top-32">
            <div className="relative overflow-hidden rounded-4xl bg-ink p-6 text-cream shadow-soft">
              <div className="grain absolute inset-0" aria-hidden="true" />
              <p className="relative text-[10px] font-bold uppercase tracking-[0.2em] text-lime">
                Next step
              </p>
              <h2 className="relative mt-3 text-2xl leading-tight text-cream">
                Talk to our team.
              </h2>
              <p className="relative mt-3 text-sm leading-6 text-cream/70">
                Tell us what you need and we will help you find the right next
                step.
              </p>
              <div className="relative mt-5 space-y-3 text-sm">
                <a
                  href={business.phoneHref}
                  className="flex items-center gap-2.5 font-semibold transition-colors hover:text-lime"
                >
                  <Phone aria-hidden="true" className="size-4 text-lime" />
                  {business.phone}
                </a>
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-start gap-2.5 break-all transition-colors hover:text-lime"
                >
                  <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-lime" />
                  {business.email}
                </a>
                <p className="flex items-start gap-2.5 leading-6 text-cream/70">
                  <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-lime" />
                  {business.address}
                </p>
              </div>
              <Button asChild variant="lime" className="relative mt-6 w-full">
                <Link href="/request-an-appointment">
                  Request an appointment
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </Link>
              </Button>
            </div>

            <nav
              aria-label="All dental services"
              className="rounded-4xl border border-ink/10 bg-paper p-6 shadow-soft"
            >
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal">
                All services
              </h2>
              <ul className="mt-4 space-y-1">
                {services.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={item.slug === slug ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition-colors",
                        item.slug === slug
                          ? "bg-teal/10 text-teal"
                          : "text-ink/75 hover:bg-cream hover:text-ink",
                      )}
                    >
                      {item.name}
                      {item.slug === slug ? (
                        <span
                          aria-hidden="true"
                          className="size-1.5 rounded-full bg-teal"
                        />
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </section>

      <CtaBand
        eyebrow="Care that starts with listening"
        title="Have a question about this treatment?"
        description="Our team can talk through what to expect, answer your questions, and help you decide on a next step."
        primaryLabel="Request an appointment"
        secondaryLabel="Contact the office"
        secondaryHref="/contact-us"
      />
    </>
  );
}
