import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import nexiaLogo from "@/assets/nexia-logo.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#process", label: t.nav.process },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-2xl border-b border-border/40 shadow-2xl shadow-background/30"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-2 sm:py-3 px-4 sm:px-6">
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src={nexiaLogo}
            alt="Nexia Solutions"
            className="h-16 md:h-20 w-auto transition-transform duration-300 group-hover:scale-105 brightness-110 drop-shadow-[0_0_12px_hsl(215_80%_58%/0.3)]"
            style={{ mixBlendMode: "screen" }}
          />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground px-4 py-2.5 rounded-xl hover:bg-muted/40 transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
          <LanguageSwitcher />
          <a
            href="#contact"
            className="ml-4 gradient-bg px-7 py-2.5 rounded-xl text-sm font-bold text-primary-foreground hover:opacity-90 transition-all duration-300 glow-primary"
          >
            {t.nav.cta}
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-1 md:hidden">
          <LanguageSwitcher />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground p-2.5 rounded-xl hover:bg-muted/40 transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card/95 backdrop-blur-2xl border-t border-border/30"
          >
            <div className="container mx-auto py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground px-4 py-3.5 rounded-xl hover:bg-muted/40 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="gradient-bg px-5 py-3.5 rounded-xl text-sm font-bold text-primary-foreground text-center mt-3 glow-primary"
              >
                {t.nav.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
