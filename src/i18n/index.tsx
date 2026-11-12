import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { pt, type Dictionary } from "./pt";
import { en } from "./en";
import { fr } from "./fr";
import { es } from "./es";

export const languages = [
  { code: "pt", label: "Português", short: "PT" },
  { code: "en", label: "English", short: "EN" },
  { code: "fr", label: "Français", short: "FR" },
  { code: "es", label: "Español", short: "ES" },
] as const;

export type Lang = (typeof languages)[number]["code"];

const dictionaries: Record<Lang, Dictionary> = { pt, en, fr, es };
const STORAGE_KEY = "nexia-lang";

function isLang(value: unknown): value is Lang {
  return typeof value === "string" && value in dictionaries;
}

/** Idioma inicial: ?lang= no URL > escolha guardada > idioma do navegador > português. */
function detectLang(): Lang {
  if (typeof window === "undefined") return "pt";
  try {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (isLang(fromUrl)) return fromUrl;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isLang(stored)) return stored;
  } catch {
    /* armazenamento indisponível */
  }
  for (const l of navigator.languages ?? [navigator.language]) {
    const code = l?.slice(0, 2).toLowerCase();
    if (isLang(code)) return code;
  }
  return "pt";
}

type I18nValue = { lang: Lang; setLang: (lang: Lang) => void; t: Dictionary };

const I18nContext = createContext<I18nValue>({ lang: "pt", setLang: () => {}, t: pt });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignorar */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-PT" : lang;
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
