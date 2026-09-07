import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/types";
import Reveal from "@/components/motion/Reveal";

export default function FAQAccordion({ items }: { items: FaqItem[] }) {
  return (
    <Reveal>
      <Accordion className="divide-y divide-border rounded-2xl border border-border bg-card px-4 sm:px-6">
        {items.map((item, i) => (
          <AccordionItem key={item.question} value={String(i)}>
            <AccordionTrigger className="py-4 font-serif text-sm font-semibold text-primary sm:py-5 sm:text-lg">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Reveal>
  );
}
