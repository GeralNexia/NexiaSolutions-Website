import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";
import { complaintsDocs } from "@/components/legal/complaints";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/livro-de-reclamacoes")({
  component: ComplaintsBook,
});

/** Documento legal no idioma do site (a versão portuguesa prevalece). */
function ComplaintsBook() {
  const { lang } = useI18n();
  const doc = complaintsDocs[lang];
  return (
    <LegalLayout title={doc.title} description={doc.description}>
      {doc.body()}
    </LegalLayout>
  );
}
