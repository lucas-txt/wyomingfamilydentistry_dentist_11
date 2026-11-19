import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  HeartHandshake,
  MapPin,
  Phone,
  Sparkles,
  Stethoscope,
} from "lucide-react";

import { CountUp } from "@/components/count-up";
import { CtaBand } from "@/components/cta-band";
import { LocationHours } from "@/components/location-hours";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  homeContent,
  testimonials,
} from "@/lib/content";
import { business, services, siteStats } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wyoming Family Dentistry – Begin Your Journey To a Perfect Smile",
  description:
    "High-quality oral healthcare through a patient-centered approach. Family dentistry in Wyoming, Ohio, from routine cleanings to restorative and cosmetic care.",
  alternates: { canonical: "/" },
};

const featuredServiceSlugs = [
  "preventative-dentistry",
  "restorative-dentistry",
  "botox",
  "dental-implants",
  "cosmetic-dentistry",
  "extractions",
] as const;

const homeServices = featuredServiceSlugs.flatMap((slug) => {
  const service = services.find((item) => item.slug === slug);
  return service ? [service] : [];
});

const serviceTicker = services.map((service) => service.name);

const carePoints = [
  "Personalized attention and treatment tailored to your needs",
  "Modern technology and techniques for comfortable visits",
  "Open communication built on trust and compassion",
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-line/60 bg-cream">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-36 -top-48 size-[42rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(182,208,106,0.42),_transparent_66%)] blur-2xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-64 -left-52 size-[38rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(15,111,120,0.22),_transparent_68%)] blur-2xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,rgba(14,46,51,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,46,51,0.05)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]"
        />

        <div className="container-x relative grid gap-12 pb-10 pt-12 sm:pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-14 lg:pb-16 lg:pt-20">
          <div>
            <Reveal>
              <Badge className="border-teal/15 bg-teal/5 text-teal">
                <span className="size-1.5 rounded-full bg-lime" />
                Wyoming, Ohio · Family dentistry
              </Badge>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-7 max-w-xl text-pretty font-display text-xl italic leading-snug text-teal sm:text-2xl">
                High-Quality Oral Healthcare Through a Patient-Centered Approach
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-4 max-w-3xl text-balance text-[3rem] leading-[0.98] tracking-[-0.05em] text-ink sm:text-6xl lg:text-[4.6rem]">
                Welcome to{" "}
                <span className="relative inline-block text-teal">
                  Wyoming Family Dentistry
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-lime/50"
                  />
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
                Family dentistry in Wyoming, Ohio, centered on comfort, clear
                communication, and care that fits real life. From routine
                cleanings to restorative and cosmetic treatment, our team is
                here for every smile in your family.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="group">
                  <Link href="/request-an-appointment">
                    Request an appointment
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">
                    Explore our services
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/images/stars.webp"
                    alt="Five stars"
                    width={300}
                    height={69}
                    loading="eager"
                    className="h-4 w-auto"
                  />
                  <Link
                    href="/testimonials"
                    className="text-sm font-semibold text-ink transition-colors hover:text-teal"
                  >
                    Read patient stories
                  </Link>
                </div>
                <span aria-hidden="true" className="hidden h-4 w-px bg-ink/15 sm:block" />
                <p className="flex items-center gap-1.5 text-sm font-semibold text-ink">
                  <CalendarCheck aria-hidden="true" className="size-4 text-teal" />
                  New patients welcome
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.16} y={28}>
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -right-5 -top-5 hidden size-28 rounded-full border border-teal/20 sm:block"
              />
              <div className="arch relative aspect-[4/5] overflow-hidden border border-white/70 shadow-soft sm:aspect-[5/5.4]">
                <Image
                  src="/assets/images/hero-family.webp"
                  alt="A family smiling together at Wyoming Family Dentistry"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-ink/55 via-ink/5 to-transparent"
                />
              </div>

              <div className="glass absolute -bottom-5 left-4 right-4 rounded-3xl p-4 shadow-float sm:left-6 sm:right-auto sm:max-w-sm sm:p-5">
                <p className="flex items-start gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-teal text-cream">
                    <MapPin aria-hidden="true" className="size-4" />
                  </span>
                  <span>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-teal-deep">
                      Visit our office
                    </span>
                    <span className="mt-1 block text-sm font-semibold leading-5 text-ink">
                      {business.address}
                    </span>
                  </span>
                </p>
              </div>

              <a
                href={business.phoneHref}
                className="absolute -right-2 top-8 hidden rounded-2xl border border-white/60 bg-paper/90 px-5 py-4 text-left shadow-float backdrop-blur-md sm:block"
              >
                <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-teal">
                  <Phone aria-hidden="true" className="size-3.5" />
                  Call us
                </span>
                <span className="mt-1 block text-sm font-bold text-ink">
                  {business.phone}
                </span>
              </a>
            </div>
          </Reveal>
        </div>

        <div className="container-x relative pb-10">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 shadow-soft sm:grid-cols-4">
            {siteStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col-reverse gap-1 bg-paper/90 px-5 py-5 sm:px-6 sm:py-6"
              >
                <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink-soft">
                  {stat.label}
                </dt>
                <dd className="font-display text-4xl leading-none text-teal-deep">
                  <CountUp value={stat.value} />
                  {stat.suffix}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div
        aria-hidden="true"
        className="overflow-hidden border-b border-line/60 bg-paper/70 py-4"
      >
        <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
          {[...serviceTicker, ...serviceTicker].map((name, index) => (
            <span
              key={`${name}-${index}`}
              className="flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.24em] text-ink-soft"
            >
              {name}
              <span className="size-1.5 rounded-full bg-lime-deep" />
            </span>
          ))}
        </div>
      </div>

      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <Reveal>
            <div className="relative mx-auto max-w-md pb-8 lg:mx-0 lg:max-w-none">
              <div className="relative aspect-[5/4] overflow-hidden rounded-[2.5rem] rounded-tr-[7rem] border border-white/70 shadow-soft">
                <Image
                  src="/assets/images/team-emily.webp"
                  alt="Dr. Emily Boehm of Wyoming Family Dentistry"
                  fill
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-2 right-3 max-w-[16rem] rounded-3xl bg-ink p-5 text-cream shadow-float sm:right-5">
                <Sparkles aria-hidden="true" className="size-4 text-lime" />
                <p className="mt-3 font-display text-lg leading-snug">
                  “You’re more than just a patient—you’re part of our dental
                  family.”
                </p>
              </div>
              <p className="mt-12 text-xs font-bold uppercase tracking-[0.18em] text-ink-soft sm:mt-10">
                Emily Boehm DDS · Dentist
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <SectionHeading
              eyebrow="Our practice"
              title="Welcome To Wyoming Family Dentistry"
            />
            <div className="mt-6 space-y-5">
              {homeContent.welcomeParagraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-pretty text-[15.5px] leading-7 text-ink-soft sm:text-base sm:leading-8"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <ul className="mt-8 space-y-3">
              {carePoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm font-semibold leading-6 text-ink"
                >
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                    <Stethoscope aria-hidden="true" className="size-3.5" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <Link href="/about-us">
                  About our practice
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/meet-the-team">
                  Meet the team
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-sand/35 py-20 sm:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 size-[30rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(15,111,120,0.12),_transparent_68%)] blur-2xl"
        />
        <div className="container-x relative">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow="Our services"
                title="Why choose us?"
                description="Nine ways we care for your smile, from everyday prevention to treatment that restores comfort and confidence."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <Button asChild variant="outline">
                <Link href="/services">
                  View all nine services
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </Link>
              </Button>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {homeServices.map((service, index) => (
              <Reveal key={service.href} delay={index * 0.04}>
                <ServiceCard service={service} className="h-full" />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-col gap-4 rounded-3xl border border-ink/10 bg-paper/80 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <div className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-lime/30 text-teal-deep">
                  <HeartHandshake aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <p className="font-display text-xl leading-tight text-ink">
                    Not sure where to start?
                  </p>
                  <p className="mt-1 text-sm leading-6 text-ink-soft">
                    Tell us what you need and our team will help you find the
                    right next step.
                  </p>
                </div>
              </div>
              <Button asChild className="shrink-0">
                <Link href="/contact-us">
                  Ask a question
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Testimonials"
              title="What people are saying"
              description="Real words from patients who trust Wyoming Family Dentistry with their smiles."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
            <Reveal delay={0.08}>
              <TestimonialCarousel testimonials={testimonials} />
            </Reveal>

            <Reveal delay={0.14}>
              <aside className="relative overflow-hidden rounded-4xl bg-ink p-7 text-cream shadow-soft sm:p-8">
                <div className="grain absolute inset-0" aria-hidden="true" />
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-20 size-52 rounded-full bg-[radial-gradient(circle_at_center,_rgba(182,208,106,0.3),_transparent_68%)] blur-2xl"
                />
                <Image
                  src="/assets/images/stars.webp"
                  alt="Five stars"
                  width={300}
                  height={69}
                  loading="eager"
                  className="relative h-5 w-auto"
                />
                <h3 className="relative mt-5 text-balance font-display text-3xl leading-tight text-cream">
                  Share your experience
                </h3>
                <p className="relative mt-4 text-pretty text-sm leading-7 text-cream/70">
                  {homeContent.ratingPrompt}
                </p>
                <div className="relative mt-7 flex flex-col gap-3">
                  <Button asChild variant="lime">
                    <Link href="/rate-our-office">
                      Rate our office
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </Link>
                  </Button>
                  <a
                    href={business.reviews}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-cream transition-colors hover:bg-white/10"
                  >
                    <Image
                      src="/assets/images/google-icon.webp"
                      alt=""
                      width={180}
                      height={180}
                      loading="eager"
                      className="size-4"
                    />
                    Read Google reviews
                    <ArrowUpRight aria-hidden="true" className="size-3.5" />
                  </a>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-paper/60 py-20 sm:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Visit us"
              title="Close to home, ready when you are."
              description="Find our office in the heart of Wyoming, Ohio, with convenient weekday hours and a team ready to welcome your family."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <LocationHours className="mt-10" />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
