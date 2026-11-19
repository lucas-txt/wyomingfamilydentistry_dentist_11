"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

export const Accordion = AccordionPrimitive.Root;

export const AccordionItem = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "group overflow-hidden rounded-3xl border border-ink/10 bg-paper/80 shadow-[0_18px_40px_-32px_rgba(14,46,51,0.35)] transition-colors data-[state=open]:border-teal/25 data-[state=open]:bg-paper",
      className,
    )}
    {...props}
  />
));

AccordionItem.displayName = "AccordionItem";

export const AccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between gap-5 px-5 py-5 text-left font-display text-lg font-medium leading-snug text-ink transition-colors hover:text-teal sm:px-7 sm:py-6 sm:text-xl",
        className,
      )}
      {...props}
    >
      {children}
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-ink/10 bg-cream text-teal transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:bg-teal group-data-[state=open]:text-cream">
        <ChevronDown aria-hidden="true" className="size-4" />
      </span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));

AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionContent = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div
      className={cn(
        "px-5 pb-6 text-[15px] leading-7 text-ink-soft sm:px-7 sm:pb-7",
        className,
      )}
    >
      {children}
    </div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = "AccordionContent";
