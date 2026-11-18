import { createFileRoute, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Problems } from "@/components/site/Problems";
import { Services } from "@/components/site/Services";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { SavingsCalculator } from "@/components/site/SavingsCalculator";
import { Process } from "@/components/site/Process";
import { WhyUs } from "@/components/site/WhyUs";
import { Stats } from "@/components/site/Stats";
import { Sectors } from "@/components/site/Sectors";
import { UseCases } from "@/components/site/UseCases";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { SiteIntro } from "@/components/site/SiteIntro";
import { FloatingContact } from "@/components/site/FloatingContact";
import { useEffect } from "react";
import { SECTION_SLUGS, scrollToSectionOnLoad } from "@/lib/navigation";
import { useI18n } from "@/i18n";

const description =
  "Consultoria e melhoria de processos, automação com Inteligência Artificial e websites de excelência para empresas que querem trabalhar melhor e crescer.";

/**
 * Página inicial. Responde em "/" e nos endereços de cada secção
 * (ex.: /servicos, /contacto), abrindo a página já na secção pedida.
 */
export const Route = createFileRoute("/{-$section}")({
  beforeLoad: ({ params }) => {
    if (params.section && !SECTION_SLUGS.includes(params.section)) throw notFound();
  },
  head: () => ({
    meta: [
      { title: "Nexia Solutions | Consultoria, Automação de Processos e Websites" },
      { name: "description", content: description },
      {
        property: "og:title",
        content: "Nexia Solutions | Consultoria, Automação de Processos e Websites",
      },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Nexia Solutions",
          description,
          email: "geralnexia@gmail.com",
          telephone: "+351924890248",
          areaServed: "PT",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua de Angola, n.º 87",
            postalCode: "4990-344",
            addressLocality: "Ponte de Lima",
            addressRegion: "Viana do Castelo",
            addressCountry: "PT",
          },
          sameAs: [
            "https://www.facebook.com/profile.php?id=61593294254599",
            "https://www.instagram.com/nexia__solutions",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useI18n();

  useEffect(() => {
    scrollToSectionOnLoad();
  }, []);

  useEffect(() => {
    document.title = t.meta.title;
    document
      .querySelector<HTMLMetaElement>('meta[name="description"]')
      ?.setAttribute("content", t.meta.description);
  }, [t]);

  return (
    <div className="min-h-screen bg-background">
      <SiteIntro />
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Services />
        <BeforeAfter />
        <SavingsCalculator />
        <Process />

        <WhyUs />
        <Stats />
        <Sectors />
        <UseCases />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
