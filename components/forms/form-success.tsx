import { CheckCircle2, Mail, Phone } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { business } from "@/lib/site";
import { cn } from "@/lib/utils";

type FormSuccessProps = {
  title: string;
  message: string;
  mailto?: string;
  mailtoLabel?: string;
};

export function FormSuccess({
  title,
  message,
  mailto,
  mailtoLabel = "Open your email app",
}: FormSuccessProps) {
  return (
    <div
      role="status"
      className="relative overflow-hidden rounded-4xl border border-teal/20 bg-paper p-7 shadow-soft sm:p-10"
    >
      <div
        aria-hidden="true"
        className="absolute -right-16 -top-20 size-56 rounded-full bg-lime/20 blur-3xl"
      />
      <span className="relative flex size-12 items-center justify-center rounded-full bg-teal/10 text-teal">
        <CheckCircle2 aria-hidden="true" className="size-6" />
      </span>
      <h2 className="relative mt-6 text-balance text-3xl leading-tight text-ink">
        {title}
      </h2>
      <p className="relative mt-3 max-w-xl text-pretty text-[15px] leading-7 text-ink-soft">
        {message}
      </p>
      <div className="relative mt-7 flex flex-col gap-3 sm:flex-row">
        {mailto ? (
          <a href={mailto} className={cn(buttonVariants({ size: "md" }))}>
            <Mail aria-hidden="true" className="size-4" />
            {mailtoLabel}
          </a>
        ) : null}
        <a
          href={business.phoneHref}
          className={cn(buttonVariants({ variant: "outline", size: "md" }))}
        >
          <Phone aria-hidden="true" className="size-4" />
          {business.phone}
        </a>
      </div>
    </div>
  );
}
