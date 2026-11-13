import { Link } from "@tanstack/react-router";
import { BookOpen, ExternalLink, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, LIVRO_RECLAMACOES_URL } from "@/lib/company";
import { EmailLink, Ext, PhoneLink, type LegalDocs } from "./shared";

const b = company.brand;
const nif = company.nif ? ` (NIF ${company.nif})` : "";

function BookCard({ name, note, cta }: { name: string; note: string; cta: string }) {
  return (
    <div className="my-8 flex flex-col items-start gap-4 rounded-2xl border border-border bg-surface p-6 sm:flex-row sm:items-center">
      <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent">
        <BookOpen className="size-6 text-accent-foreground" />
      </span>
      <div className="flex-1">
        <p className="mt-0 font-semibold text-foreground">{name}</p>
        <p className="mt-1 text-sm">{note}</p>
      </div>
      <Button asChild variant="hero" size="lg" className="text-primary-foreground no-underline">
        <a href={LIVRO_RECLAMACOES_URL} target="_blank" rel="noopener noreferrer">
          {cta} <ExternalLink />
        </a>
      </Button>
    </div>
  );
}

function Contacts() {
  return (
    <p className="flex flex-wrap items-center gap-2">
      <Mail className="size-4" />
      <EmailLink /> · <PhoneLink />
    </p>
  );
}

const Book = () => <Ext href={LIVRO_RECLAMACOES_URL}>www.livroreclamacoes.pt</Ext>;

