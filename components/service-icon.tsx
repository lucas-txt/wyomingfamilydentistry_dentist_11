import {
  Activity,
  Anchor,
  Crown,
  HeartPulse,
  Scissors,
  ShieldCheck,
  Sparkles,
  Syringe,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import type { ServiceIcon as ServiceIconName } from "@/lib/site";
import { cn } from "@/lib/utils";

const iconMap: Record<ServiceIconName, LucideIcon> = {
  shield: ShieldCheck,
  restore: Wrench,
  sparkle: Sparkles,
  activity: Activity,
  implant: Anchor,
  crown: Crown,
  tmj: HeartPulse,
  extraction: Scissors,
  botox: Syringe,
};

export function ServiceIcon({
  icon,
  className,
}: {
  icon: ServiceIconName;
  className?: string;
}) {
  const Icon = iconMap[icon];

  return <Icon aria-hidden="true" className={cn("size-5", className)} />;
}
