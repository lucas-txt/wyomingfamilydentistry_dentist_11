import * as React from "react";

import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-paper/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-soft",
        className,
      )}
      {...props}
    />
  );
}
