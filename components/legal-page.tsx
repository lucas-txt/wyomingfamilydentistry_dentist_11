import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";

import { ContentBlocks } from "@/components/content-blocks";
import { PageHero } from "@/components/page-hero";
import { business } from "@/lib/site";
import type { ContentBlock } from "@/lib/content";

type LegalPageContentProps = {
  title: string;
  blocks: ContentBlock[];
  eyebrow: string;
};

type TocItem = { id: string; text: string; index: number };

function buildToc(blocks: ContentBlock[]): TocItem[] {
  return blocks.flatMap((block, index) =>
    block.type === "h2"
      ? [{ id: `legal-section-${index}`, text: block.text, index }]
      : [],
  );
}

export function LegalPageContent({
  title,
  blocks,
  eyebrow,
}: LegalPageContentProps) {
  const toc = buildToc(blocks);
  const headingIds = Object.fromEntries(
    toc.map((item) => [item.index, item.id]),
  ) as Record<number, string>;

  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description="How we handle information, privacy, and the choices available to you."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: title }]}
      />

      <section className="container-x py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-14">
          <aside>
            <details className="rounded-3xl border border-ink/10 bg-paper p-5 lg:hidden">
              <summary className="cursor-pointer text-sm font-bold text-ink">
                On this page
              </summary>
              <nav aria-label="Legal document sections" className="mt-4">
                <ol className="space-y-2">
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-sm leading-5 text-ink-soft transition-colors hover:text-teal"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </details>

            <nav
              aria-label="Legal document sections"
              className="sticky top-32 hidden lg:block"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal">
                On this page
              </p>
              <ol className="mt-4 space-y-2 border-l border-ink/10 pl-4">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="block text-[13px] leading-5 text-ink-soft transition-colors hover:text-teal"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ol>
              <a
                href="#main"
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-teal transition-colors hover:text-teal-deep"
              >
                <ArrowUp aria-hidden="true" className="size-3.5" />
                Back to top
              </a>
            </nav>
          </aside>

          <div className="min-w-0 max-w-4xl">
            <ContentBlocks
              blocks={blocks}
              headingIds={headingIds}
              variant="legal"
              className="max-w-4xl"
            />

            <div className="mt-14 rounded-4xl border border-ink/10 bg-paper p-6 shadow-soft sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal">
                Questions?
              </p>
              <h2 className="mt-3 text-2xl leading-tight text-ink">
                Contact Wyoming Family Dentistry
              </h2>
              <div className="mt-5 grid gap-3 text-sm text-ink-soft sm:grid-cols-2">
                <a
                  href={business.phoneHref}
                  className="flex items-center gap-2.5 font-semibold text-ink transition-colors hover:text-teal"
                >
                  <Phone aria-hidden="true" className="size-4 text-teal" />
                  {business.phone}
                </a>
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-2.5 break-all font-semibold text-ink transition-colors hover:text-teal"
                >
                  <Mail aria-hidden="true" className="size-4 shrink-0 text-teal" />
                  {business.email}
                </a>
                <p className="flex items-center gap-2.5 sm:col-span-2">
                  <MapPin aria-hidden="true" className="size-4 text-teal" />
                  {business.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
