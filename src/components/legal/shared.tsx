import type { ReactNode } from "react";
import { company } from "@/lib/company";
import type { Lang } from "@/i18n";

/** Conteúdo de um documento legal num idioma. */
export type LegalDoc = { title: string; description: string; body: () => ReactNode };
export type LegalDocs = Record<Lang, LegalDoc>;

export const siteHost = company.website.replace("https://", "");

export const SiteLink = () => <a href={company.website}>{siteHost}</a>;
export const EmailLink = () => <a href={`mailto:${company.email}`}>{company.email}</a>;
export const PhoneLink = () => <a href={company.phoneHref}>{company.phone}</a>;

export function Ext({ href, children }: { href: string; children?: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children ?? href.replace(/^https:\/\//, "")}
    </a>
  );
}
