import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Check, Globe, Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { handleSectionClick, sectionHref, useSectionLinks } from "@/lib/navigation";
import { languages, useI18n } from "@/i18n";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const linkIds = ["servicos", "processo", "setores", "faq", "contacto"] as const;

export function Navbar() {
  const { t, lang, setLang } = useI18n();
  const links = linkIds.map((id) => ({ id, label: t.nav.links[id] }));
  const currentLang = languages.find((l) => l.code === lang) ?? languages[0];
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("nexia-theme");
    const isDark = stored ? stored === "dark" : false;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("nexia-theme", next ? "dark" : "light");
  };

  const activeSection = useSectionLinks();

  const logoSrc = `${import.meta.env.BASE_URL}nexia-logo.png`;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass-panel shadow-soft" : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a
          href={sectionHref()}
          data-section-link onClick={handleSectionClick(undefined)}
          className="flex items-center gap-2.5 cursor-pointer"
          aria-label="Nexia Solutions"
        >
          <img
            src={logoSrc}
            alt="Nexia Solutions"
            className="h-8 w-auto rounded-lg"
            loading="eager"
          />
          <span className="text-[17px] font-semibold tracking-tight">
            Nexia <span className="text-muted-foreground font-normal">Solutions</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={sectionHref(l.id)}
              data-section-link onClick={handleSectionClick(l.id)}
              aria-current={activeSection === l.id ? "location" : undefined}
              className={cn(
                "rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent/60 hover:text-foreground",
                activeSection === l.id ? "text-foreground font-medium" : "text-muted-foreground",
              )}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1.5 px-2" aria-label={t.nav.language}>
                <Globe />
                <span className="text-xs font-medium">{currentLang.short}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-40">
              {languages.map((l) => (
                <DropdownMenuItem
                  key={l.code}
                  onSelect={() => setLang(l.code)}
                  className="cursor-pointer justify-between"
                  lang={l.code}
                >
                  {l.label}
                  {l.code === lang && <Check className="size-4 text-primary" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={t.nav.toggleTheme}
          >
            {dark ? <Sun /> : <Moon />}
          </Button>
          <Button variant="hero" className="hidden sm:inline-flex" asChild>
            <a href={sectionHref("contacto")} data-section-link onClick={handleSectionClick("contacto")}>
              {t.nav.cta}
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={t.nav.openMenu}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="glass-panel overflow-hidden lg:hidden"
        >
          <div className="flex flex-col p-4">
            {links.map((l) => (
              <a
                key={l.id}
                href={sectionHref(l.id)}
                data-section-link onClick={handleSectionClick(l.id, () => setOpen(false))}
                aria-current={activeSection === l.id ? "location" : undefined}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm hover:bg-accent/60 hover:text-foreground",
                  activeSection === l.id ? "text-foreground font-medium" : "text-muted-foreground",
                )}
              >
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}