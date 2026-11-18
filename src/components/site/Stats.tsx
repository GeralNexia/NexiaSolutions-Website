import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { Reveal, SectionHeading } from "./Reveal";
import { useI18n } from "@/i18n";

// Médias de referência do que é possível (não resultados medidos de um cliente).
const values = [
  { value: 95, suffix: "%", upTo: true },
  { value: 70, suffix: "%", upTo: true },
  { value: 40, suffix: "%", upTo: true },
  { value: 24, suffix: "/7", upTo: false },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / 1600, 1);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="text-gradient text-5xl font-semibold tracking-tight sm:text-6xl">
      {n}
      {suffix}
    </span>
  );
}

export function Stats() {
  const { t } = useI18n();
  const stats = values.map((v, i) => ({ ...v, label: t.stats.labels[i] }));
  return (
    <section id="resultados" className="relative overflow-hidden py-24 lg:py-32">
      <div className="gradient-hero pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow={t.stats.eyebrow} title={t.stats.title} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="card-hover h-full rounded-2xl border border-border bg-card p-8 text-center shadow-soft">
                <p className="h-4 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  {s.upTo ? t.stats.upTo : ""}
                </p>
                <Counter value={s.value} suffix={s.suffix} />
                <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
          {t.stats.note}
        </p>
      </div>
    </section>
  );
}
