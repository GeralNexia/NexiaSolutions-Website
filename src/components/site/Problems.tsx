import { Clock, Hand, AlertTriangle, Files, Unplug, FileSearch, ArrowRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const problems = [
  { icon: Clock, title: "Horas desperdiçadas", text: "Equipas presas em tarefas repetitivas de baixo valor." },
  { icon: Hand, title: "Processos manuais", text: "Fluxos dependentes de cópias, colagens e memória humana." },
  { icon: AlertTriangle, title: "Erros humanos", text: "Falhas de introdução de dados com custo real." },
  { icon: Files, title: "Informação espalhada", text: "Dados em emails, Excel, drives e pastas partilhadas." },
  { icon: Unplug, title: "Falta de integração", text: "Sistemas que não comunicam entre si." },
  { icon: FileSearch, title: "PDFs analisados à mão", text: "Contratos e faturas lidos linha a linha." },
];

export function Problems() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="O Problema"
          title="O que trava a sua operação todos os dias"
          description="Antes de automatizar, identificamos exatamente onde o tempo e o dinheiro estão a escapar."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
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
          <div className="gradient-primary mx-auto flex max-w-2xl items-center justify-center gap-3 rounded-2xl px-8 py-6 text-center shadow-elegant">
            <ArrowRight className="size-5 text-primary-foreground" />
            <p className="text-lg font-semibold text-primary-foreground">
              Nós resolvemos estes problemas.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
