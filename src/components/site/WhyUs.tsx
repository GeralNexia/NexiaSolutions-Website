import { Check } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const reasons = [
  "Desenvolvimento personalizado",
  "Inteligência Artificial",
  "Segurança",
  "Escalabilidade",
  "Integração com sistemas existentes",
  "Apoio técnico",
  "Código desenvolvido para crescer",
  "Automatização completa",
];

export function WhyUs() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Porquê a Nexia"
          title="Porque escolher a Nexia Solutions"
          description="Não vendemos apenas software. Transformamos empresas através da tecnologia."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r} delay={i * 0.05}>
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
