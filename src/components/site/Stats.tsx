import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { Reveal, SectionHeading } from "./Reveal";

const stats = [
  { value: 95, suffix: "%", label: "Redução de tarefas repetitivas" },
  { value: 70, suffix: "%", label: "Mais rapidez nos processos" },
  { value: 40, suffix: "%", label: "Redução de custos operacionais" },
  { value: 24, suffix: "/7", label: "Processos automáticos" },
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
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="gradient-hero pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Resultados" title="Impacto medido, não prometido" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="card-hover h-full rounded-2xl border border-border bg-card p-8 text-center shadow-soft">
                <Counter value={s.value} suffix={s.suffix} />
                <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
