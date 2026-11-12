import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, SectionHeading } from "./Reveal";
import { useI18n } from "@/i18n";


export function Faq() {
  const { t } = useI18n();
  return (
    <section id="faq" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading eyebrow={t.faq.eyebrow} title={t.faq.title} />
        <Reveal className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {t.faq.items.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="mb-3 rounded-2xl border border-border bg-card px-5 shadow-soft"
              >
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
