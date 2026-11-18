import { Link } from "@tanstack/react-router";
import { CompanyIdentification } from "@/components/site/LegalLayout";
import { company } from "@/lib/company";
import { EmailLink, Ext, SiteLink, type LegalDocs } from "./shared";

const b = company.brand;

export const privacyDocs: LegalDocs = {
  pt: {
    title: "Política de Privacidade",
    description:
      "Saiba como a Nexia Solutions recolhe, utiliza e protege os seus dados pessoais, em conformidade com o RGPD.",
    body: () => (
      <>
        <p>
          A {b} respeita a sua privacidade e compromete-se a proteger os dados pessoais que nos
          confia. Esta Política de Privacidade explica que dados recolhemos através do site{" "}
          <SiteLink />, para que fins, com que fundamento, durante quanto tempo os conservamos e
          quais os seus direitos, nos termos do Regulamento (UE) 2016/679 — Regulamento Geral sobre
          a Proteção de Dados (RGPD) — e da Lei n.º 58/2019, de 8 de agosto.
        </p>

        <h2>1. Responsável pelo tratamento</h2>
        <p>O responsável pelo tratamento dos seus dados pessoais é:</p>
        <CompanyIdentification />
        <p>
          Para qualquer questão relacionada com privacidade ou com o exercício dos seus direitos,
          contacte-nos através de <EmailLink />.
        </p>

        <h2>2. Que dados pessoais recolhemos</h2>
        <h3>2.1. Dados que nos fornece</h3>
        <p>
          Quando preenche o formulário de pedido de diagnóstico gratuito ou nos contacta por email,
          telefone ou WhatsApp, podemos recolher:
        </p>
        <ul>
          <li>nome;</li>
          <li>nome da empresa, área de atividade e número de colaboradores;</li>
          <li>endereço de email e número de telefone;</li>
          <li>
            descrição do problema ou necessidade e qualquer outra informação que decida partilhar
            connosco.
          </li>
        </ul>
        <p>
          Pedimos-lhe que não inclua no formulário dados sensíveis (por exemplo, dados de saúde) nem
          dados pessoais de terceiros que não sejam necessários para o seu pedido.
        </p>
        <h3>2.2. Dados recolhidos automaticamente</h3>
        <p>
          Como qualquer site, o servidor de alojamento regista dados técnicos de acesso (endereço
          IP, data e hora, página pedida, tipo de navegador) para garantir o funcionamento e a
          segurança do serviço. O site guarda ainda no seu navegador as preferências que escolher
          (tema e idioma), sem dados pessoais. Atualmente não utilizamos ferramentas de análise
          estatística, publicidade ou perfis de utilizador. Para mais detalhes, consulte a nossa{" "}
          <Link to="/politica-de-cookies">Política de Cookies</Link>.
        </p>
        <p>
          A calculadora de poupança do site funciona apenas no seu navegador: os valores que introduz não são enviados nem guardados. Só chegam até nós se decidir enviar o formulário de contacto com a estimativa incluída.
        </p>

        <h2>3. Finalidades e fundamentos de licitude</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Finalidade</th>
                <th>Fundamento (art. 6.º RGPD)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Responder ao seu pedido de contacto ou diagnóstico e preparar uma proposta</td>
                <td>Diligências pré-contratuais a pedido do titular — alínea b)</td>
              </tr>
              <tr>
                <td>Prestação dos serviços contratados e gestão da relação com o cliente</td>
                <td>Execução de contrato — alínea b)</td>
              </tr>
              <tr>
                <td>Faturação e cumprimento de obrigações contabilísticas e fiscais</td>
                <td>Obrigação jurídica — alínea c)</td>
              </tr>
              <tr>
                <td>
                  Segurança e bom funcionamento do site; defesa de direitos em processos judiciais
                </td>
                <td>Interesse legítimo — alínea f)</td>
              </tr>
              <tr>
                <td>Envio de comunicações comerciais (apenas se o autorizar)</td>
                <td>Consentimento — alínea a), revogável a qualquer momento</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Não tomamos decisões exclusivamente automatizadas nem definimos perfis que produzam
          efeitos jurídicos sobre si.
        </p>

        <h2>4. Com quem partilhamos os dados</h2>
        <p>
          Não vendemos nem cedemos os seus dados para fins de marketing de terceiros. Os dados podem
          ser tratados pelos seguintes prestadores de serviços (subcontratantes), apenas na medida
          necessária às finalidades acima indicadas:
        </p>
        <ul>
          <li>
            <strong>Web3Forms</strong> — serviço de envio do formulário de contacto para o nosso
            email;
          </li>
          <li>
            <strong>Google (Gmail / Google Workspace)</strong> — receção e gestão de emails;
          </li>
          <li>
            <strong>GitHub (GitHub Pages)</strong> — alojamento do site;
          </li>
          <li>
            <strong>Meta (WhatsApp)</strong> — apenas se optar por nos contactar através do
            WhatsApp;
          </li>
          <li>
            prestadores de serviços de contabilidade, consultoria jurídica e autoridades públicas,
            quando exigido por lei.
          </li>
        </ul>

        <h2>5. Transferências internacionais</h2>
        <p>
          Alguns dos prestadores acima podem tratar dados fora do Espaço Económico Europeu (por
          exemplo, nos Estados Unidos). Nesses casos, a transferência é efetuada com base numa
          decisão de adequação da Comissão Europeia (como o EU-U.S. Data Privacy Framework, para
          entidades certificadas) ou mediante cláusulas contratuais-tipo aprovadas pela Comissão
          Europeia, nos termos dos artigos 45.º e 46.º do RGPD.
        </p>

        <h2>6. Prazo de conservação</h2>
        <ul>
          <li>
            <strong>Pedidos de contacto/diagnóstico que não resultem em contrato:</strong> até 2
            anos após o último contacto, salvo se pedir a eliminação antes.
          </li>
          <li>
            <strong>Dados de clientes:</strong> durante a vigência do contrato e, depois, pelo prazo
            necessário ao cumprimento de obrigações legais (designadamente 10 anos para documentos
            contabilísticos e fiscais) ou à defesa de direitos.
          </li>
          <li>
            <strong>Registos técnicos de acesso:</strong> pelo período definido pelo prestador de
            alojamento, por razões de segurança.
          </li>
        </ul>

        <h2>7. Os seus direitos</h2>
        <p>Nos termos do RGPD, tem o direito de:</p>
        <ul>
          <li>aceder aos seus dados pessoais e obter uma cópia;</li>
          <li>pedir a retificação de dados inexatos ou incompletos;</li>
          <li>pedir o apagamento dos dados («direito a ser esquecido»);</li>
          <li>pedir a limitação do tratamento;</li>
          <li>opor-se ao tratamento baseado em interesse legítimo ou para marketing direto;</li>
          <li>receber os dados num formato estruturado (portabilidade);</li>
          <li>
            retirar o consentimento a qualquer momento, sem comprometer a licitude do tratamento
            anterior.
          </li>
        </ul>
        <p>
          Para exercer qualquer destes direitos, envie um email para <EmailLink />. Responderemos no
          prazo máximo de um mês, prorrogável nos termos legais. Poderemos pedir informação
          adicional para confirmar a sua identidade.
        </p>
        <p>
          Tem ainda o direito de apresentar reclamação à autoridade de controlo, a Comissão Nacional
          de Proteção de Dados (CNPD) — <Ext href="https://www.cnpd.pt" />.
        </p>

        <h2>8. Segurança</h2>
        <p>
          Adotamos medidas técnicas e organizativas adequadas para proteger os seus dados contra
          perda, acesso não autorizado, alteração ou divulgação, incluindo comunicações cifradas
          (HTTPS) e acesso restrito à informação. Nenhum sistema é totalmente infalível, pelo que
          não podemos garantir segurança absoluta na transmissão de dados pela Internet.
        </p>

        <h2>9. Menores</h2>
        <p>
          Os nossos serviços destinam-se a empresas e profissionais. Não recolhemos intencionalmente
          dados de menores de 16 anos.
        </p>

        <h2>10. Ligações para sites de terceiros</h2>
        <p>
          O site contém ligações para redes sociais (Facebook, Instagram e WhatsApp) e outros sites.
          Ao segui-las, passa a aplicar-se a política de privacidade do respetivo operador, pela
          qual não somos responsáveis.
        </p>

        <h2>11. Alterações a esta política</h2>
        <p>
          Podemos atualizar esta Política de Privacidade para refletir alterações legais ou nos
          nossos serviços. A data da última atualização está indicada no topo desta página.
          Recomendamos a sua consulta periódica.
        </p>
        <p>
          Consulte também os nossos <Link to="/termos-de-utilizacao">Termos de Utilização</Link>.
        </p>
      </>
    ),
  },

  en: {
    title: "Privacy Policy",
    description:
      "Learn how Nexia Solutions collects, uses and protects your personal data, in accordance with the GDPR.",
    body: () => (
      <>
        <p>
          {b} respects your privacy and is committed to protecting the personal data you entrust to
          us. This Privacy Policy explains what data we collect through the website <SiteLink />,
          for what purposes, on what legal basis, how long we keep it and what your rights are,
          under Regulation (EU) 2016/679 — the General Data Protection Regulation (GDPR) — and
          Portuguese Law No. 58/2019 of 8 August.
        </p>

        <h2>1. Data controller</h2>
        <p>The controller of your personal data is:</p>
        <CompanyIdentification />
        <p>
          For any question about privacy or the exercise of your rights, please contact us at{" "}
          <EmailLink />.
        </p>

        <h2>2. What personal data we collect</h2>
        <h3>2.1. Data you provide to us</h3>
        <p>
          When you fill in the free assessment request form or contact us by email, phone or
          WhatsApp, we may collect:
        </p>
        <ul>
          <li>your name;</li>
          <li>company name, business sector and number of employees;</li>
          <li>email address and phone number;</li>
          <li>
            a description of your problem or need and any other information you choose to share with
            us.
          </li>
        </ul>
        <p>
          Please do not include sensitive data (for example, health data) or personal data of third
          parties that is not necessary for your request.
        </p>
        <h3>2.2. Data collected automatically</h3>
        <p>
          Like any website, the hosting server logs technical access data (IP address, date and
          time, requested page, browser type) to ensure the operation and security of the service.
          The website also stores in your browser the preferences you choose (theme and language),
          with no personal data. We currently do not use analytics, advertising or user-profiling
          tools. For more details, please see our{" "}
          <Link to="/politica-de-cookies">Cookie Policy</Link>.
        </p>
        <p>
          The website's savings calculator runs only in your browser: the values you enter are neither sent nor stored. They only reach us if you choose to submit the contact form with the estimate included.
        </p>

        <h2>3. Purposes and legal bases</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Purpose</th>
                <th>Legal basis (Art. 6 GDPR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Replying to your contact or assessment request and preparing a proposal</td>
                <td>Pre-contractual steps at the data subject's request — point (b)</td>
              </tr>
              <tr>
                <td>Providing the contracted services and managing the client relationship</td>
                <td>Performance of a contract — point (b)</td>
              </tr>
              <tr>
                <td>Invoicing and compliance with accounting and tax obligations</td>
                <td>Legal obligation — point (c)</td>
              </tr>
              <tr>
                <td>Security and proper functioning of the website; defence of legal claims</td>
                <td>Legitimate interest — point (f)</td>
              </tr>
              <tr>
                <td>Sending marketing communications (only if you authorise it)</td>
                <td>Consent — point (a), which you may withdraw at any time</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          We do not make decisions based solely on automated processing, nor do we carry out
          profiling that produces legal effects concerning you.
        </p>

        <h2>4. Who we share data with</h2>
        <p>
          We do not sell or hand over your data for third-party marketing purposes. Data may be
          processed by the following service providers (processors), only to the extent necessary
          for the purposes above:
        </p>
        <ul>
          <li>
            <strong>Web3Forms</strong> — delivers the contact form to our email;
          </li>
          <li>
            <strong>Google (Gmail / Google Workspace)</strong> — receiving and managing emails;
          </li>
          <li>
            <strong>GitHub (GitHub Pages)</strong> — website hosting;
          </li>
          <li>
            <strong>Meta (WhatsApp)</strong> — only if you choose to contact us via WhatsApp;
          </li>
          <li>
            accounting and legal advisory service providers, and public authorities where required
            by law.
          </li>
        </ul>

        <h2>5. International transfers</h2>
        <p>
          Some of the providers above may process data outside the European Economic Area (for
          example, in the United States). In such cases, the transfer is based on a European
          Commission adequacy decision (such as the EU-U.S. Data Privacy Framework, for certified
          entities) or on standard contractual clauses approved by the European Commission, under
          Articles 45 and 46 of the GDPR.
        </p>

        <h2>6. Retention period</h2>
        <ul>
          <li>
            <strong>Contact/assessment requests that do not lead to a contract:</strong> up to 2
            years after the last contact, unless you ask for deletion sooner.
          </li>
          <li>
            <strong>Client data:</strong> for the duration of the contract and thereafter for the
            period required to comply with legal obligations (namely 10 years for accounting and tax
            documents) or to defend legal claims.
          </li>
          <li>
            <strong>Technical access logs:</strong> for the period set by the hosting provider, for
            security reasons.
          </li>
        </ul>

        <h2>7. Your rights</h2>
        <p>Under the GDPR, you have the right to:</p>
        <ul>
          <li>access your personal data and obtain a copy;</li>
          <li>request the rectification of inaccurate or incomplete data;</li>
          <li>request the erasure of your data ("right to be forgotten");</li>
          <li>request the restriction of processing;</li>
          <li>object to processing based on legitimate interest or for direct marketing;</li>
          <li>receive your data in a structured format (portability);</li>
          <li>
            withdraw your consent at any time, without affecting the lawfulness of prior processing.
          </li>
        </ul>
        <p>
          To exercise any of these rights, email <EmailLink />. We will reply within one month at
          the latest, which may be extended as permitted by law. We may ask for additional
          information to confirm your identity.
        </p>
        <p>
          You also have the right to lodge a complaint with the supervisory authority, the
          Portuguese Data Protection Authority (CNPD) — <Ext href="https://www.cnpd.pt" />.
        </p>

        <h2>8. Security</h2>
        <p>
          We take appropriate technical and organisational measures to protect your data against
          loss, unauthorised access, alteration or disclosure, including encrypted communications
          (HTTPS) and restricted access to information. No system is completely infallible, so we
          cannot guarantee absolute security of data transmitted over the Internet.
        </p>

        <h2>9. Minors</h2>
        <p>
          Our services are intended for businesses and professionals. We do not knowingly collect
          data from children under 16.
        </p>

        <h2>10. Links to third-party websites</h2>
        <p>
          The website contains links to social networks (Facebook, Instagram and WhatsApp) and other
          websites. When you follow them, the privacy policy of the respective operator applies, for
          which we are not responsible.
        </p>

        <h2>11. Changes to this policy</h2>
        <p>
          We may update this Privacy Policy to reflect legal changes or changes to our services. The
          date of the last update is shown at the top of this page. We recommend that you check it
          periodically.
        </p>
        <p>
          Please also see our <Link to="/termos-de-utilizacao">Terms of Use</Link>.
        </p>
      </>
    ),
  },

  fr: {
    title: "Politique de confidentialité",
    description:
      "Découvrez comment Nexia Solutions collecte, utilise et protège vos données personnelles, conformément au RGPD.",
    body: () => (
      <>
        <p>
          {b} respecte votre vie privée et s'engage à protéger les données personnelles que vous lui
          confiez. La présente Politique de confidentialité explique quelles données nous collectons
          via le site <SiteLink />, à quelles fins, sur quelle base juridique, pendant combien de
          temps nous les conservons et quels sont vos droits, conformément au Règlement (UE)
          2016/679 — Règlement général sur la protection des données (RGPD) — et à la loi portugaise
          n.º 58/2019 du 8 août.
        </p>

        <h2>1. Responsable du traitement</h2>
        <p>Le responsable du traitement de vos données personnelles est :</p>
        <CompanyIdentification />
        <p>
          Pour toute question relative à la confidentialité ou à l'exercice de vos droits,
          contactez-nous à <EmailLink />.
        </p>

        <h2>2. Données personnelles collectées</h2>
        <h3>2.1. Données que vous nous fournissez</h3>
        <p>
          Lorsque vous remplissez le formulaire de demande de diagnostic gratuit ou nous contactez
          par e-mail, téléphone ou WhatsApp, nous pouvons collecter :
        </p>
        <ul>
          <li>votre nom ;</li>
          <li>le nom de l'entreprise, le secteur d'activité et le nombre de salariés ;</li>
          <li>l'adresse e-mail et le numéro de téléphone ;</li>
          <li>
            la description de votre problème ou besoin et toute autre information que vous
            choisissez de partager avec nous.
          </li>
        </ul>
        <p>
          Nous vous demandons de ne pas inclure de données sensibles (par exemple, des données de
          santé) ni de données personnelles de tiers qui ne sont pas nécessaires à votre demande.
        </p>
        <h3>2.2. Données collectées automatiquement</h3>
        <p>
          Comme tout site web, le serveur d'hébergement enregistre des données techniques d'accès
          (adresse IP, date et heure, page demandée, type de navigateur) afin d'assurer le
          fonctionnement et la sécurité du service. Le site enregistre également dans votre
          navigateur les préférences que vous choisissez (thème et langue), sans données
          personnelles. Nous n'utilisons actuellement aucun outil de mesure d'audience, de publicité
          ou de profilage. Pour plus de détails, consultez notre{" "}
          <Link to="/politica-de-cookies">Politique de cookies</Link>.
        </p>
        <p>
          Le calculateur d'économies du site fonctionne uniquement dans votre navigateur : les valeurs saisies ne sont ni envoyées ni conservées. Elles ne nous parviennent que si vous choisissez d'envoyer le formulaire de contact avec l'estimation incluse.
        </p>

        <h2>3. Finalités et bases juridiques</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Finalité</th>
                <th>Base juridique (art. 6 RGPD)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Répondre à votre demande de contact ou de diagnostic et préparer une proposition
                </td>
                <td>Mesures précontractuelles à la demande de la personne concernée — point b)</td>
              </tr>
              <tr>
                <td>Fourniture des services contractés et gestion de la relation client</td>
                <td>Exécution d'un contrat — point b)</td>
              </tr>
              <tr>
                <td>Facturation et respect des obligations comptables et fiscales</td>
                <td>Obligation légale — point c)</td>
              </tr>
              <tr>
                <td>Sécurité et bon fonctionnement du site ; défense de droits en justice</td>
                <td>Intérêt légitime — point f)</td>
              </tr>
              <tr>
                <td>Envoi de communications commerciales (uniquement si vous l'autorisez)</td>
                <td>Consentement — point a), révocable à tout moment</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Nous ne prenons aucune décision fondée exclusivement sur un traitement automatisé et ne
          réalisons aucun profilage produisant des effets juridiques à votre égard.
        </p>

        <h2>4. Avec qui partageons-nous les données</h2>
        <p>
          Nous ne vendons ni ne cédons vos données à des fins de marketing de tiers. Les données
          peuvent être traitées par les prestataires suivants (sous-traitants), uniquement dans la
          mesure nécessaire aux finalités ci-dessus :
        </p>
        <ul>
          <li>
            <strong>Web3Forms</strong> — envoi du formulaire de contact vers notre e-mail ;
          </li>
          <li>
            <strong>Google (Gmail / Google Workspace)</strong> — réception et gestion des e-mails ;
          </li>
          <li>
            <strong>GitHub (GitHub Pages)</strong> — hébergement du site ;
          </li>
          <li>
            <strong>Meta (WhatsApp)</strong> — uniquement si vous choisissez de nous contacter via
            WhatsApp ;
          </li>
          <li>
            prestataires de services comptables et de conseil juridique, ainsi que les autorités
            publiques lorsque la loi l'exige.
          </li>
        </ul>

        <h2>5. Transferts internationaux</h2>
        <p>
          Certains des prestataires ci-dessus peuvent traiter des données en dehors de l'Espace
          économique européen (par exemple, aux États-Unis). Dans ce cas, le transfert repose sur
          une décision d'adéquation de la Commission européenne (comme le EU-U.S. Data Privacy
          Framework, pour les entités certifiées) ou sur des clauses contractuelles types approuvées
          par la Commission européenne, conformément aux articles 45 et 46 du RGPD.
        </p>

        <h2>6. Durée de conservation</h2>
        <ul>
          <li>
            <strong>Demandes de contact/diagnostic n'aboutissant pas à un contrat :</strong> jusqu'à
            2 ans après le dernier contact, sauf si vous demandez leur suppression avant.
          </li>
          <li>
            <strong>Données clients :</strong> pendant la durée du contrat puis pendant la durée
            nécessaire au respect des obligations légales (notamment 10 ans pour les documents
            comptables et fiscaux) ou à la défense de droits.
          </li>
          <li>
            <strong>Journaux techniques d'accès :</strong> pendant la durée définie par l'hébergeur,
            pour des raisons de sécurité.
          </li>
        </ul>

        <h2>7. Vos droits</h2>
        <p>Conformément au RGPD, vous avez le droit de :</p>
        <ul>
          <li>accéder à vos données personnelles et en obtenir une copie ;</li>
          <li>demander la rectification de données inexactes ou incomplètes ;</li>
          <li>demander l'effacement de vos données (« droit à l'oubli ») ;</li>
          <li>demander la limitation du traitement ;</li>
          <li>vous opposer au traitement fondé sur l'intérêt légitime ou à la prospection ;</li>
          <li>recevoir vos données dans un format structuré (portabilité) ;</li>
          <li>
            retirer votre consentement à tout moment, sans remettre en cause la licéité du
            traitement antérieur.
          </li>
        </ul>
        <p>
          Pour exercer l'un de ces droits, envoyez un e-mail à <EmailLink />. Nous répondrons dans
          un délai maximal d'un mois, prolongeable dans les conditions prévues par la loi. Nous
          pourrons vous demander des informations complémentaires afin de vérifier votre identité.
        </p>
        <p>
          Vous avez également le droit d'introduire une réclamation auprès de l'autorité de contrôle
          portugaise, la Comissão Nacional de Proteção de Dados (CNPD) —{" "}
          <Ext href="https://www.cnpd.pt" />.
        </p>

        <h2>8. Sécurité</h2>
        <p>
          Nous prenons des mesures techniques et organisationnelles appropriées pour protéger vos
          données contre la perte, l'accès non autorisé, l'altération ou la divulgation, notamment
          des communications chiffrées (HTTPS) et un accès restreint aux informations. Aucun système
          n'étant infaillible, nous ne pouvons garantir une sécurité absolue des données transmises
          sur Internet.
        </p>

        <h2>9. Mineurs</h2>
        <p>
          Nos services s'adressent aux entreprises et aux professionnels. Nous ne collectons pas
          sciemment de données concernant des mineurs de moins de 16 ans.
        </p>

        <h2>10. Liens vers des sites tiers</h2>
        <p>
          Le site contient des liens vers des réseaux sociaux (Facebook, Instagram et WhatsApp) et
          d'autres sites. En les suivant, la politique de confidentialité de l'opérateur concerné
          s'applique, et nous n'en sommes pas responsables.
        </p>

        <h2>11. Modifications de cette politique</h2>
        <p>
          Nous pouvons mettre à jour la présente Politique de confidentialité pour tenir compte
          d'évolutions légales ou de nos services. La date de la dernière mise à jour figure en haut
          de cette page. Nous vous recommandons de la consulter régulièrement.
        </p>
        <p>
          Consultez également nos <Link to="/termos-de-utilizacao">Conditions d'utilisation</Link>.
        </p>
      </>
    ),
  },

  es: {
    title: "Política de Privacidad",
    description:
      "Descubra cómo Nexia Solutions recoge, utiliza y protege sus datos personales, de conformidad con el RGPD.",
    body: () => (
      <>
        <p>
          {b} respeta su privacidad y se compromete a proteger los datos personales que nos confía.
          Esta Política de Privacidad explica qué datos recogemos a través del sitio web{" "}
          <SiteLink />, con qué fines, con qué base jurídica, durante cuánto tiempo los conservamos
          y cuáles son sus derechos, conforme al Reglamento (UE) 2016/679 — Reglamento General de
          Protección de Datos (RGPD) — y a la Ley portuguesa n.º 58/2019, de 8 de agosto.
        </p>

        <h2>1. Responsable del tratamiento</h2>
        <p>El responsable del tratamiento de sus datos personales es:</p>
        <CompanyIdentification />
        <p>
          Para cualquier cuestión relacionada con la privacidad o con el ejercicio de sus derechos,
          contáctenos en <EmailLink />.
        </p>

        <h2>2. Qué datos personales recogemos</h2>
        <h3>2.1. Datos que usted nos facilita</h3>
        <p>
          Cuando rellena el formulario de solicitud de diagnóstico gratuito o nos contacta por
          correo electrónico, teléfono o WhatsApp, podemos recoger:
        </p>
        <ul>
          <li>su nombre;</li>
          <li>nombre de la empresa, sector de actividad y número de empleados;</li>
          <li>dirección de correo electrónico y número de teléfono;</li>
          <li>
            la descripción de su problema o necesidad y cualquier otra información que decida
            compartir con nosotros.
          </li>
        </ul>
        <p>
          Le rogamos que no incluya en el formulario datos sensibles (por ejemplo, datos de salud)
          ni datos personales de terceros que no sean necesarios para su solicitud.
        </p>
        <h3>2.2. Datos recogidos automáticamente</h3>
        <p>
          Como cualquier sitio web, el servidor de alojamiento registra datos técnicos de acceso
          (dirección IP, fecha y hora, página solicitada, tipo de navegador) para garantizar el
          funcionamiento y la seguridad del servicio. El sitio también guarda en su navegador las
          preferencias que elija (tema e idioma), sin datos personales. Actualmente no utilizamos
          herramientas de analítica, publicidad ni elaboración de perfiles. Para más detalles,
          consulte nuestra <Link to="/politica-de-cookies">Política de Cookies</Link>.
        </p>
        <p>
          La calculadora de ahorro del sitio funciona solo en su navegador: los valores que introduce no se envían ni se guardan. Solo nos llegan si decide enviar el formulario de contacto con la estimación incluida.
        </p>

        <h2>3. Finalidades y bases jurídicas</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Finalidad</th>
                <th>Base jurídica (art. 6 RGPD)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Responder a su solicitud de contacto o diagnóstico y preparar una propuesta</td>
                <td>Medidas precontractuales a petición del interesado — letra b)</td>
              </tr>
              <tr>
                <td>
                  Prestación de los servicios contratados y gestión de la relación con el cliente
                </td>
                <td>Ejecución de un contrato — letra b)</td>
              </tr>
              <tr>
                <td>Facturación y cumplimiento de obligaciones contables y fiscales</td>
                <td>Obligación legal — letra c)</td>
              </tr>
              <tr>
                <td>
                  Seguridad y buen funcionamiento del sitio; defensa de derechos en procesos
                  judiciales
                </td>
                <td>Interés legítimo — letra f)</td>
              </tr>
              <tr>
                <td>Envío de comunicaciones comerciales (solo si lo autoriza)</td>
                <td>Consentimiento — letra a), revocable en cualquier momento</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          No tomamos decisiones basadas únicamente en el tratamiento automatizado ni elaboramos
          perfiles que produzcan efectos jurídicos sobre usted.
        </p>

        <h2>4. Con quién compartimos los datos</h2>
        <p>
          No vendemos ni cedemos sus datos con fines de marketing de terceros. Los datos pueden ser
          tratados por los siguientes proveedores de servicios (encargados del tratamiento), solo en
          la medida necesaria para las finalidades indicadas:
        </p>
        <ul>
          <li>
            <strong>Web3Forms</strong> — envío del formulario de contacto a nuestro correo;
          </li>
          <li>
            <strong>Google (Gmail / Google Workspace)</strong> — recepción y gestión de correos;
          </li>
          <li>
            <strong>GitHub (GitHub Pages)</strong> — alojamiento del sitio web;
          </li>
          <li>
            <strong>Meta (WhatsApp)</strong> — solo si decide contactarnos por WhatsApp;
          </li>
          <li>
            proveedores de servicios de contabilidad y asesoría jurídica, y autoridades públicas
            cuando lo exija la ley.
          </li>
        </ul>

        <h2>5. Transferencias internacionales</h2>
        <p>
          Algunos de los proveedores anteriores pueden tratar datos fuera del Espacio Económico
          Europeo (por ejemplo, en Estados Unidos). En esos casos, la transferencia se basa en una
          decisión de adecuación de la Comisión Europea (como el EU-U.S. Data Privacy Framework,
          para entidades certificadas) o en cláusulas contractuales tipo aprobadas por la Comisión
          Europea, conforme a los artículos 45 y 46 del RGPD.
        </p>

        <h2>6. Plazo de conservación</h2>
        <ul>
          <li>
            <strong>Solicitudes de contacto/diagnóstico que no den lugar a un contrato:</strong>{" "}
            hasta 2 años después del último contacto, salvo que solicite antes su supresión.
          </li>
          <li>
            <strong>Datos de clientes:</strong> durante la vigencia del contrato y, después, durante
            el plazo necesario para cumplir obligaciones legales (en particular, 10 años para
            documentos contables y fiscales) o para la defensa de derechos.
          </li>
          <li>
            <strong>Registros técnicos de acceso:</strong> durante el periodo definido por el
            proveedor de alojamiento, por motivos de seguridad.
          </li>
        </ul>

        <h2>7. Sus derechos</h2>
        <p>Conforme al RGPD, usted tiene derecho a:</p>
        <ul>
          <li>acceder a sus datos personales y obtener una copia;</li>
          <li>solicitar la rectificación de datos inexactos o incompletos;</li>
          <li>solicitar la supresión de sus datos («derecho al olvido»);</li>
          <li>solicitar la limitación del tratamiento;</li>
          <li>
            oponerse al tratamiento basado en el interés legítimo o con fines de marketing directo;
          </li>
          <li>recibir sus datos en un formato estructurado (portabilidad);</li>
          <li>
            retirar su consentimiento en cualquier momento, sin que ello afecte a la licitud del
            tratamiento anterior.
          </li>
        </ul>
        <p>
          Para ejercer cualquiera de estos derechos, envíe un correo a <EmailLink />. Responderemos
          en el plazo máximo de un mes, prorrogable en los términos legales. Podemos solicitarle
          información adicional para confirmar su identidad.
        </p>
        <p>
          También tiene derecho a presentar una reclamación ante la autoridad de control portuguesa,
          la Comissão Nacional de Proteção de Dados (CNPD) — <Ext href="https://www.cnpd.pt" />.
        </p>

        <h2>8. Seguridad</h2>
        <p>
          Adoptamos medidas técnicas y organizativas adecuadas para proteger sus datos contra la
          pérdida, el acceso no autorizado, la alteración o la divulgación, incluidas comunicaciones
          cifradas (HTTPS) y acceso restringido a la información. Ningún sistema es totalmente
          infalible, por lo que no podemos garantizar la seguridad absoluta de los datos
          transmitidos por Internet.
        </p>

        <h2>9. Menores</h2>
        <p>
          Nuestros servicios están dirigidos a empresas y profesionales. No recogemos
          intencionadamente datos de menores de 16 años.
        </p>

        <h2>10. Enlaces a sitios de terceros</h2>
        <p>
          El sitio contiene enlaces a redes sociales (Facebook, Instagram y WhatsApp) y a otros
          sitios web. Al seguirlos, se aplica la política de privacidad del operador
          correspondiente, de la que no somos responsables.
        </p>

        <h2>11. Cambios en esta política</h2>
        <p>
          Podemos actualizar esta Política de Privacidad para reflejar cambios legales o de nuestros
          servicios. La fecha de la última actualización figura en la parte superior de esta página.
          Le recomendamos consultarla periódicamente.
        </p>
        <p>
          Consulte también nuestros <Link to="/termos-de-utilizacao">Términos de Uso</Link>.
        </p>
      </>
    ),
  },
};
