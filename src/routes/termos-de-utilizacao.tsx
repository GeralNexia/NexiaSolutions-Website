import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";
import { termsDocs } from "@/components/legal/terms";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/termos-de-utilizacao")({
  component: TermsOfUse,
});

/** Documento legal no idioma do site (a versão portuguesa prevalece). */
function TermsOfUse() {
  const { lang } = useI18n();
  const doc = termsDocs[lang];
  return (
    <LegalLayout title={doc.title} description={doc.description}>
      {doc.body()}
    </LegalLayout>
  );
}
