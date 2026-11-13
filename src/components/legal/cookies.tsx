import { Link } from "@tanstack/react-router";
import { company } from "@/lib/company";
import { EmailLink, Ext, type LegalDocs } from "./shared";

const b = company.brand;

/** Ajuda dos navegadores para gerir cookies, por idioma. */
function BrowserLinks({ hl }: { hl: "pt" | "en" | "fr" | "es" }) {
  const region = { pt: "pt-pt", en: "en-us", fr: "fr-fr", es: "es-es" }[hl];
  return (
    <ul>
      <li>
        <Ext href={`https://support.google.com/chrome/answer/95647?hl=${hl}`}>Google Chrome</Ext>
      </li>
      <li>
        <Ext href="https://support.mozilla.org/kb/clear-cookies-and-site-data-firefox">
          Mozilla Firefox
        </Ext>
      </li>
      <li>
        <Ext href={`https://support.apple.com/${region}/guide/safari/sfri11471/mac`}>Safari</Ext>
      </li>
      <li>
        <Ext href={`https://support.microsoft.com/${region}/microsoft-edge`}>Microsoft Edge</Ext>
      </li>
    </ul>
  );
}

export const cookieDocs: LegalDocs = {
  pt: {
    title: "Política de Cookies",
    description:
      "Informação sobre a utilização de cookies e tecnologias semelhantes no site da Nexia Solutions.",
    body: () => (
      <>
        <p>
          Esta Política de Cookies explica que tecnologias de armazenamento são utilizadas no site
          da {b}, nos termos da Lei n.º 41/2004, de 18 de agosto (na redação atual), e do RGPD.
        </p>

        <h2>1. O que são cookies?</h2>
        <p>
          Cookies são pequenos ficheiros de texto que um site guarda no seu dispositivo quando o
          visita. Tecnologias semelhantes, como o armazenamento local do navegador (
          <em>localStorage</em>), permitem guardar pequenas informações no seu dispositivo para que
          o site se lembre, por exemplo, das suas preferências.
        </p>

        <h2>2. Que cookies utilizamos?</h2>
        <p>
          <strong>
            Atualmente, o nosso site não utiliza cookies de análise estatística, de publicidade, de
            redes sociais ou de definição de perfis.
          </strong>{" "}
          Não instalamos cookies próprios nem de terceiros para seguir a sua navegação.
        </p>
        <p>
          Utilizamos apenas o armazenamento local do navegador para guardar as preferências que
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
              <tr>
                <td>
                  <code>nexia-lang</code>
                </td>
                <td>Armazenamento local (próprio) — funcional</td>
                <td>Lembrar o idioma que escolheu (português, inglês, francês ou espanhol)</td>
                <td>Até ser apagado pelo utilizador</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Este armazenamento é estritamente necessário para prestar funcionalidades pedidas por si
          (o tema e o idioma) e não contém dados pessoais, pelo que, nos termos da lei, não depende
          de consentimento prévio. Cada preferência só é guardada quando muda o tema ou o idioma.
        </p>
        <p>
          O aviso de cookies apresentado ao abrir o site é meramente informativo e não guarda
          qualquer informação no seu dispositivo.
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
            <strong>Redes sociais (Facebook, Instagram e WhatsApp):</strong> o site contém apenas
            ligações simples. Nenhum conteúdo destas plataformas é carregado até clicar numa
            ligação; a partir desse momento, aplicam-se as políticas de cookies dessas plataformas.
          </li>
        </ul>

        <h2>4. Como gerir ou apagar cookies</h2>
        <p>
          Pode, a qualquer momento, apagar os cookies e o armazenamento local, ou bloqueá-los,
          através das definições do seu navegador:
        </p>
        <BrowserLinks hl="pt" />
        <p>
          Se apagar o armazenamento local, o site volta simplesmente ao tema predefinido e ao idioma
          do seu navegador.
        </p>

        <h2>5. Alterações</h2>
        <p>
          Caso passemos a utilizar outros cookies (por exemplo, de estatística), esta política será
          atualizada e, quando a lei o exigir, pediremos o seu consentimento prévio através de um
          aviso no site, que lhe permitirá aceitar ou recusar esses cookies.
        </p>
        <p>
          Para mais informação sobre o tratamento dos seus dados, consulte a nossa{" "}
          <Link to="/politica-de-privacidade">Política de Privacidade</Link> ou contacte-nos através
          de <EmailLink />.
        </p>
      </>
    ),
  },

  en: {
    title: "Cookie Policy",
    description:
      "Information on the use of cookies and similar technologies on the Nexia Solutions website.",
    body: () => (
      <>
        <p>
          This Cookie Policy explains which storage technologies are used on the {b} website, under
          Portuguese Law No. 41/2004 of 18 August (as amended) and the GDPR.
        </p>

        <h2>1. What are cookies?</h2>
        <p>
          Cookies are small text files that a website stores on your device when you visit it.
          Similar technologies, such as the browser's local storage (<em>localStorage</em>), allow
          small pieces of information to be stored on your device so that the website remembers, for
          example, your preferences.
        </p>

        <h2>2. Which cookies do we use?</h2>
        <p>
          <strong>
            Our website currently does not use analytics, advertising, social media or profiling
            cookies.
          </strong>{" "}
          We do not set first-party or third-party cookies to track your browsing.
        </p>
        <p>We only use the browser's local storage to save the preferences you choose:</p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Purpose</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>nexia-theme</code>
                </td>
                <td>Local storage (first-party) — functional</td>
                <td>Remember whether you chose light or dark mode</td>
                <td>Until deleted by the user</td>
              </tr>
              <tr>
                <td>
                  <code>nexia-lang</code>
                </td>
                <td>Local storage (first-party) — functional</td>
                <td>Remember the language you chose (Portuguese, English, French or Spanish)</td>
                <td>Until deleted by the user</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          This storage is strictly necessary to provide features you request (theme and language)
          and contains no personal data, so, under the law, it does not require prior consent. Each
          preference is only saved when you change the theme or the language.
        </p>
        <p>
          The cookie notice shown when you open the website is for information only and does not
          store anything on your device.
        </p>

        <h2>3. Third-party services</h2>
        <ul>
          <li>
            <strong>Hosting (GitHub Pages):</strong> the server logs technical access data for
            security reasons but does not set cookies in your browser.
          </li>
          <li>
            <strong>Contact form (Web3Forms):</strong> data is only sent when you submit the form;
            no cookies are set.
          </li>
          <li>
            <strong>Social networks (Facebook, Instagram and WhatsApp):</strong> the website only
            contains simple links. No content from these platforms is loaded until you click a link;
            from that point on, those platforms' cookie policies apply.
          </li>
        </ul>

        <h2>4. How to manage or delete cookies</h2>
        <p>
          You can delete or block cookies and local storage at any time through your browser
          settings:
        </p>
        <BrowserLinks hl="en" />
        <p>
          If you clear local storage, the website simply returns to the default theme and to your
          browser's language.
        </p>

        <h2>5. Changes</h2>
        <p>
          If we start using other cookies (for example, analytics cookies), this policy will be
          updated and, where required by law, we will ask for your prior consent through a notice on
          the website allowing you to accept or refuse those cookies.
        </p>
        <p>
          For more information on how we process your data, please see our{" "}
          <Link to="/politica-de-privacidade">Privacy Policy</Link> or contact us at <EmailLink />.
        </p>
      </>
    ),
  },

  fr: {
    title: "Politique de cookies",
    description:
      "Informations sur l'utilisation des cookies et technologies similaires sur le site de Nexia Solutions.",
    body: () => (
      <>
        <p>
          La présente Politique de cookies explique quelles technologies de stockage sont utilisées
          sur le site de {b}, conformément à la loi portugaise n.º 41/2004 du 18 août (dans sa
          version en vigueur) et au RGPD.
        </p>

        <h2>1. Que sont les cookies ?</h2>
        <p>
          Les cookies sont de petits fichiers texte qu'un site enregistre sur votre appareil lorsque
          vous le visitez. Des technologies similaires, comme le stockage local du navigateur (
          <em>localStorage</em>), permettent d'enregistrer de petites informations sur votre
          appareil afin que le site se souvienne, par exemple, de vos préférences.
        </p>

        <h2>2. Quels cookies utilisons-nous ?</h2>
        <p>
          <strong>
            Actuellement, notre site n'utilise aucun cookie de mesure d'audience, de publicité, de
            réseaux sociaux ou de profilage.
          </strong>{" "}
          Nous ne déposons aucun cookie, propre ou tiers, pour suivre votre navigation.
        </p>
        <p>
          Nous utilisons uniquement le stockage local du navigateur pour enregistrer les préférences
          que vous choisissez :
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Type</th>
                <th>Finalité</th>
                <th>Durée</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>nexia-theme</code>
                </td>
                <td>Stockage local (propre) — fonctionnel</td>
                <td>Mémoriser si vous avez choisi le mode clair ou sombre</td>
                <td>Jusqu'à sa suppression par l'utilisateur</td>
              </tr>
              <tr>
                <td>
                  <code>nexia-lang</code>
                </td>
                <td>Stockage local (propre) — fonctionnel</td>
                <td>Mémoriser la langue choisie (portugais, anglais, français ou espagnol)</td>
                <td>Jusqu'à sa suppression par l'utilisateur</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Ce stockage est strictement nécessaire pour fournir des fonctionnalités que vous demandez
          (thème et langue) et ne contient aucune donnée personnelle ; conformément à la loi, il ne
          nécessite donc pas de consentement préalable. Chaque préférence n'est enregistrée que
          lorsque vous changez de thème ou de langue.
        </p>
        <p>
          L'avis sur les cookies affiché à l'ouverture du site est purement informatif et
          n'enregistre aucune information sur votre appareil.
        </p>

        <h2>3. Services tiers</h2>
        <ul>
          <li>
            <strong>Hébergement (GitHub Pages) :</strong> le serveur enregistre des données
            techniques d'accès pour des raisons de sécurité, mais ne dépose pas de cookies dans
            votre navigateur.
          </li>
          <li>
            <strong>Formulaire de contact (Web3Forms) :</strong> les données ne sont envoyées que
            lorsque vous soumettez le formulaire ; aucun cookie n'est déposé.
          </li>
          <li>
            <strong>Réseaux sociaux (Facebook, Instagram et WhatsApp) :</strong> le site contient
            uniquement de simples liens. Aucun contenu de ces plateformes n'est chargé avant que
            vous ne cliquiez sur un lien ; à partir de ce moment, les politiques de cookies de ces
            plateformes s'appliquent.
          </li>
        </ul>

        <h2>4. Comment gérer ou supprimer les cookies</h2>
        <p>
          Vous pouvez à tout moment supprimer ou bloquer les cookies et le stockage local via les
          paramètres de votre navigateur :
        </p>
        <BrowserLinks hl="fr" />
        <p>
          Si vous effacez le stockage local, le site revient simplement au thème par défaut et à la
          langue de votre navigateur.
        </p>

        <h2>5. Modifications</h2>
        <p>
          Si nous commençons à utiliser d'autres cookies (par exemple, de mesure d'audience), cette
          politique sera mise à jour et, lorsque la loi l'exige, nous vous demanderons votre
          consentement préalable au moyen d'un avis sur le site vous permettant d'accepter ou de
          refuser ces cookies.
        </p>
        <p>
          Pour plus d'informations sur le traitement de vos données, consultez notre{" "}
          <Link to="/politica-de-privacidade">Politique de confidentialité</Link> ou contactez-nous
          à <EmailLink />.
        </p>
      </>
    ),
  },

  es: {
    title: "Política de Cookies",
    description:
      "Información sobre el uso de cookies y tecnologías similares en el sitio web de Nexia Solutions.",
    body: () => (
      <>
        <p>
          Esta Política de Cookies explica qué tecnologías de almacenamiento se utilizan en el sitio
          web de {b}, conforme a la Ley portuguesa n.º 41/2004, de 18 de agosto (en su redacción
          vigente), y al RGPD.
        </p>

        <h2>1. ¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que un sitio web guarda en su dispositivo
          cuando lo visita. Tecnologías similares, como el almacenamiento local del navegador (
          <em>localStorage</em>), permiten guardar pequeñas informaciones en su dispositivo para que
          el sitio recuerde, por ejemplo, sus preferencias.
        </p>

        <h2>2. ¿Qué cookies utilizamos?</h2>
        <p>
          <strong>
            Actualmente, nuestro sitio no utiliza cookies de analítica, publicidad, redes sociales
            ni elaboración de perfiles.
          </strong>{" "}
          No instalamos cookies propias ni de terceros para seguir su navegación.
        </p>
        <p>
          Solo utilizamos el almacenamiento local del navegador para guardar las preferencias que
          elija:
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Finalidad</th>
                <th>Duración</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>nexia-theme</code>
                </td>
                <td>Almacenamiento local (propio) — funcional</td>
                <td>Recordar si eligió el modo claro u oscuro</td>
                <td>Hasta que el usuario lo elimine</td>
              </tr>
              <tr>
                <td>
                  <code>nexia-lang</code>
                </td>
                <td>Almacenamiento local (propio) — funcional</td>
                <td>Recordar el idioma elegido (portugués, inglés, francés o español)</td>
                <td>Hasta que el usuario lo elimine</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Este almacenamiento es estrictamente necesario para prestar funcionalidades que usted
          solicita (tema e idioma) y no contiene datos personales, por lo que, conforme a la ley, no
          requiere consentimiento previo. Cada preferencia solo se guarda cuando cambia el tema o el
          idioma.
        </p>
        <p>
          El aviso de cookies que se muestra al abrir el sitio es meramente informativo y no guarda
          ninguna información en su dispositivo.
        </p>

        <h2>3. Servicios de terceros</h2>
        <ul>
          <li>
            <strong>Alojamiento (GitHub Pages):</strong> el servidor registra datos técnicos de
            acceso por motivos de seguridad, pero no instala cookies en su navegador.
          </li>
          <li>
            <strong>Formulario de contacto (Web3Forms):</strong> los datos solo se envían cuando
            envía el formulario; no se instalan cookies.
          </li>
          <li>
            <strong>Redes sociales (Facebook, Instagram y WhatsApp):</strong> el sitio solo contiene
            enlaces simples. No se carga ningún contenido de estas plataformas hasta que hace clic
            en un enlace; a partir de ese momento, se aplican las políticas de cookies de dichas
            plataformas.
          </li>
        </ul>

        <h2>4. Cómo gestionar o eliminar las cookies</h2>
        <p>
          Puede eliminar o bloquear las cookies y el almacenamiento local en cualquier momento a
          través de la configuración de su navegador:
        </p>
        <BrowserLinks hl="es" />
        <p>
          Si borra el almacenamiento local, el sitio vuelve simplemente al tema predeterminado y al
          idioma de su navegador.
        </p>

        <h2>5. Cambios</h2>
        <p>
          Si empezamos a utilizar otras cookies (por ejemplo, de analítica), esta política se
          actualizará y, cuando la ley lo exija, le pediremos su consentimiento previo mediante un
          aviso en el sitio que le permitirá aceptar o rechazar dichas cookies.
        </p>
        <p>
          Para más información sobre el tratamiento de sus datos, consulte nuestra{" "}
          <Link to="/politica-de-privacidade">Política de Privacidad</Link> o contáctenos en{" "}
          <EmailLink />.
        </p>
      </>
    ),
  },
};
