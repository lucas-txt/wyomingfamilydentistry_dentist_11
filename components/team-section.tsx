import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { team } from "@/lib/content";
import { cn } from "@/lib/utils";

function teamId(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function TeamPreview({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-5 md:grid-cols-3", className)}>
      {team.map((member, index) => (
        <Reveal key={member.name} delay={index * 0.08}>
          <article className="group relative h-full overflow-hidden rounded-4xl border border-ink/10 bg-paper shadow-soft">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={member.image}
                alt={member.alt}
                fill
                loading="eager"
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-ink/50 via-transparent to-transparent"
              />
              <Badge className="absolute left-4 top-4 border-white/40 bg-white/85 text-ink">
                {member.role}
              </Badge>
            </div>
            <div className="p-6">
              <h3 className="text-2xl leading-tight text-ink">{member.name}</h3>
              <p className="mt-3 text-sm leading-6 text-ink-soft">
                {member.shortBio}
              </p>
              <Link
                href={`/meet-the-team#${teamId(member.name)}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-teal transition-colors hover:text-teal-deep"
              >
                Read full bio
                <ArrowUpRight aria-hidden="true" className="size-3.5" />
              </Link>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function TeamProfiles({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-10 sm:space-y-14", className)}>
      {team.map((member, index) => {
        const heading =
          member.role === "Dentist"
            ? member.name
            : `${member.name}, ${member.role}`;

        return (
          <Reveal key={member.name} delay={0.05}>
            <article
              id={teamId(member.name)}
              className="grid scroll-mt-32 gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-12"
            >
              <div
                className={cn(
                  "relative overflow-hidden rounded-4xl border border-white/60 shadow-soft",
                  index % 2 === 1 ? "lg:order-2" : "lg:order-1",
                )}
              >
                <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5]">
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    loading="eager"
                    sizes="(max-width: 1024px) 100vw, 38vw"
                    className="object-cover object-top"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-ink/55 via-transparent to-transparent"
                  />
                  <p className="absolute bottom-5 left-5 right-5 font-display text-2xl text-cream">
                    {member.name}
                  </p>
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : "lg:order-2"}>
                <Badge className="border-teal/15 bg-teal/5 text-teal">
                  {member.role}
                </Badge>
                <h2 className="mt-4 text-balance text-3xl leading-tight tracking-[-0.03em] text-ink sm:text-4xl">
                  {heading}
                </h2>
                <div className="mt-5 space-y-4">
                  {member.bio.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="text-pretty text-[15.5px] leading-7 text-ink-soft sm:leading-8"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
