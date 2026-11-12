import { Bot, BrainCircuit, Code2, Cable, FileScan } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { useI18n } from "@/i18n";

const icons = [Bot, BrainCircuit, Code2, Cable, FileScan];

export function Services() {
  const { t } = useI18n();
  const services = t.services.items.map((s, i) => ({ ...s, icon: icons[i] }));
  return (
    <section id="servicos" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          description={t.services.description}
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 0.08} className={i === 4 ? "lg:col-span-1" : ""}>
              <article className="card-hover group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft">
                <div className="gradient-hero pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <span className="gradient-primary flex size-12 items-center justify-center rounded-2xl shadow-soft">
                    <s.icon className="size-5.5 text-primary-foreground" />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  <ul className="mt-5 space-y-2">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="size-1.5 rounded-full bg-primary" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
