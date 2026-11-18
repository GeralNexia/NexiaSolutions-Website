import { useI18n } from "@/i18n";
import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MessageCircle, Mail, Phone } from "lucide-react";
import { company, legalPages, LIVRO_RECLAMACOES_URL } from "@/lib/company";
import { handleSectionClick, sectionHref } from "@/lib/navigation";

const groupIds = [
  ["servicos", "servicos", "servicos", "servicos", "websites"],
  ["processo", "setores", "casos", "faq"],
];

const socials = [
  { 
    icon: Facebook, 
    label: "Facebook", 
    href: "https://www.facebook.com/profile.php?viewas=100000686899395&id=61593294254599&locale=pt_PT" 
  },
  { 
    icon: Instagram, 
    label: "Instagram", 
    href: "https://www.instagram.com/nexia__solutions?stkn=MTQ2M2Y2Zml5a2R0NQ==" 
  },
  { 
    icon: MessageCircle, 
    label: "WhatsApp", 
    href: "https://wa.me/351924890248" 
  },
];

export function Footer() {
  const { t } = useI18n();
  const groups = [
    { title: t.footer.servicesTitle, links: t.footer.services.map((label, i) => ({ label, id: groupIds[0][i] })) },
    { title: t.footer.companyTitle, links: t.footer.company.map((label, i) => ({ label, id: groupIds[1][i] })) },
  ];
  const logoSrc = `${import.meta.env.BASE_URL}nexia-logo.png`;


  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <a
              href={sectionHref()}
              data-section-link onClick={handleSectionClick(undefined)}
              className="flex w-fit items-center gap-2.5 cursor-pointer"
            >
              <img
                src={logoSrc}
                alt="Nexia Solutions"
                className="h-8 w-auto rounded-lg"
                loading="lazy"
              />
              <span className="text-[17px] font-semibold tracking-tight">Nexia Solutions</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t.footer.tagline}
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a
                href="mailto:geralnexia@gmail.com"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="size-4" />
                geralnexia@gmail.com
              </a>
              <a
                href="tel:+351924890248"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="size-4" />
                +351 924 890 248
              </a>
            </div>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex size-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                >
                  <s.icon className="size-4.5" />
                </a>
              ))}
            </div>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="text-sm font-semibold">{g.title}</h3>
              <ul className="mt-4 space-y-3">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={sectionHref(l.id)}
                      data-section-link onClick={handleSectionClick(l.id)}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold">{t.footer.legalTitle}</h3>
            <ul className="mt-4 space-y-3">
              {legalPages.map((p) => (
                <li key={p.to}>
                  <Link
                    to={p.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {t.legal.pages[p.to]}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={LIVRO_RECLAMACOES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              {t.footer.complaintsBook}
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Nexia Solutions. {t.footer.rights}
            {company.nif && (
              <>
                {" "}
                · {t.footer.nif} {company.nif}
              </>
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link to="/politica-de-privacidade" className="text-xs text-muted-foreground hover:text-primary">
              {t.footer.privacy}
            </Link>
            <Link to="/termos-de-utilizacao" className="text-xs text-muted-foreground hover:text-primary">
              {t.footer.terms}
            </Link>
            <Link to="/politica-de-cookies" className="text-xs text-muted-foreground hover:text-primary">
              {t.footer.cookies}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}