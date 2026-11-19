import * as React from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-teal",
            align === "center" && "justify-center",
          )}
        >
          <span className="inline-block size-1.5 rounded-full bg-lime" />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-balance text-4xl leading-[1.05] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.5rem]",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}
