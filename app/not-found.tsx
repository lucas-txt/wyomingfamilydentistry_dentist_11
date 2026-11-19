import Link from "next/link";
import { ArrowUpRight, Home, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { business } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-cream py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-48 size-[34rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(182,208,106,0.3),_transparent_68%)] blur-2xl"
      />
      <div className="container-x relative max-w-2xl text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-teal">
          404 · Page not found
        </p>
        <h1 className="mt-4 text-balance text-5xl leading-[1.02] tracking-[-0.04em] text-ink sm:text-6xl">
          This page is not part of the smile.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-7 text-ink-soft">
          The page you are looking for may have moved. Head back home or call
          the office and we will point you in the right direction.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/">
              <Home aria-hidden="true" className="size-4" />
              Back to home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={business.phoneHref}>
              <Phone aria-hidden="true" className="size-4" />
              {business.phone}
            </a>
          </Button>
        </div>
        <div className="mt-8">
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 text-sm font-bold text-teal transition-colors hover:text-teal-deep"
          >
            Contact the office
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
