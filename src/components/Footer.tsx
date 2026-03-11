import { Instagram, MessageCircle } from "lucide-react";
import nexiaLogo from "@/assets/nexia-logo.png";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/40 py-12 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <img
            src={nexiaLogo}
            alt="Nexia Solutions"
            className="h-16 w-auto brightness-110 drop-shadow-[0_0_12px_hsl(215_80%_58%/0.3)]"
            style={{ mixBlendMode: "screen" }}
          />
        </div>
        <div className="flex flex-wrap justify-center gap-5 sm:gap-8 text-sm text-muted-foreground">
          <a href="#home" className="hover:text-foreground transition-colors duration-300">{t.footer.home}</a>
          <a href="#about" className="hover:text-foreground transition-colors duration-300">{t.footer.about}</a>
          <a href="#services" className="hover:text-foreground transition-colors duration-300">{t.footer.services}</a>
          <a href="#contact" className="hover:text-foreground transition-colors duration-300">{t.footer.contact}</a>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/nexia__solutions/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://wa.me/351924890248"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="WhatsApp"
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-6 border-t border-border/20 text-center">
        <p className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Nexia Solutions. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
