/**
 * Dados de identificação da empresa usados nas páginas legais.
 *
 * IMPORTANTE: preencha `legalName`, `nif` e `address` com os dados oficiais
 * (certidão permanente / registo de início de atividade). Os campos vazios
 * são simplesmente omitidos nas páginas.
 */
export const company = {
  brand: "Nexia Solutions",
  /** Denominação social ou nome do empresário em nome individual. */
  legalName: "",
  /** Número de Identificação Fiscal (NIF/NIPC). */
  nif: "246865113",
  /** Morada da sede / domicílio profissional. */
  address: "Rua de Angola, n.º 87, 4990-344 Ponte de Lima, Portugal",
  email: "geralnexia@gmail.com",
  phone: "+351 924 890 248",
  phoneHref: "tel:+351924890248",
  website: "https://www.nexiasolutions.pt",
  country: "Portugal",
  /** Data da última atualização dos documentos legais (AAAA-MM-DD). */
  legalLastUpdated: "2026-11-13",
} as const;

export const legalPages = [
  { to: "/politica-de-privacidade", label: "Política de Privacidade" },
  { to: "/termos-de-utilizacao", label: "Termos de Utilização" },
  { to: "/politica-de-cookies", label: "Política de Cookies" },
  { to: "/livro-de-reclamacoes", label: "Livro de Reclamações" },
] as const;

export const LIVRO_RECLAMACOES_URL = "https://www.livroreclamacoes.pt/Inicio/";
