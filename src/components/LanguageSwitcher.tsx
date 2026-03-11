import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { type Language, languageNames, languageFlags } from "@/i18n/translations";

const languages: Language[] = ["pt", "en", "de", "fr", "es"];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground px-3 py-2 rounded-xl hover:bg-muted/40 transition-all duration-300 text-sm"
        aria-label="Change language"
      >
        <Globe size={16} />
        <span className="hidden sm:inline">{languageFlags[language]}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 bg-card/95 backdrop-blur-2xl border border-border/40 rounded-xl shadow-2xl shadow-background/50 overflow-hidden min-w-[160px] z-50">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => {
                setLanguage(lang);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-all duration-200 hover:bg-muted/40 ${
                language === lang
                  ? "text-primary font-semibold bg-primary/5"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="text-base">{languageFlags[lang]}</span>
              <span>{languageNames[lang]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
