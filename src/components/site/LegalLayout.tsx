import { useEffect, type ReactNode } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { company, legalPages } from "@/lib/company";
import { useI18n } from "@/i18n";

export function LegalLayout({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  const { t, lang } = useI18n();
  const { pathname } = useLocation();
  const pageTitle = t.legal.pages[pathname as keyof typeof t.legal.pages] ?? title;
  useEffect(() => {
    const previous = document.title;
    document.title = `${pageTitle} | ${company.brand}`;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = meta?.content;
    if (meta) meta.content = description;
    window.scrollTo(0, 0);
    return () => {
      document.title = previous;
      if (meta && previousDescription !== undefined) meta.content = previousDescription;
    };
  }, [pageTitle, description]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="relative overflow-hidden pt-28 pb-24 lg:pt-36">
        <div className="gradient-hero pointer-events-none absolute inset-x-0 top-0 h-96" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[220px_1fr] lg:px-8">
          <aside className="hidden lg:block">
            <nav aria-label={t.legal.info} className="sticky top-28 space-y-1">
              <p className="mb-3 px-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                {t.legal.info}
              </p>
              {legalPages.map((p) => (
                <Link
                  key={p.to}
                  to={p.to}
                  className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground"
                  activeProps={{ className: "bg-accent text-accent-foreground font-medium" }}
                >
                  {t.legal.pages[p.to]}
                </Link>
              ))}
            </nav>
          </aside>

          <article className="min-w-0">
            <Link
              to="/{-$section}" params={{ section: undefined }}
              className="flex w-fit items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-4" /> {t.legal.back}
            </Link>
            <span className="mt-6 inline-flex items-center rounded-full border border-border bg-accent/60 px-3 py-1 text-xs font-medium tracking-wide text-accent-foreground uppercase">
              {t.legal.info}
            </span>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {pageTitle}
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              {t.legal.lastUpdated}:{" "}
              {new Intl.DateTimeFormat(lang === "pt" ? "pt-PT" : lang, { dateStyle: "long" }).format(
                new Date(`${company.legalLastUpdated}T12:00:00`),
              )}
            </p>

            {lang !== "pt" && t.legal.ptOnlyNotice && (
              <p className="mt-6 rounded-2xl border border-primary/30 bg-accent/60 px-5 py-4 text-sm text-accent-foreground">
                {t.legal.ptOnlyNotice}
              </p>
            )}

            <div className="legal-prose mt-10 rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-10">
              {children}
            </div>

            <nav
              aria-label={t.legal.otherDocs}
              className="mt-10 flex flex-wrap gap-2 lg:hidden"
            >
              {legalPages.map((p) => (
                <Link
                  key={p.to}
                  to={p.to}
                  className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  activeProps={{ className: "border-primary/50 text-primary" }}
                >
                  {t.legal.pages[p.to]}
                </Link>
              ))}
            </nav>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}

/** Bloco de identificação do responsável, reutilizado nos documentos. */
export function CompanyIdentification() {
  const { t } = useI18n();
  const l = t.legal.identification;
  return (
    <ul>
      <li>
        <strong>{l.entity}:</strong> {company.legalName || company.brand}
        {company.legalName && company.legalName !== company.brand ? ` (${company.brand})` : ""}
      </li>
      {company.nif && (
        <li>
          <strong>{l.nif}:</strong> {company.nif}
        </li>
      )}
      {company.address && (
        <li>
          <strong>{l.address}:</strong> {company.address}
        </li>
      )}
      <li>
        <strong>{l.email}:</strong> <a href={`mailto:${company.email}`}>{company.email}</a>
      </li>
      <li>
        <strong>{l.phone}:</strong> <a href={company.phoneHref}>{company.phone}</a> {l.phoneNote}
      </li>
    </ul>
  );
}
