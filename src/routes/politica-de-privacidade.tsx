import { createFileRoute, Link } from "@tanstack/react-router";
import { CompanyIdentification, LegalLayout } from "@/components/site/LegalLayout";
import { company } from "@/lib/company";

export const Route = createFileRoute("/politica-de-privacidade")({
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Política de Privacidade"
      description="Saiba como a Nexia Solutions recolhe, utiliza e protege os seus dados pessoais, em conformidade com o RGPD."
    >
      <p>
        A {company.brand} respeita a sua privacidade e compromete-se a proteger os dados pessoais
        que nos confia. Esta Política de Privacidade explica que dados recolhemos através do site{" "}
        <a href={company.website}>{company.website.replace("https://", "")}</a>, para que fins, com
        que fundamento, durante quanto tempo os conservamos e quais os seus direitos, nos termos do
        Regulamento (UE) 2016/679 — Regulamento Geral sobre a Proteção de Dados (RGPD) — e da Lei
        n.º 58/2019, de 8 de agosto.
      </p>

      <h2>1. Responsável pelo tratamento</h2>
      <p>O responsável pelo tratamento dos seus dados pessoais é:</p>
      <CompanyIdentification />
      <p>
        Para qualquer questão relacionada com privacidade ou com o exercício dos seus direitos,
        contacte-nos através de <a href={`mailto:${company.email}`}>{company.email}</a>.
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
        Como qualquer site, o servidor de alojamento regista dados técnicos de acesso (endereço IP,
        data e hora, página pedida, tipo de navegador) para garantir o funcionamento e a segurança
        do serviço. Não utilizamos ferramentas de análise estatística, publicidade ou perfis de
        utilizador. Para mais detalhes, consulte a nossa{" "}
        <Link to="/politica-de-cookies">Política de Cookies</Link>.
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
              <td>
                Responder ao seu pedido de contacto ou diagnóstico e preparar uma proposta
              </td>
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
        Não tomamos decisões exclusivamente automatizadas nem definimos perfis que produzam efeitos
        jurídicos sobre si.
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
          <strong>Meta (WhatsApp)</strong> — apenas se optar por nos contactar através do WhatsApp;
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
          <strong>Pedidos de contacto/diagnóstico que não resultem em contrato:</strong> até 2 anos
          após o último contacto, salvo se pedir a eliminação antes.
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
        Para exercer qualquer destes direitos, envie um email para{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a>. Responderemos no prazo máximo de
        um mês, prorrogável nos termos legais. Poderemos pedir informação adicional para confirmar
        a sua identidade.
      </p>
      <p>
        Tem ainda o direito de apresentar reclamação à autoridade de controlo, a Comissão Nacional
        de Proteção de Dados (CNPD) — <a href="https://www.cnpd.pt" target="_blank" rel="noopener noreferrer">www.cnpd.pt</a>.
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
        Os nossos serviços destinam-se a empresas e profissionais. Não recolhemos
        intencionalmente dados de menores de 16 anos.
      </p>

      <h2>10. Ligações para sites de terceiros</h2>
      <p>
        O site contém ligações para redes sociais (Facebook, Instagram, WhatsApp, LinkedIn) e
        outros sites. Ao segui-las, passa a aplicar-se a política de privacidade do respetivo
        operador, pela qual não somos responsáveis.
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
    </LegalLayout>
  );
}
