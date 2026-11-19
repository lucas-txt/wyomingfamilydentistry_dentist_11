import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold tracking-[-0.01em] transition-all duration-200 ease-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
  {
    variants: {
      variant: {
        primary:
          "bg-ink text-cream shadow-soft hover:bg-teal-deep hover:-translate-y-0.5",
        lime: "bg-lime text-ink shadow-soft hover:bg-lime/85 hover:-translate-y-0.5",
        outline:
          "border border-ink/20 bg-transparent text-ink hover:border-ink/40 hover:bg-ink/5",
        ghost: "text-ink hover:bg-ink/5",
        light:
          "border border-white/30 bg-white/10 text-cream backdrop-blur-md hover:bg-white/20",
        link: "rounded-none p-0 text-teal underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-10 px-4 text-xs",
        md: "h-12 px-6",
        lg: "h-14 px-8 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  type,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      type={asChild ? undefined : (type ?? "button")}
      {...props}
    />
  );
}
