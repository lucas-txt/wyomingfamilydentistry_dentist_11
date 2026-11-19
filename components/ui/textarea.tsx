import * as React from "react";

import { cn } from "@/lib/utils";
import { inputBaseClass } from "@/components/ui/input";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentPropsWithoutRef<"textarea">
>(({ className, rows = 5, ...props }, ref) => (
  <textarea
    ref={ref}
    rows={rows}
    className={cn(inputBaseClass, "min-h-32 resize-y", className)}
    {...props}
  />
));

Textarea.displayName = "Textarea";
