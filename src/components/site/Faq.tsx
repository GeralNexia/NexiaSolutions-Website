import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, SectionHeading } from "./Reveal";

const faqs = [
  {
    q: "Quanto custa?",
    a: "Depende do âmbito. Trabalhamos por projeto e, sempre que faz sentido, com um valor mensal de suporte. O diagnóstico inicial é gratuito e termina com uma proposta clara, sem custos escondidos.",
  },
  {
    q: "Quanto demora?",
    a: "Automações simples ficam prontas em 1 a 3 semanas. Projetos de software à medida ou integrações complexas variam entre 1 e 3 meses, com entregas parciais ao longo do caminho.",
  },
  {
    q: "Posso integrar com o meu ERP?",
    a: "Sim. Integramos com os principais ERPs e CRMs do mercado através de APIs, base de dados ou ficheiros. Se não existir API, encontramos uma alternativa segura.",
  },
  {
    q: "Os meus dados ficam seguros?",
    a: "Sim. Usamos comunicação encriptada, acessos por perfil, registo de auditoria e alojamento europeu. Cumprimos o RGPD e assinamos NDA sempre que necessário.",
  },
  {
    q: "Como funciona a IA?",
    a: "Os modelos leem os seus documentos e devolvem dados estruturados. Nada é publicado nem usado para treinar modelos externos, e pode manter validação humana nos pontos críticos.",
  },
  {
    q: "Fazem suporte?",
    a: "Fazemos. Após a entrega acompanhamos os fluxos, monitorizamos erros e implementamos melhorias contínuas com tempos de resposta acordados.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Perguntas frequentes" />
        <Reveal className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f) => (
              <AccordionItem
                key={f.q}
                value={f.q}
                className="mb-3 rounded-2xl border border-border bg-card px-5 shadow-soft"
              >
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
