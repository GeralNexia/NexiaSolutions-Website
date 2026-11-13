import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";
import { cookieDocs } from "@/components/legal/cookies";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/politica-de-cookies")({
  component: CookiePolicy,
});

/** Documento legal no idioma do site (a versão portuguesa prevalece). */
function CookiePolicy() {
  const { lang } = useI18n();
  const doc = cookieDocs[lang];
  return (
    <LegalLayout title={doc.title} description={doc.description}>
      {doc.body()}
    </LegalLayout>
  );
}
