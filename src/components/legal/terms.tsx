import { Link } from "@tanstack/react-router";
import { CompanyIdentification } from "@/components/site/LegalLayout";
import { company } from "@/lib/company";
import { EmailLink, Ext, PhoneLink, SiteLink, type LegalDocs } from "./shared";

const b = company.brand;

export const termsDocs: LegalDocs = {
  pt: {
    title: "Termos de Utilização",
    description: "Condições de utilização do site da Nexia Solutions.",
    body: () => (
      <>
        <p>
          Estes Termos de Utilização regulam o acesso e a utilização do site <SiteLink /> (o
          «Site»). Ao utilizar o Site, aceita estes termos. Se não concordar, por favor não utilize
          o Site.
        </p>

        <h2>1. Identificação do prestador</h2>
        <p>
          Em cumprimento do Decreto-Lei n.º 7/2004, de 7 de janeiro (comércio eletrónico), o Site é
          detido e gerido por:
        </p>
        <CompanyIdentification />

        <h2>2. Objeto do Site</h2>
        <p>
          O Site tem natureza informativa e destina-se a apresentar os serviços da {b} — automação
          de processos, inteligência artificial, desenvolvimento de software e websites à medida e
          integração de sistemas — e a permitir o contacto e o pedido de diagnóstico gratuito.
        </p>
        <p>
          A informação apresentada (incluindo descrições de serviços, exemplos, casos de utilização,
          estatísticas e estimativas de poupança) é de caráter geral e indicativo. Não constitui uma
          proposta contratual vinculativa. As condições de cada serviço (âmbito, preço, prazos e
          garantias) são definidas numa proposta ou contrato escrito específico.
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
          Todos os conteúdos do Site — textos, logótipo, marca «{b}», design, imagens, gráficos e
          código — são propriedade da {b} ou dos respetivos titulares e estão protegidos pela
          legislação de direitos de autor e de propriedade industrial. É proibida a sua reprodução,
          distribuição ou modificação, total ou parcial, sem autorização prévia e escrita, exceto
          para uso pessoal e não comercial.
        </p>

        <h2>6. Responsabilidade</h2>
        <ul>
          <li>
            Esforçamo-nos por manter a informação do Site correta e atualizada, mas não garantimos a
            ausência de erros ou omissões, nem que o Site esteja disponível de forma ininterrupta.
          </li>
          <li>
            Na medida permitida por lei, a {b} não é responsável por danos resultantes da utilização
            do Site ou da impossibilidade de o utilizar, nem por decisões tomadas exclusivamente com
            base na informação geral nele contida.
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
          competente o foro da comarca da sede da {b}, sem prejuízo das regras imperativas
          aplicáveis aos consumidores.
        </p>
        <p>
          <strong>Resolução alternativa de litígios de consumo:</strong> em caso de litígio de
          consumo, o consumidor pode recorrer a uma entidade de resolução alternativa de litígios de
          consumo (RAL), nos termos da Lei n.º 144/2015, de 8 de setembro, designadamente:
        </p>
        <ul>
          <li>
            CIAB — Centro de Informação, Mediação e Arbitragem de Consumo (Tribunal Arbitral de
            Consumo), competente para a região onde se situa a nossa sede —{" "}
            <Ext href="https://www.ciab.pt" />;
          </li>
          <li>
            CNIACC — Centro Nacional de Informação e Arbitragem de Conflitos de Consumo —{" "}
            <Ext href="https://www.cniacc.pt" />.
          </li>
        </ul>
        <p>
          A lista completa das entidades RAL está disponível no Portal do Consumidor, em{" "}
          <Ext href="https://www.consumidor.gov.pt" />. Pode ainda apresentar reclamação através do{" "}
          <Link to="/livro-de-reclamacoes">Livro de Reclamações Eletrónico</Link>.
        </p>

        <h2>10. Contactos</h2>
        <p>
          Para qualquer questão sobre estes termos, contacte-nos através de <EmailLink /> ou{" "}
          <PhoneLink />.
        </p>
      </>
    ),
  },

  en: {
    title: "Terms of Use",
    description: "Terms and conditions for using the Nexia Solutions website.",
    body: () => (
      <>
        <p>
          These Terms of Use govern access to and use of the website <SiteLink /> (the "Website").
          By using the Website, you accept these terms. If you do not agree, please do not use the
          Website.
        </p>

        <h2>1. Provider identification</h2>
        <p>
          In compliance with Portuguese Decree-Law No. 7/2004 of 7 January (electronic commerce),
          the Website is owned and operated by:
        </p>
        <CompanyIdentification />

        <h2>2. Purpose of the Website</h2>
        <p>
          The Website is informational and is intended to present the services of {b} — process
          automation, artificial intelligence, custom software and website development, and systems
          integration — and to allow you to contact us and request a free assessment.
        </p>
        <p>
          The information provided (including service descriptions, examples, use cases, statistics
          and savings estimates) is general and indicative. It does not constitute a binding
          contractual offer. The terms of each service (scope, price, deadlines and warranties) are
          set out in a specific written proposal or contract.
        </p>

        <h2>3. Free assessment and contact requests</h2>
        <ul>
          <li>Requesting a free assessment creates no obligation to contract for either party.</li>
          <li>
            You undertake to provide truthful information and not to submit unlawful or offensive
            content, or content that infringes the rights of third parties.
          </li>
          <li>
            The data you submit is processed in accordance with our{" "}
            <Link to="/politica-de-privacidade">Privacy Policy</Link>.
          </li>
        </ul>

        <h2>4. Acceptable use</h2>
        <p>When using the Website, you agree not to:</p>
        <ul>
          <li>use it for unlawful purposes or contrary to good faith;</li>
          <li>
            attempt to gain unauthorised access to systems, servers or data, or compromise the
            security and operation of the Website;
          </li>
          <li>introduce viruses or malicious code, or send unsolicited communications (spam);</li>
          <li>
            scrape data from the Website by automated means for abusive purposes or in breach of
            these terms.
          </li>
        </ul>

        <h2>5. Intellectual property</h2>
        <p>
          All content on the Website — texts, logo, the "{b}" brand, design, images, graphics and
          code — belongs to {b} or to the respective rights holders and is protected by copyright
          and industrial property law. Reproduction, distribution or modification, in whole or in
          part, without prior written permission is prohibited, except for personal, non-commercial
          use.
        </p>

        <h2>6. Liability</h2>
        <ul>
          <li>
            We strive to keep the information on the Website accurate and up to date, but we do not
            guarantee that it is free of errors or omissions, or that the Website will be available
            without interruption.
          </li>
          <li>
            To the extent permitted by law, {b} is not liable for damage resulting from the use of,
            or inability to use, the Website, nor for decisions made solely on the basis of the
            general information it contains.
          </li>
          <li>
            Nothing in these terms excludes or limits liability that cannot be excluded or limited
            by law, nor consumers' statutory rights.
          </li>
        </ul>

        <h2>7. External links</h2>
        <p>
          The Website may contain links to third-party websites (for example, social networks).
          These links are provided for convenience; we do not control and are not responsible for
          their content, policies or practices.
        </p>

        <h2>8. Changes</h2>
        <p>
          We may change these Terms of Use at any time. The version in force is the one published on
          this page, with its update date.
        </p>

        <h2>9. Governing law and dispute resolution</h2>
        <p>
          These terms are governed by Portuguese law. The courts of the district where {b} has its
          registered office have jurisdiction over any dispute, without prejudice to the mandatory
          rules applicable to consumers.
        </p>
        <p>
          <strong>Alternative consumer dispute resolution:</strong> in the event of a consumer
          dispute, consumers may refer it to an alternative dispute resolution (ADR) entity, under
          Portuguese Law No. 144/2015 of 8 September, namely:
        </p>
        <ul>
          <li>
            CIAB — Consumer Information, Mediation and Arbitration Centre (Consumer Arbitration
            Court), competent for the region where our registered office is located —{" "}
            <Ext href="https://www.ciab.pt" />;
          </li>
          <li>
            CNIACC — National Centre for Consumer Dispute Information and Arbitration —{" "}
            <Ext href="https://www.cniacc.pt" />.
          </li>
        </ul>
        <p>
          The full list of ADR entities is available on the Portuguese Consumer Portal at{" "}
          <Ext href="https://www.consumidor.gov.pt" />. You may also file a complaint through the{" "}
          <Link to="/livro-de-reclamacoes">Electronic Complaints Book</Link>.
        </p>

        <h2>10. Contact</h2>
        <p>
          For any question about these terms, contact us at <EmailLink /> or <PhoneLink />.
        </p>
      </>
    ),
  },

  fr: {
    title: "Conditions d'utilisation",
    description: "Conditions d'utilisation du site de Nexia Solutions.",
    body: () => (
      <>
        <p>
          Les présentes Conditions d'utilisation régissent l'accès et l'utilisation du site{" "}
          <SiteLink /> (le « Site »). En utilisant le Site, vous acceptez ces conditions. Si vous
          n'êtes pas d'accord, veuillez ne pas utiliser le Site.
        </p>

        <h2>1. Identification du prestataire</h2>
        <p>
          Conformément au décret-loi portugais n.º 7/2004 du 7 janvier (commerce électronique), le
          Site est détenu et exploité par :
        </p>
        <CompanyIdentification />

        <h2>2. Objet du Site</h2>
        <p>
          Le Site a un caractère informatif et a pour objet de présenter les services de {b} —
          automatisation des processus, intelligence artificielle, développement de logiciels et de
          sites web sur mesure et intégration de systèmes — et de permettre la prise de contact et
          la demande de diagnostic gratuit.
        </p>
        <p>
          Les informations présentées (y compris les descriptions de services, exemples, cas
          d'usage, statistiques et estimations d'économies) sont générales et indicatives. Elles ne
          constituent pas une offre contractuelle ferme. Les conditions de chaque service
          (périmètre, prix, délais et garanties) sont définies dans une proposition ou un contrat
          écrit spécifique.
        </p>

        <h2>3. Diagnostic gratuit et demandes de contact</h2>
        <ul>
          <li>
            La demande de diagnostic gratuit n'entraîne aucune obligation de contracter pour aucune
            des parties.
          </li>
          <li>
            Vous vous engagez à fournir des informations exactes et à ne pas soumettre de contenus
            illicites, offensants ou portant atteinte aux droits de tiers.
          </li>
          <li>
            Les données soumises sont traitées conformément à notre{" "}
            <Link to="/politica-de-privacidade">Politique de confidentialité</Link>.
          </li>
        </ul>

        <h2>4. Utilisation acceptable</h2>
        <p>En utilisant le Site, vous vous engagez à ne pas :</p>
        <ul>
          <li>l'utiliser à des fins illégales ou contraires à la bonne foi ;</li>
          <li>
            tenter d'accéder sans autorisation à des systèmes, serveurs ou données, ou compromettre
            la sécurité et le fonctionnement du Site ;
          </li>
          <li>
            introduire des virus ou du code malveillant, ou envoyer des communications non
            sollicitées (spam) ;
          </li>
          <li>
            collecter des données du Site de manière automatisée à des fins abusives ou contraires
            aux présentes conditions.
          </li>
        </ul>

        <h2>5. Propriété intellectuelle</h2>
        <p>
          Tous les contenus du Site — textes, logo, marque « {b} », design, images, graphiques et
          code — sont la propriété de {b} ou de leurs titulaires respectifs et sont protégés par la
          législation sur le droit d'auteur et la propriété industrielle. Toute reproduction,
          distribution ou modification, totale ou partielle, sans autorisation écrite préalable est
          interdite, sauf pour un usage personnel et non commercial.
        </p>

        <h2>6. Responsabilité</h2>
        <ul>
          <li>
            Nous nous efforçons de maintenir les informations du Site exactes et à jour, mais nous
            ne garantissons ni l'absence d'erreurs ou d'omissions, ni la disponibilité ininterrompue
            du Site.
          </li>
          <li>
            Dans la mesure permise par la loi, {b} n'est pas responsable des dommages résultant de
            l'utilisation du Site ou de l'impossibilité de l'utiliser, ni des décisions prises
            exclusivement sur la base des informations générales qu'il contient.
          </li>
          <li>
            Rien dans les présentes conditions n'exclut ni ne limite une responsabilité qui ne peut
            l'être en vertu de la loi, ni les droits légaux des consommateurs.
          </li>
        </ul>

        <h2>7. Liens externes</h2>
        <p>
          Le Site peut contenir des liens vers des sites tiers (par exemple, des réseaux sociaux).
          Ces liens sont fournis par commodité ; nous ne contrôlons pas leurs contenus, politiques
          ou pratiques et n'en sommes pas responsables.
        </p>

        <h2>8. Modifications</h2>
        <p>
          Nous pouvons modifier les présentes Conditions d'utilisation à tout moment. La version en
          vigueur est celle publiée sur cette page, avec sa date de mise à jour.
        </p>

        <h2>9. Droit applicable et règlement des litiges</h2>
        <p>
          Les présentes conditions sont régies par le droit portugais. Le tribunal de
          l'arrondissement judiciaire du siège de {b} est compétent pour tout litige, sans préjudice
          des règles impératives applicables aux consommateurs.
        </p>
        <p>
          <strong>Règlement extrajudiciaire des litiges de consommation :</strong> en cas de litige
          de consommation, le consommateur peut recourir à une entité de règlement extrajudiciaire
          des litiges de consommation (REL), conformément à la loi portugaise n.º 144/2015 du 8
          septembre, notamment :
        </p>
        <ul>
          <li>
            CIAB — Centre d'information, de médiation et d'arbitrage de la consommation (tribunal
            arbitral de la consommation), compétent pour la région de notre siège —{" "}
            <Ext href="https://www.ciab.pt" /> ;
          </li>
          <li>
            CNIACC — Centre national d'information et d'arbitrage des litiges de consommation —{" "}
            <Ext href="https://www.cniacc.pt" />.
          </li>
        </ul>
        <p>
          La liste complète des entités REL est disponible sur le Portail du consommateur portugais
          : <Ext href="https://www.consumidor.gov.pt" />. Vous pouvez également introduire une
          réclamation via le{" "}
          <Link to="/livro-de-reclamacoes">Livre de réclamations électronique</Link>.
        </p>

        <h2>10. Contact</h2>
        <p>
          Pour toute question concernant ces conditions, contactez-nous à <EmailLink /> ou au{" "}
          <PhoneLink />.
        </p>
      </>
    ),
  },

  es: {
    title: "Términos de Uso",
    description: "Condiciones de uso del sitio web de Nexia Solutions.",
    body: () => (
      <>
        <p>
          Estos Términos de Uso regulan el acceso y la utilización del sitio web <SiteLink /> (el
          «Sitio»). Al utilizar el Sitio, acepta estos términos. Si no está de acuerdo, le rogamos
          que no utilice el Sitio.
        </p>

        <h2>1. Identificación del prestador</h2>
        <p>
          En cumplimiento del Decreto-Ley portugués n.º 7/2004, de 7 de enero (comercio
          electrónico), el Sitio es propiedad de y está gestionado por:
        </p>
        <CompanyIdentification />

        <h2>2. Objeto del Sitio</h2>
        <p>
          El Sitio tiene carácter informativo y está destinado a presentar los servicios de {b} —
          automatización de procesos, inteligencia artificial, desarrollo de software y sitios web a
          medida e integración de sistemas — y a permitir el contacto y la solicitud de diagnóstico
          gratuito.
        </p>
        <p>
          La información presentada (incluidas descripciones de servicios, ejemplos, casos de uso,
          estadísticas y estimaciones de ahorro) es de carácter general e indicativo. No constituye
          una oferta contractual vinculante. Las condiciones de cada servicio (alcance, precio,
          plazos y garantías) se definen en una propuesta o contrato escrito específico.
        </p>

        <h2>3. Diagnóstico gratuito y solicitudes de contacto</h2>
        <ul>
          <li>
            La solicitud de diagnóstico gratuito no implica ninguna obligación de contratación para
            ninguna de las partes.
          </li>
          <li>
            Se compromete a facilitar información veraz y a no enviar contenidos ilícitos, ofensivos
            o que vulneren derechos de terceros.
          </li>
          <li>
            Los datos enviados se tratan conforme a nuestra{" "}
            <Link to="/politica-de-privacidade">Política de Privacidad</Link>.
          </li>
        </ul>

        <h2>4. Uso aceptable</h2>
        <p>Al utilizar el Sitio, se compromete a no:</p>
        <ul>
          <li>utilizarlo con fines ilegales o contrarios a la buena fe;</li>
          <li>
            intentar acceder sin autorización a sistemas, servidores o datos, o comprometer la
            seguridad y el funcionamiento del Sitio;
          </li>
          <li>
            introducir virus o código malicioso, ni enviar comunicaciones no solicitadas (spam);
          </li>
          <li>
            extraer datos del Sitio de forma automatizada con fines abusivos o que vulneren estos
            términos.
          </li>
        </ul>

        <h2>5. Propiedad intelectual</h2>
        <p>
          Todos los contenidos del Sitio — textos, logotipo, marca «{b}», diseño, imágenes, gráficos
          y código — son propiedad de {b} o de sus respectivos titulares y están protegidos por la
          legislación de derechos de autor y de propiedad industrial. Queda prohibida su
          reproducción, distribución o modificación, total o parcial, sin autorización previa y por
          escrito, salvo para uso personal y no comercial.
        </p>

        <h2>6. Responsabilidad</h2>
        <ul>
          <li>
            Nos esforzamos por mantener la información del Sitio correcta y actualizada, pero no
            garantizamos la ausencia de errores u omisiones ni la disponibilidad ininterrumpida del
            Sitio.
          </li>
          <li>
            En la medida permitida por la ley, {b} no se responsabiliza de los daños derivados del
            uso del Sitio o de la imposibilidad de utilizarlo, ni de las decisiones tomadas
            exclusivamente con base en la información general que contiene.
          </li>
          <li>
            Nada en estos términos excluye o limita la responsabilidad que, conforme a la ley, no
            pueda excluirse o limitarse, ni los derechos legales de los consumidores.
          </li>
        </ul>

        <h2>7. Enlaces externos</h2>
        <p>
          El Sitio puede contener enlaces a sitios de terceros (por ejemplo, redes sociales). Estos
          enlaces se ofrecen por conveniencia; no controlamos ni somos responsables de sus
          contenidos, políticas o prácticas.
        </p>

        <h2>8. Cambios</h2>
        <p>
          Podemos modificar estos Términos de Uso en cualquier momento. La versión vigente es la
          publicada en esta página, con su fecha de actualización.
        </p>

        <h2>9. Ley aplicable y resolución de litigios</h2>
        <p>
          Estos términos se rigen por la ley portuguesa. Para la resolución de cualquier litigio son
          competentes los tribunales de la comarca del domicilio de {b}, sin perjuicio de las normas
          imperativas aplicables a los consumidores.
        </p>
        <p>
          <strong>Resolución alternativa de litigios de consumo:</strong> en caso de litigio de
          consumo, el consumidor puede recurrir a una entidad de resolución alternativa de litigios
          de consumo (RAL), conforme a la Ley portuguesa n.º 144/2015, de 8 de septiembre, en
          particular:
        </p>
        <ul>
          <li>
            CIAB — Centro de Información, Mediación y Arbitraje de Consumo (Tribunal Arbitral de
            Consumo), competente para la región donde se encuentra nuestro domicilio —{" "}
            <Ext href="https://www.ciab.pt" />;
          </li>
          <li>
            CNIACC — Centro Nacional de Información y Arbitraje de Conflictos de Consumo —{" "}
            <Ext href="https://www.cniacc.pt" />.
          </li>
        </ul>
        <p>
          La lista completa de entidades RAL está disponible en el Portal del Consumidor portugués:{" "}
          <Ext href="https://www.consumidor.gov.pt" />. También puede presentar una reclamación a
          través del <Link to="/livro-de-reclamacoes">Libro de Reclamaciones Electrónico</Link>.
        </p>

        <h2>10. Contacto</h2>
        <p>
          Para cualquier cuestión sobre estos términos, contáctenos en <EmailLink /> o en el{" "}
          <PhoneLink />.
        </p>
      </>
    ),
  },
};
