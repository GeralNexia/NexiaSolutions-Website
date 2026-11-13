import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";
import { privacyDocs } from "@/components/legal/privacy";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/politica-de-privacidade")({
  component: PrivacyPolicy,
});

/** Documento legal no idioma do site (a versão portuguesa prevalece). */
function PrivacyPolicy() {
  const { lang } = useI18n();
  const doc = privacyDocs[lang];
  return (
    <LegalLayout title={doc.title} description={doc.description}>
      {doc.body()}
    </LegalLayout>
  );
}
