import { FileStack, Tags, ScanText, FileBarChart, Mail, Table2, Boxes, Receipt } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const cases = [
  { icon: FileStack, title: "Leitura automática de milhares de PDFs", text: "Processamento em lote com validação e histórico completo." },
  { icon: Tags, title: "Classificação automática de documentos", text: "Cada ficheiro no sítio certo, com etiquetas e metadados." },
  { icon: ScanText, title: "Extração de informação", text: "Nomes, datas, valores e cláusulas transformados em dados." },
  { icon: FileBarChart, title: "Geração automática de relatórios", text: "Relatórios recorrentes gerados e enviados sem intervenção." },
  { icon: Mail, title: "Automação de emails", text: "Triagem, respostas e encaminhamento automáticos." },
  { icon: Table2, title: "Automação de Excel", text: "Fim das folhas atualizadas à mão todas as semanas." },
  { icon: Boxes, title: "Integração ERP", text: "Sincronização bidirecional com o seu sistema de gestão." },
  { icon: Receipt, title: "Automação de faturação", text: "Emissão, conferência e reconciliação automáticas." },
];

export function UseCases() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Casos de Utilização"
          title="Exemplos reais do que automatizamos"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
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
