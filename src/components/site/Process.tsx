import { Search, ClipboardList, Code2, Rocket, LifeBuoy, Clock, PackageCheck } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { useI18n } from "@/i18n";

const icons = [Search, ClipboardList, Code2, Rocket, LifeBuoy];

export function Process() {
  const { t } = useI18n();
  const steps = t.process.items.map((s, i) => ({ ...s, icon: icons[i] }));
  return (
    <section id="processo" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow={t.process.eyebrow} title={t.process.title} />

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute top-0 bottom-0 left-6 w-px bg-border md:left-1/2" />
          <div className="space-y-10 md:space-y-2">
            {steps.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  className={`relative flex gap-6 md:w-1/2 ${
                    i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:flex-row-reverse md:pl-12"
                  }`}
                >
                  <span className="gradient-primary absolute top-1 left-0 flex size-12 shrink-0 items-center justify-center rounded-2xl shadow-soft md:static">
                    <s.icon className="size-5 text-primary-foreground" />
                  </span>
                  <div className={`ml-18 md:ml-0 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                    <p className="text-xs font-medium tracking-wide text-primary uppercase">
                      {t.process.step} {i + 1}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                    <div
                      className={`mt-3 flex flex-wrap items-center gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-1 text-xs font-medium">
                        <Clock className="size-3.5 text-primary" />
                        {s.duration}
                      </span>
                    </div>
                    <p
                      className={`mt-2 flex items-start gap-1.5 text-xs leading-relaxed text-muted-foreground ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                    >
                      <PackageCheck className="mt-px size-3.5 shrink-0 text-primary" />
                      <span>
                        <span className="font-semibold text-foreground">{t.process.youGet}:</span>{" "}
                        {s.deliverable}
                      </span>
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
