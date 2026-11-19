import { cn } from "@/lib/utils";
import type { ContentBlock } from "@/lib/content";

type ContentBlocksProps = {
  blocks: ContentBlock[];
  className?: string;
  headingIds?: Record<number, string>;
  variant?: "default" | "legal";
};

function ListBlock({
  block,
}: {
  block: Extract<ContentBlock, { type: "list" }>;
}) {
  if (block.ordered) {
    return (
      <ol className="my-5 space-y-3">
        {block.items.map((item, index) => (
          <li key={`${index}-${item.slice(0, 24)}`} className="flex gap-3">
            <span
              aria-hidden="true"
              className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-[11px] font-bold text-teal"
            >
              {index + 1}
            </span>
            <span className="text-[15.5px] leading-7 text-ink-soft">
              {item}
            </span>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ul className="my-5 space-y-2.5">
      {block.items.map((item, index) => (
        <li
          key={`${index}-${item.slice(0, 24)}`}
          className="flex gap-3 text-[15.5px] leading-7 text-ink-soft"
        >
          <span
            aria-hidden="true"
            className="mt-[0.7rem] size-1.5 shrink-0 rounded-full bg-teal"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ContentBlocks({
  blocks,
  className,
  headingIds,
  variant = "default",
}: ContentBlocksProps) {
  const legal = variant === "legal";

  return (
    <div className={cn(legal ? "max-w-none" : "max-w-3xl", className)}>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={index}
                id={headingIds?.[index]}
                className={cn(
                  "scroll-mt-32 text-balance font-display leading-tight tracking-[-0.03em] text-ink",
                  legal
                    ? "mt-12 text-[1.75rem] first:mt-0 sm:text-3xl"
                    : "mt-12 text-3xl first:mt-0 sm:text-4xl",
                )}
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={index}
                className={cn(
                  "text-balance font-display leading-snug tracking-[-0.02em] text-ink",
                  legal
                    ? "mt-8 text-xl sm:text-[1.35rem]"
                    : "mt-9 text-2xl sm:text-[1.65rem]",
                )}
              >
                {block.text}
              </h3>
            );
          case "h4":
            return (
              <h4
                key={index}
                className={cn(
                  "text-pretty font-sans font-bold leading-6 text-ink",
                  legal ? "mt-6 text-[15px]" : "mt-6 text-base",
                )}
              >
                {block.text}
              </h4>
            );
          case "p":
            return (
              <p
                key={index}
                className={cn(
                  "mt-4 text-pretty text-[15.5px] leading-7 text-ink-soft sm:text-base sm:leading-8",
                  legal && "mt-4",
                )}
              >
                {block.text}
              </p>
            );
          case "list":
            return <ListBlock key={index} block={block} />;
          case "table":
            return (
              <div key={index} className="my-6 overflow-x-auto">
                <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr
                        key={rowIndex}
                        className="border-b border-ink/10 last:border-0"
                      >
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className={cn(
                              "px-3 py-3 align-top text-ink-soft",
                              rowIndex === 0 && "font-semibold text-ink",
                            )}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
