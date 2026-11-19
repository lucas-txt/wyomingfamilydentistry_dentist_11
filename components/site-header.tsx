"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  ChevronDown,
  Clock,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
} from "lucide-react";

import { FacebookIcon } from "@/components/facebook-icon";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Logo } from "@/components/logo";
import {
  aboutLinks,
  business,
  mainNav,
  patientLinks,
  services,
} from "@/lib/site";
import { cn } from "@/lib/utils";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function activeService(pathname: string) {
  return services.some((service) => isActivePath(pathname, service.href));
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-ink text-cream/75">
        <div className="container-x flex min-h-9 items-center justify-between gap-4 py-2 text-[11px] font-semibold tracking-wide">
          <div className="flex min-w-0 items-center gap-5">
            <a
              href={business.directions}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-1.5 transition-colors hover:text-lime sm:flex"
            >
              <MapPin aria-hidden="true" className="size-3.5 text-lime" />
              {business.address}
            </a>
            <span className="hidden items-center gap-1.5 lg:flex">
              <Clock aria-hidden="true" className="size-3.5 text-lime" />
              Monday–Thursday by appointment
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={business.phoneHref}
              className="flex items-center gap-1.5 transition-colors hover:text-lime"
            >
              <Phone aria-hidden="true" className="size-3.5 text-lime" />
              {business.phone}
            </a>
            <a
              href={business.textHref}
              className="hidden items-center gap-1.5 transition-colors hover:text-lime sm:flex"
            >
              <MessageCircle aria-hidden="true" className="size-3.5 text-lime" />
              Text Us
            </a>
            <a
              href={business.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Wyoming Family Dentistry on Facebook"
              className="transition-colors hover:text-lime"
            >
              <FacebookIcon className="size-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-line/70 bg-cream/85 backdrop-blur-xl">
        <div className="container-x flex h-[4.75rem] items-center justify-between gap-5 sm:h-20">
          <Logo priority />

          <nav aria-label="Primary navigation" className="hidden lg:block">
            <ul className="flex items-center gap-0.5">
              {mainNav.map((item) => {
                const active =
                  item.label === "Services"
                    ? isActivePath(pathname, "/services") ||
                      activeService(pathname)
                    : isActivePath(pathname, item.href);

                return (
                  <li key={item.label} className="group relative">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex h-11 items-center gap-1 rounded-full px-3.5 text-sm font-semibold transition-colors",
                        active
                          ? "text-teal"
                          : "text-ink/75 hover:bg-ink/5 hover:text-ink",
                      )}
                    >
                      {item.label}
                      {item.children ? (
                        <ChevronDown
                          aria-hidden="true"
                          className="size-3.5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                        />
                      ) : null}
                    </Link>
                    {item.children ? (
                      <div className="invisible absolute left-1/2 top-full z-50 w-[19rem] -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                        <div className="pointer-events-auto rounded-3xl border border-ink/10 bg-paper p-2.5 shadow-float">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                "flex items-center justify-between gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold transition-colors",
                                isActivePath(pathname, child.href)
                                  ? "bg-teal/10 text-teal"
                                  : "text-ink/75 hover:bg-cream hover:text-ink",
                              )}
                            >
                              {child.label}
                              <ArrowUpRight
                                aria-hidden="true"
                                className="size-3.5 text-ink-soft/40"
                              />
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={business.phoneHref}
              className="text-sm font-bold text-ink transition-colors hover:text-teal"
            >
              {business.phone}
            </a>
            <Button asChild size="sm" className="group">
              <Link href="/request-an-appointment">
                Book a visit
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </Button>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              >
                <Menu aria-hidden="true" className="size-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-cream">
              <DialogTitle className="sr-only">Site menu</DialogTitle>
              <DialogDescription className="sr-only">
                Navigate to a page or contact Wyoming Family Dentistry.
              </DialogDescription>

              <div className="mt-1 flex items-center justify-between gap-4 pr-12">
                <Logo />
              </div>

              <div className="mt-8 flex-1 space-y-8">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal">
                    Explore
                  </p>
                  <nav aria-label="Mobile primary navigation" className="mt-3">
                    <ul className="space-y-1">
                      {mainNav
                        .filter((item) => !item.children)
                        .map((item) => (
                          <li key={item.href}>
                            <DialogClose asChild>
                              <Link
                                href={item.href}
                                className="flex items-center justify-between rounded-2xl px-3 py-3 font-display text-2xl text-ink transition-colors hover:bg-paper hover:text-teal"
                              >
                                {item.label}
                                <ArrowUpRight
                                  aria-hidden="true"
                                  className="size-4 text-ink-soft/40"
                                />
                              </Link>
                            </DialogClose>
                          </li>
                        ))}
                    </ul>
                  </nav>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal">
                    About
                  </p>
                  <nav aria-label="About links" className="mt-2">
                    {aboutLinks.map((link) => (
                      <DialogClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-ink/80 transition-colors hover:bg-paper hover:text-teal"
                        >
                          {link.label}
                          <ArrowUpRight
                            aria-hidden="true"
                            className="size-3.5 text-ink-soft/40"
                          />
                        </Link>
                      </DialogClose>
                    ))}
                  </nav>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal">
                    Services
                  </p>
                  <nav aria-label="Service links" className="mt-2 grid grid-cols-2 gap-x-2">
                    {services.map((service) => (
                      <DialogClose asChild key={service.href}>
                        <Link
                          href={service.href}
                          className="rounded-xl px-3 py-2.5 text-sm font-semibold leading-5 text-ink/80 transition-colors hover:bg-paper hover:text-teal"
                        >
                          {service.name}
                        </Link>
                      </DialogClose>
                    ))}
                  </nav>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal">
                    Patients
                  </p>
                  <nav aria-label="Patient links" className="mt-2">
                    {patientLinks.map((link) => (
                      <DialogClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-ink/80 transition-colors hover:bg-paper hover:text-teal"
                        >
                          {link.label}
                          <ArrowUpRight
                            aria-hidden="true"
                            className="size-3.5 text-ink-soft/40"
                          />
                        </Link>
                      </DialogClose>
                    ))}
                  </nav>
                </div>
              </div>

              <div className="mt-8 rounded-3xl bg-ink p-5 text-cream">
                <a
                  href={business.phoneHref}
                  className="flex items-center gap-3 font-display text-2xl"
                >
                  <Phone aria-hidden="true" className="size-5 text-lime" />
                  {business.phone}
                </a>
                <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-cream/65">
                  <MapPin
                    aria-hidden="true"
                    className="mt-1 size-4 shrink-0 text-lime"
                  />
                  {business.address}
                </p>
                <DialogClose asChild>
                  <Link
                    href="/request-an-appointment"
                    className={cn(
                      buttonVariants({ variant: "lime" }),
                      "mt-5 w-full",
                    )}
                  >
                    Request an appointment
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </Link>
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
