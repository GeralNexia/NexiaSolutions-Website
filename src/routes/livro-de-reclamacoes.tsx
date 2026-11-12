import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, ExternalLink, Mail } from "lucide-react";
import { LegalLayout } from "@/components/site/LegalLayout";
import { Button } from "@/components/ui/button";
import { company, LIVRO_RECLAMACOES_URL } from "@/lib/company";

export const Route = createFileRoute("/livro-de-reclamacoes")({
  component: ComplaintsBook,
});

function ComplaintsBook() {
  return (
    <LegalLayout
      title="Livro de Reclamações"
      description="Aceda ao Livro de Reclamações Eletrónico da Nexia Solutions."
    >
      <p>
        Nos termos do Decreto-Lei n.º 156/2005, de 15 de setembro, na redação dada pelo
        Decreto-Lei n.º 74/2017, de 21 de junho, a {company.brand} disponibiliza o{" "}
        <strong>Livro de Reclamações Eletrónico</strong>. Através dele pode apresentar uma
        reclamação, de forma gratuita, sobre os nossos serviços, que será encaminhada para nós e
        para a entidade reguladora competente.
      </p>

      <div className="my-8 flex flex-col items-start gap-4 rounded-2xl border border-border bg-surface p-6 sm:flex-row sm:items-center">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent">
          <BookOpen className="size-6 text-accent-foreground" />
        </span>
        <div className="flex-1">
          <p className="mt-0 font-semibold text-foreground">Livro de Reclamações Eletrónico</p>
          <p className="mt-1 text-sm">
            Plataforma oficial gerida pela Direção-Geral do Consumidor.
          </p>
        </div>
        <Button asChild variant="hero" size="lg" className="text-primary-foreground no-underline">
          <a
            href={LIVRO_RECLAMACOES_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Apresentar reclamação <ExternalLink />
          </a>
        </Button>
      </div>

      <h2>Como apresentar uma reclamação</h2>
      <ol>
        <li>
          Aceda a{" "}
          <a href={LIVRO_RECLAMACOES_URL} target="_blank" rel="noopener noreferrer">
            www.livroreclamacoes.pt
          </a>{" "}
          e selecione «Fazer reclamação».
        </li>
        <li>
          Escolha o setor de atividade e identifique a {company.brand}
          {company.nif ? ` (NIF ${company.nif})` : ""}.
        </li>
        <li>Descreva a situação e submeta a reclamação.</li>
        <li>
          Receberá a nossa resposta no prazo máximo de 15 dias úteis, conforme previsto na lei.
        </li>
      </ol>

      <h2>Fale primeiro connosco</h2>
      <p>
        A sua satisfação é importante para nós. Se tiver alguma insatisfação, pode também
        contactar-nos diretamente — procuraremos resolver a situação com a maior brevidade
        possível:
      </p>
      <p className="flex flex-wrap items-center gap-2">
        <Mail className="size-4" />
        <a href={`mailto:${company.email}`}>{company.email}</a> ·{" "}
        <a href={company.phoneHref}>{company.phone}</a>
      </p>

      <h2>Resolução alternativa de litígios</h2>
      <p>
        Em caso de litígio de consumo, pode ainda recorrer a uma entidade de resolução
        alternativa de litígios de consumo. Mais informações nos nossos{" "}
        <Link to="/termos-de-utilizacao">Termos de Utilização</Link> e no Portal do Consumidor (
        <a href="https://www.consumidor.gov.pt" target="_blank" rel="noopener noreferrer">
          www.consumidor.gov.pt
        </a>
        ).
      </p>
    </LegalLayout>
  );
}
