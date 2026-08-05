import { Hexagon, Mail, Phone, Facebook, Instagram, MessageCircle } from "lucide-react";

const groups = [
  {
    title: "Serviços",
    links: [
      { label: "Automação Empresarial", href: "#servicos" },
      { label: "Inteligência Artificial", href: "#servicos" },
      { label: "Software à Medida", href: "#servicos" },
      { label: "Integração de Sistemas", href: "#servicos" },
      { label: "Processamento de Documentos", href: "#demonstracao" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Como Trabalhamos", href: "#processo" },
      { label: "Sectores", href: "#sectores" },
      { label: "Casos de Utilização", href: "#servicos" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "geralnexia@gmail.com", href: "mailto:geralnexia@gmail.com" },
      { label: "+351 924 890 248", href: "tel:+351924890248" },
      { label: "Diagnóstico Gratuito", href: "#contacto" },
    ],
  },
];

const socials = [
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/351924890248" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="gradient-primary flex size-9 items-center justify-center rounded-xl">
                <Hexagon className="size-5 text-primary-foreground" strokeWidth={2.4} />
              </span>
              <span className="text-[17px] font-semibold tracking-tight">Nexia Solutions</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Transformamos empresas através da tecnologia: automação, Inteligência Artificial e
              software feito à medida.
            </p>
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
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <a
                href="mailto:geralnexia@gmail.com"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Mail className="size-4" /> geralnexia@gmail.com
              </a>
              <a href="tel:+351924890248" className="flex items-center gap-2 hover:text-primary">
                <Phone className="size-4" /> +351 924 890 248
              </a>
            </div>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="text-sm font-semibold">{g.title}</h3>
              <ul className="mt-4 space-y-3">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Nexia Solutions. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#contacto" className="text-xs text-muted-foreground hover:text-primary">
              Política de Privacidade
            </a>
            <a href="#contacto" className="text-xs text-muted-foreground hover:text-primary">
              Termos
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-primary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
