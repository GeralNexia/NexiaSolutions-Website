/**
 * Dados estruturados (schema.org) para o Google: identificação da empresa,
 * serviços e perguntas frequentes. São escritos diretamente no index.html
 * durante a build (ver vite.config.ts), para não dependerem de JavaScript.
 *
 * Usa imports relativos porque também é carregado pelo vite.config.ts.
 */
import { pt } from "../i18n/pt";
import { company } from "./company";

export function structuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: company.brand,
    url: company.website,
    logo: `${company.website}/nexia-logo.png`,
    image: `${company.website}/nexia-logo.png`,
    description: pt.meta.description,
    email: company.email,
    telephone: company.phoneHref.replace("tel:", ""),
    areaServed: "PT",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua de Angola, n.º 87",
      postalCode: "4990-344",
      addressLocality: "Ponte de Lima",
      addressRegion: "Viana do Castelo",
      addressCountry: "PT",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: pt.services.eyebrow,
      itemListElement: [pt.services.consulting, pt.services.automation, pt.services.web].map(
        (s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, description: s.text },
        }),
      ),
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=61593294254599",
      "https://www.instagram.com/nexia__solutions",
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pt.faq.items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return [organization, faq];
}
