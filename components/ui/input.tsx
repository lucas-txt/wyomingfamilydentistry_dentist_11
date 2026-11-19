import * as React from "react";

import { cn } from "@/lib/utils";

export const inputBaseClass =
  "flex w-full rounded-2xl border border-ink/15 bg-paper px-4 py-3 text-base text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-colors placeholder:text-ink-soft focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 aria-invalid:border-danger aria-invalid:ring-2 aria-invalid:ring-danger/15 disabled:cursor-not-allowed disabled:opacity-60";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<"input">
>(({ className, type = "text", ...props }, ref) => (
  <input
    ref={ref}
    type={type}
    className={cn(inputBaseClass, "h-12", className)}
    {...props}
  />
));

Input.displayName = "Input";
