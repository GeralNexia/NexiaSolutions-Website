import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Problems } from "@/components/site/Problems";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { WhyUs } from "@/components/site/WhyUs";
import { Stats } from "@/components/site/Stats";
import { Sectors } from "@/components/site/Sectors";
import { UseCases } from "@/components/site/UseCases";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { useEffect } from "react";
import { scrollToHashOnLoad } from "@/lib/navigation";
import { useI18n } from "@/i18n";

const description =
  "Automação de processos, Inteligência Artificial, software à medida e integração de sistemas para reduzir custos e eliminar tarefas repetitivas.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexia Solutions | Automação de Processos e IA para Empresas" },
      { name: "description", content: description },
      {
        property: "og:title",
        content: "Nexia Solutions | Automação de Processos e IA para Empresas",
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
    scrollToHashOnLoad();
  }, []);

  useEffect(() => {
    document.title = t.meta.title;
    document
      .querySelector<HTMLMetaElement>('meta[name="description"]')
      ?.setAttribute("content", t.meta.description);
  }, [t]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Services />
        <Process />

        <WhyUs />
        <Stats />
        <Sectors />
        <UseCases />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
