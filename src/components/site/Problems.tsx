import { handleSectionClick } from "@/lib/navigation";
import { Clock, Hand, AlertTriangle, Files, Unplug, FileSearch, ArrowRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { useI18n } from "@/i18n";

const icons = [Clock, Hand, AlertTriangle, Files, Unplug, FileSearch];

export function Problems() {
  const { t } = useI18n();
  const problems = t.problems.items.map((p, i) => ({ ...p, icon: icons[i] }));
  return (
    <section id="problemas" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow={t.problems.eyebrow}
          title={t.problems.title}
          description={t.problems.description}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <article className="card-hover h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                <span className="flex size-11 items-center justify-center rounded-xl bg-accent">
                  <p.icon className="size-5 text-accent-foreground" />
                </span>
                <h3 className="mt-5 text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12">
            <a
              href="/#contacto"
              onClick={handleSectionClick("contacto")}
              className="gradient-primary group mx-auto flex max-w-2xl items-center justify-center gap-3 rounded-2xl px-8 py-6 text-center shadow-elegant transition-transform duration-300 hover:scale-[1.02]"
            >
              <ArrowRight className="size-5 text-primary-foreground transition-transform duration-300 group-hover:translate-x-1" />
              <p className="text-lg font-semibold text-primary-foreground">
                {t.problems.cta}
              </p>
            </a>
        </Reveal>
      </div>
    </section>
  );
}
