import { Bot, BrainCircuit, Code2, Cable, FileScan } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const services = [
  {
    icon: Bot,
    title: "Automação Empresarial",
    text: "Automatizamos tarefas repetitivas e libertamos as suas equipas para o que importa.",
    items: ["Workflows automáticos", "Emails e alertas", "Relatórios recorrentes"],
  },
  {
    icon: BrainCircuit,
    title: "Inteligência Artificial",
    text: "Criamos soluções de IA adaptadas ao seu negócio e aos seus dados.",
    items: ["Classificação automática", "Assistentes internos", "Análise preditiva"],
  },
  {
    icon: Code2,
    title: "Desenvolvimento de Software",
    text: "Software à medida, construído para escalar com a sua empresa.",
    items: ["Aplicações Web", "ERPs e CRMs", "Portais e ferramentas internas"],
  },
  {
    icon: Cable,
    title: "Integração de Sistemas",
    text: "Ligamos tudo o que já usa, sem substituir o que funciona.",
    items: ["ERP · CRM", "Excel · Outlook", "Google Workspace · APIs"],
  },
  {
    icon: FileScan,
    title: "Processamento Inteligente de Documentos",
    text: "Leitura automática de documentos com IA, com validação humana opcional.",
    items: ["PDFs, contratos e faturas", "Relatórios e escrituras", "Documentação jurídica"],
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Serviços"
          title="Tecnologia que trabalha por si"
          description="Do diagnóstico à implementação, entregamos soluções completas e prontas a usar."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className={i === 4 ? "lg:col-span-1" : ""}>
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
