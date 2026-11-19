import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ServiceIcon } from "@/components/service-icon";
import type { Service } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ServiceCard({
  service,
  className,
}: {
  service: Service;
  className?: string;
}) {
  const hasImage = Boolean(service.image);

  return (
    <Link
      href={service.href}
      className={cn(
        "group relative isolate flex min-h-[19rem] flex-col justify-between overflow-hidden rounded-4xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-float sm:p-7",
        hasImage
          ? "border-white/10 text-cream shadow-soft"
          : "border-ink/10 bg-paper text-ink hover:border-teal/25",
        className,
      )}
    >
      {service.image ? (
        <>
          <Image
            src={service.image}
            alt={`${service.name} at Wyoming Family Dentistry`}
            fill
            loading="eager"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="-z-20 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-linear-to-t from-ink/95 via-ink/55 to-ink/15"
          />
        </>
      ) : (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,_rgba(182,208,106,0.34),_transparent_48%),radial-gradient(circle_at_92%_96%,_rgba(15,111,120,0.14),_transparent_55%)]"
          />
          <div
            aria-hidden="true"
            className="absolute right-5 top-5 size-28 rounded-full border border-teal/10"
          />
        </>
      )}

      <div className="relative flex items-start justify-between gap-4">
        <span
          className={cn(
            "flex size-11 items-center justify-center rounded-full border",
            hasImage
              ? "border-white/25 bg-white/15 text-cream backdrop-blur-md"
              : "border-teal/15 bg-teal/5 text-teal",
          )}
        >
          <ServiceIcon icon={service.icon} />
        </span>
        <span
          className={cn(
            "flex size-10 items-center justify-center rounded-full border transition-all duration-300 group-hover:rotate-6",
            hasImage
              ? "border-white/25 bg-white/10 text-cream"
              : "border-ink/10 bg-cream text-ink group-hover:border-teal group-hover:bg-teal group-hover:text-cream",
          )}
        >
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </span>
      </div>

      <div className="relative mt-14">
        <p
          className={cn(
            "text-[10px] font-bold uppercase tracking-[0.2em]",
            hasImage ? "text-lime" : "text-teal",
          )}
        >
          {service.kicker}
        </p>
        <h3
          className={cn(
            "mt-2 text-balance text-2xl leading-tight tracking-[-0.025em] sm:text-[1.7rem]",
            hasImage ? "text-cream" : "text-ink",
          )}
        >
          {service.name}
        </h3>
        <p
          className={cn(
            "mt-3 line-clamp-3 text-sm leading-6",
            hasImage ? "text-cream/80" : "text-ink-soft",
          )}
        >
          {service.summary}
        </p>
      </div>
    </Link>
  );
}
