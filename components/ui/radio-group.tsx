"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { cn } from "@/lib/utils";

export const RadioGroup = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    className={cn("grid gap-2", className)}
    {...props}
  />
));

RadioGroup.displayName = "RadioGroup";

export const RadioGroupItem = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(
      "group relative flex size-11 items-center justify-center rounded-full border border-ink/15 bg-paper text-sm font-semibold text-ink transition-all duration-200 hover:border-teal/50 hover:bg-teal/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 data-[state=checked]:border-teal data-[state=checked]:bg-teal data-[state=checked]:text-cream",
      className,
    )}
    {...props}
  >
    {children}
  </RadioGroupPrimitive.Item>
));

RadioGroupItem.displayName = "RadioGroupItem";
