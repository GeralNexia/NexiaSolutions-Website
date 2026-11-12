import { Check } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { useI18n } from "@/i18n";


export function WhyUs() {
  const { t } = useI18n();
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow={t.whyUs.eyebrow}
          title={t.whyUs.title}
          description={t.whyUs.description}
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.whyUs.reasons.map((r, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="card-hover flex h-full items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent">
                  <Check className="size-3.5 text-accent-foreground" strokeWidth={3} />
                </span>
                <p className="text-sm font-medium leading-snug">{r}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
