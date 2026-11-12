import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";
import { company } from "@/lib/company";

export const Route = createFileRoute("/politica-de-cookies")({
  component: CookiePolicy,
});

function CookiePolicy() {
  return (
    <LegalLayout
      title="Política de Cookies"
      description="Informação sobre a utilização de cookies e tecnologias semelhantes no site da Nexia Solutions."
    >
      <p>
        Esta Política de Cookies explica que tecnologias de armazenamento são utilizadas no site
        da {company.brand}, nos termos da Lei n.º 41/2004, de 18 de agosto (na redação atual), e do
        RGPD.
      </p>

      <h2>1. O que são cookies?</h2>
      <p>
        Cookies são pequenos ficheiros de texto que um site guarda no seu dispositivo quando o
        visita. Tecnologias semelhantes, como o armazenamento local do navegador (
        <em>localStorage</em>), permitem guardar pequenas informações no seu dispositivo para que o
        site se lembre, por exemplo, das suas preferências.
      </p>

      <h2>2. Que cookies utilizamos?</h2>
      <p>
        <strong>
          O nosso site não utiliza cookies de análise estatística, de publicidade, de redes
          sociais ou de definição de perfis.
        </strong>{" "}
        Não instalamos cookies próprios nem de terceiros para seguir a sua navegação.
      </p>
      <p>
        Utilizamos apenas o armazenamento local do navegador para guardar uma preferência que
        escolhe:
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Finalidade</th>
              <th>Duração</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>nexia-theme</code>
              </td>
              <td>Armazenamento local (próprio) — funcional</td>
              <td>Lembrar se escolheu o modo claro ou escuro</td>
              <td>Até ser apagado pelo utilizador</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Este armazenamento é estritamente necessário para prestar uma funcionalidade pedida por si
        (o modo escuro) e não contém dados pessoais, pelo que, nos termos da lei, não depende de
        consentimento prévio. Só é criado se usar o botão de alternar o tema.
      </p>

      <h2>3. Serviços de terceiros</h2>
      <ul>
        <li>
          <strong>Alojamento (GitHub Pages):</strong> o servidor regista dados técnicos de acesso
          por motivos de segurança, mas não instala cookies no seu navegador.
        </li>
        <li>
          <strong>Formulário de contacto (Web3Forms):</strong> os dados só são enviados quando
          submete o formulário; não são instalados cookies.
        </li>
        <li>
          <strong>Redes sociais (Facebook, Instagram, WhatsApp, LinkedIn):</strong> o site contém
          apenas ligações simples. Nenhum conteúdo destas plataformas é carregado até clicar numa
          ligação; a partir desse momento, aplicam-se as políticas de cookies dessas plataformas.
        </li>
      </ul>

      <h2>4. Como gerir ou apagar cookies</h2>
      <p>
        Pode, a qualquer momento, apagar os cookies e o armazenamento local, ou bloqueá-los,
        através das definições do seu navegador:
      </p>
      <ul>
        <li>
          <a href="https://support.google.com/chrome/answer/95647?hl=pt" target="_blank" rel="noopener noreferrer">
            Google Chrome
          </a>
        </li>
        <li>
          <a href="https://support.mozilla.org/pt-PT/kb/limpar-cookies-e-dados-de-sites-no-firefox" target="_blank" rel="noopener noreferrer">
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a href="https://support.apple.com/pt-pt/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">
            Safari
          </a>
        </li>
        <li>
          <a href="https://support.microsoft.com/pt-pt/microsoft-edge" target="_blank" rel="noopener noreferrer">
            Microsoft Edge
          </a>
        </li>
      </ul>
      <p>
        Se apagar o armazenamento local, o site volta simplesmente ao tema predefinido.
      </p>

      <h2>5. Alterações</h2>
      <p>
        Caso passemos a utilizar outros cookies (por exemplo, de estatística), esta política será
        atualizada e, quando a lei o exigir, pediremos o seu consentimento prévio através de um
        aviso no site.
      </p>
      <p>
        Para mais informação sobre o tratamento dos seus dados, consulte a nossa{" "}
        <Link to="/politica-de-privacidade">Política de Privacidade</Link> ou contacte-nos através
        de <a href={`mailto:${company.email}`}>{company.email}</a>.
      </p>
    </LegalLayout>
  );
}