export const complaintsDocs: LegalDocs = {
  pt: {
    title: "Livro de Reclamações",
    description: "Aceda ao Livro de Reclamações Eletrónico da Nexia Solutions.",
    body: () => (
      <>
        <p>
          Nos termos do Decreto-Lei n.º 156/2005, de 15 de setembro, na redação dada pelo
          Decreto-Lei n.º 74/2017, de 21 de junho, a {b} disponibiliza o{" "}
          <strong>Livro de Reclamações Eletrónico</strong>. Através dele pode apresentar uma
          reclamação, de forma gratuita, sobre os nossos serviços, que será encaminhada para nós e
          para a entidade reguladora competente.
        </p>
        <BookCard
          name="Livro de Reclamações Eletrónico"
          note="Plataforma oficial gerida pela Direção-Geral do Consumidor."
          cta="Apresentar reclamação"
        />
        <h2>Como apresentar uma reclamação</h2>
        <ol>
          <li>
            Aceda a <Book /> e selecione «Fazer reclamação».
          </li>
          <li>
            Escolha o setor de atividade e identifique a {b}
            {nif}.
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
        <Contacts />
        <h2>Resolução alternativa de litígios</h2>
        <p>
          Em caso de litígio de consumo, pode ainda recorrer a uma entidade de resolução alternativa
          de litígios de consumo. Mais informações nos nossos{" "}
          <Link to="/termos-de-utilizacao">Termos de Utilização</Link> e no Portal do Consumidor (
          <Ext href="https://www.consumidor.gov.pt" />
          ).
        </p>
      </>
    ),
  },

  en: {
    title: "Complaints Book",
    description: "Access the Nexia Solutions Electronic Complaints Book.",
    body: () => (
      <>
        <p>
          Under Portuguese Decree-Law No. 156/2005 of 15 September, as amended by Decree-Law No.
          74/2017 of 21 June, {b} provides the <strong>Electronic Complaints Book</strong> (Livro de
          Reclamações Eletrónico). Through it, you can file a complaint about our services free of
          charge; it will be forwarded to us and to the competent regulatory authority.
        </p>
        <BookCard
          name="Electronic Complaints Book"
          note="Official platform managed by the Portuguese Directorate-General for Consumers."
          cta="File a complaint"
        />
        <h2>How to file a complaint</h2>
        <ol>
          <li>
            Go to <Book /> and select "Fazer reclamação" (file a complaint).
          </li>
          <li>
            Choose the business sector and identify {b}
            {nif}.
          </li>
          <li>Describe the situation and submit the complaint.</li>
          <li>
            You will receive our reply within 15 working days at the latest, as required by law.
          </li>
        </ol>
        <h2>Talk to us first</h2>
        <p>
          Your satisfaction matters to us. If you are dissatisfied with anything, you can also
          contact us directly — we will do our best to resolve the situation as quickly as possible:
        </p>
        <Contacts />
        <h2>Alternative dispute resolution</h2>
        <p>
          In the event of a consumer dispute, you may also refer it to an alternative consumer
          dispute resolution entity. More information in our{" "}
          <Link to="/termos-de-utilizacao">Terms of Use</Link> and on the Portuguese Consumer Portal
          (<Ext href="https://www.consumidor.gov.pt" />
          ).
        </p>
      </>
    ),
  },

  fr: {
    title: "Livre de réclamations",
    description: "Accédez au Livre de réclamations électronique de Nexia Solutions.",
    body: () => (
      <>
        <p>
          Conformément au décret-loi portugais n.º 156/2005 du 15 septembre, modifié par le
          décret-loi n.º 74/2017 du 21 juin, {b} met à disposition le{" "}
          <strong>Livre de réclamations électronique</strong> (Livro de Reclamações Eletrónico). Il
          vous permet de déposer gratuitement une réclamation concernant nos services, qui sera
          transmise à nous-mêmes et à l'autorité de régulation compétente.
        </p>
        <BookCard
          name="Livre de réclamations électronique"
          note="Plateforme officielle gérée par la Direction générale de la consommation portugaise."
          cta="Déposer une réclamation"
        />
        <h2>Comment déposer une réclamation</h2>
        <ol>
          <li>
            Rendez-vous sur <Book /> et sélectionnez « Fazer reclamação » (déposer une réclamation).
          </li>
          <li>
            Choisissez le secteur d'activité et identifiez {b}
            {nif}.
          </li>
          <li>Décrivez la situation et soumettez la réclamation.</li>
          <li>
            Vous recevrez notre réponse dans un délai maximal de 15 jours ouvrables, comme le
            prévoit la loi.
          </li>
        </ol>
        <h2>Parlez-nous d'abord</h2>
        <p>
          Votre satisfaction est importante pour nous. En cas d'insatisfaction, vous pouvez
          également nous contacter directement — nous ferons notre possible pour résoudre la
          situation dans les meilleurs délais :
        </p>
        <Contacts />
        <h2>Règlement extrajudiciaire des litiges</h2>
        <p>
          En cas de litige de consommation, vous pouvez également recourir à une entité de règlement
          extrajudiciaire des litiges de consommation. Plus d'informations dans nos{" "}
          <Link to="/termos-de-utilizacao">Conditions d'utilisation</Link> et sur le Portail du
          consommateur portugais (<Ext href="https://www.consumidor.gov.pt" />
          ).
        </p>
      </>
    ),
  },

  es: {
    title: "Libro de Reclamaciones",
    description: "Acceda al Libro de Reclamaciones Electrónico de Nexia Solutions.",
    body: () => (
      <>
        <p>
          Conforme al Decreto-Ley portugués n.º 156/2005, de 15 de septiembre, en la redacción dada
          por el Decreto-Ley n.º 74/2017, de 21 de junio, {b} pone a su disposición el{" "}
          <strong>Libro de Reclamaciones Electrónico</strong> (Livro de Reclamações Eletrónico). A
          través de él puede presentar gratuitamente una reclamación sobre nuestros servicios, que
          se remitirá a nosotros y a la entidad reguladora competente.
        </p>
        <BookCard
          name="Libro de Reclamaciones Electrónico"
          note="Plataforma oficial gestionada por la Dirección General del Consumidor portuguesa."
          cta="Presentar reclamación"
        />
        <h2>Cómo presentar una reclamación</h2>
        <ol>
          <li>
            Acceda a <Book /> y seleccione «Fazer reclamação» (presentar reclamación).
          </li>
          <li>
            Elija el sector de actividad e identifique a {b}
            {nif}.
          </li>
          <li>Describa la situación y envíe la reclamación.</li>
          <li>
            Recibirá nuestra respuesta en un plazo máximo de 15 días hábiles, según lo previsto en
            la ley.
          </li>
        </ol>
        <h2>Hable primero con nosotros</h2>
        <p>
          Su satisfacción es importante para nosotros. Si está insatisfecho con algo, también puede
          contactarnos directamente — intentaremos resolver la situación lo antes posible:
        </p>
        <Contacts />
        <h2>Resolución alternativa de litigios</h2>
        <p>
          En caso de litigio de consumo, también puede recurrir a una entidad de resolución
          alternativa de litigios de consumo. Más información en nuestros{" "}
          <Link to="/termos-de-utilizacao">Términos de Uso</Link> y en el Portal del Consumidor
          portugués (<Ext href="https://www.consumidor.gov.pt" />
          ).
        </p>
      </>
    ),
  },
};
