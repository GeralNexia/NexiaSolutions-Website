import { Scale, Stamp, Calculator, Briefcase, Building2, Factory, HeartPulse, Users, Landmark } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const sectors = [
  { icon: Scale, label: "Advogados" },
  { icon: Stamp, label: "Solicitadores" },
  { icon: Calculator, label: "Gabinetes de Contabilidade" },
  { icon: Briefcase, label: "Consultoras" },
  { icon: Building2, label: "PMEs" },
  { icon: Factory, label: "Indústria" },
  { icon: HeartPulse, label: "Saúde" },
  { icon: Users, label: "Recursos Humanos" },
  { icon: Landmark, label: "Financeiro" },
];

export function Sectors() {
  return (
    <section id="sectores" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Sectores"
          title="Trabalhamos com quem lida com muita informação"
        />
        <div className="mt-14 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-3">
          {sectors.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="card-hover flex h-full items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent">
                  <s.icon className="size-5 text-accent-foreground" />
                </span>
                <p className="text-sm font-medium">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
