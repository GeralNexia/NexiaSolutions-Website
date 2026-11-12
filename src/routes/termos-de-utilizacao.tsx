import { createFileRoute, Link } from "@tanstack/react-router";
import { CompanyIdentification, LegalLayout } from "@/components/site/LegalLayout";
import { company } from "@/lib/company";

export const Route = createFileRoute("/termos-de-utilizacao")({
  component: TermsOfUse,
});

function TermsOfUse() {
  return (
    <LegalLayout
      title="Termos de Utilização"
      description="Condições de utilização do site da Nexia Solutions."
    >
      <p>
        Estes Termos de Utilização regulam o acesso e a utilização do site{" "}
        <a href={company.website}>{company.website.replace("https://", "")}</a> (o «Site»). Ao
        utilizar o Site, aceita estes termos. Se não concordar, por favor não utilize o Site.
      </p>

      <h2>1. Identificação do prestador</h2>
      <p>
        Em cumprimento do Decreto-Lei n.º 7/2004, de 7 de janeiro (comércio eletrónico), o Site é
        detido e gerido por:
      </p>
      <CompanyIdentification />

      <h2>2. Objeto do Site</h2>
      <p>
        O Site tem natureza informativa e destina-se a apresentar os serviços da {company.brand} —
        automação de processos, inteligência artificial, desenvolvimento de software à medida e
        integração de sistemas — e a permitir o contacto e o pedido de diagnóstico gratuito.
      </p>
      <p>
        A informação apresentada (incluindo descrições de serviços, exemplos, casos de
        utilização, estatísticas e estimativas de poupança) é de caráter geral e indicativo. Não
        constitui uma proposta contratual vinculativa. As condições de cada serviço (âmbito,
        preço, prazos e garantias) são definidas numa proposta ou contrato escrito específico.
      </p>

      <h2>3. Diagnóstico gratuito e pedidos de contacto</h2>
      <ul>
        <li>
          O pedido de diagnóstico gratuito não implica qualquer obrigação de contratação por
          nenhuma das partes.
        </li>
        <li>
          Compromete-se a fornecer informação verdadeira e a não submeter conteúdos ilícitos,
          ofensivos ou que violem direitos de terceiros.
        </li>
        <li>
          Os dados submetidos são tratados nos termos da nossa{" "}
          <Link to="/politica-de-privacidade">Política de Privacidade</Link>.
        </li>
      </ul>

      <h2>4. Utilização aceitável</h2>
      <p>Ao utilizar o Site, compromete-se a não:</p>
      <ul>
        <li>utilizá-lo para fins ilegais ou contrários à boa-fé;</li>
        <li>
          tentar aceder sem autorização a sistemas, servidores ou dados, ou comprometer a
          segurança e o funcionamento do Site;
        </li>
        <li>introduzir vírus, código malicioso ou enviar comunicações não solicitadas (spam);</li>
        <li>
          recolher dados do Site de forma automatizada para fins abusivos ou que violem estes
          termos.
        </li>
      </ul>

      <h2>5. Propriedade intelectual</h2>
      <p>
        Todos os conteúdos do Site — textos, logótipo, marca «{company.brand}», design, imagens,
        gráficos e código — são propriedade da {company.brand} ou dos respetivos titulares e estão
        protegidos pela legislação de direitos de autor e de propriedade industrial. É proibida a
        sua reprodução, distribuição ou modificação, total ou parcial, sem autorização prévia e
        escrita, exceto para uso pessoal e não comercial.
      </p>

      <h2>6. Responsabilidade</h2>
      <ul>
        <li>
          Esforçamo-nos por manter a informação do Site correta e atualizada, mas não garantimos
          a ausência de erros ou omissões, nem que o Site esteja disponível de forma ininterrupta.
        </li>
        <li>
          Na medida permitida por lei, a {company.brand} não é responsável por danos resultantes
          da utilização do Site ou da impossibilidade de o utilizar, nem por decisões tomadas
          exclusivamente com base na informação geral nele contida.
        </li>
        <li>
          Nada nestes termos exclui ou limita responsabilidade que, nos termos da lei, não possa
          ser excluída ou limitada, nem os direitos legais dos consumidores.
        </li>
      </ul>

      <h2>7. Ligações externas</h2>
      <p>
        O Site pode conter ligações para sites de terceiros (por exemplo, redes sociais). Essas
        ligações são disponibilizadas por conveniência; não controlamos nem somos responsáveis
        pelos seus conteúdos, políticas ou práticas.
      </p>

      <h2>8. Alterações</h2>
      <p>
        Podemos alterar estes Termos de Utilização a qualquer momento. A versão em vigor é a
        publicada nesta página, com a respetiva data de atualização.
      </p>

      <h2>9. Lei aplicável e resolução de litígios</h2>
      <p>
        Estes termos regem-se pela lei portuguesa. Para a resolução de qualquer litígio é
        competente o foro da comarca da sede da {company.brand}, sem prejuízo das regras
        imperativas aplicáveis aos consumidores.
      </p>
      <p>
        <strong>Resolução alternativa de litígios de consumo:</strong> em caso de litígio de
        consumo, o consumidor pode recorrer a uma entidade de resolução alternativa de litígios
        de consumo (RAL), nos termos da Lei n.º 144/2015, de 8 de setembro. A lista completa das
        entidades RAL está disponível no Portal do Consumidor, em{" "}
        <a href="https://www.consumidor.gov.pt" target="_blank" rel="noopener noreferrer">
          www.consumidor.gov.pt
        </a>
        , incluindo, entre outros, o Centro de Arbitragem de Conflitos de Consumo de Lisboa (
        <a href="https://www.centroarbitragemlisboa.pt" target="_blank" rel="noopener noreferrer">
          www.centroarbitragemlisboa.pt
        </a>
        ) e o Centro Nacional de Informação e Arbitragem de Conflitos de Consumo (
        <a href="https://www.cniacc.pt" target="_blank" rel="noopener noreferrer">
          www.cniacc.pt
        </a>
        ).
      </p>
      <p>
        Pode ainda apresentar reclamação através do{" "}
        <Link to="/livro-de-reclamacoes">Livro de Reclamações Eletrónico</Link>.
      </p>

      <h2>10. Contactos</h2>
      <p>
        Para qualquer questão sobre estes termos, contacte-nos através de{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a> ou{" "}
        <a href={company.phoneHref}>{company.phone}</a>.
      </p>
    </LegalLayout>
  );
}
