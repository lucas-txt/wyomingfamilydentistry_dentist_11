import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  priority?: boolean;
  href?: string;
};

export function Logo({ className, priority = false, href = "/" }: LogoProps) {
  return (
    <Link
      href={href}
      aria-label="Wyoming Family Dentistry home"
      className={cn("inline-flex items-center", className)}
    >
      <Image
        src="/assets/images/logo.webp"
        alt="Wyoming Family Dentistry"
        width={300}
        height={107}
        priority={priority}
        loading="eager"
        className="h-12 w-auto sm:h-14"
      />
    </Link>
  );
}
