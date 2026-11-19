import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqGroup = {
  title: string;
  description: string;
  items: FaqItem[];
};

type FaqAccordionProps = {
  groups: FaqGroup[];
  className?: string;
};

export function FaqAccordion({ groups, className }: FaqAccordionProps) {
  return (
    <div className={cn("space-y-12", className)}>
      {groups.map((group, groupIndex) => (
        <section key={group.title} aria-labelledby={`faq-group-${groupIndex}`}>
          <h2
            id={`faq-group-${groupIndex}`}
            className="text-3xl leading-tight tracking-[-0.03em] text-ink sm:text-4xl"
          >
            {group.title}
          </h2>
          <p className="mt-3 max-w-2xl text-pretty text-[15px] leading-7 text-ink-soft">
            {group.description}
          </p>
          <Accordion
            type="single"
            collapsible
            defaultValue={groupIndex === 0 ? `faq-${groupIndex}-0` : undefined}
            className="mt-6 space-y-3"
          >
            {group.items.map((item, itemIndex) => (
              <AccordionItem key={item.question} value={`faq-${groupIndex}-${itemIndex}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      ))}
    </div>
  );
}
