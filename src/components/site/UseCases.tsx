import { FileStack, Tags, ScanText, FileBarChart, Mail, Table2, Boxes, Receipt } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { useI18n } from "@/i18n";

const icons = [FileStack, Tags, ScanText, FileBarChart, Mail, Table2, Boxes, Receipt];

export function UseCases() {
  const { t } = useI18n();
  const cases = t.useCases.items.map((c, i) => ({ ...c, icon: icons[i] }));
  return (
    <section id="casos" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow={t.useCases.eyebrow}
          title={t.useCases.title}
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((c, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <article className="card-hover h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                <c.icon className="size-6 text-primary" />
                <h3 className="mt-4 text-sm font-semibold leading-snug">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
