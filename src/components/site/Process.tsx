import { Search, ClipboardList, Code2, Rocket, LifeBuoy } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const steps = [
  { icon: Search, title: "Diagnóstico", text: "Analisamos os seus processos e identificamos oportunidades de automação." },
  { icon: ClipboardList, title: "Levantamento de requisitos", text: "Definimos âmbito, integrações, dados e objetivos mensuráveis." },
  { icon: Code2, title: "Desenvolvimento", text: "Construímos a solução à medida, com entregas iterativas e visíveis." },
  { icon: Rocket, title: "Implementação", text: "Colocamos em produção, formamos a equipa e migramos os dados." },
  { icon: LifeBuoy, title: "Suporte", text: "Acompanhamento contínuo, melhorias e monitorização dos fluxos." },
];

export function Process() {
  return (
    <section id="processo" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Como Trabalhamos"
          title="Um percurso claro, do primeiro contacto ao suporte"
        />

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute top-0 bottom-0 left-6 w-px bg-border md:left-1/2" />
          <div className="space-y-10 md:space-y-2">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
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
                      Etapa {i + 1}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
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
