import { useEffect, useState, type MouseEvent } from "react";

/**
 * Navegação por secções da página inicial com URLs limpos (ex.: /servicos).
 * - Clicar num link faz scroll suave e atualiza o URL (botão "voltar" funciona).
 * - Ao fazer scroll, o URL acompanha a secção visível (sem criar histórico).
 * - Abrir /servicos diretamente (ou vindo de outra página) abre o site nessa secção.
 */

/** Secções da página inicial: id no HTML -> endereço público, pela ordem em que aparecem. */
export const SECTIONS = [
  { id: "problemas", slug: "problemas" },
  { id: "servicos", slug: "servicos" },
  { id: "antes-depois", slug: "antes-e-depois" },
  { id: "calculadora", slug: "calculadora" },
  { id: "processo", slug: "como-trabalhamos" },
  { id: "porque-nexia", slug: "porque-nexia" },
  { id: "resultados", slug: "resultados" },
  { id: "setores", slug: "setores" },
  { id: "casos", slug: "casos-de-utilizacao" },
  { id: "faq", slug: "faq" },
  { id: "contacto", slug: "contacto" },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];
export const SECTION_SLUGS: string[] = SECTIONS.map((s) => s.slug);

const slugToId = (slug: string) => SECTIONS.find((s) => s.slug === slug)?.id;
const idToSlug = (id: string) => SECTIONS.find((s) => s.id === id)?.slug ?? id;

/**
 * Métodos nativos do browser. O router (TanStack) substitui window.history.pushState/
 * replaceState para reagir a mudanças de URL e fazer scroll para o topo; dentro da
 * página inicial o scroll é controlado aqui, por isso usamos os métodos originais.
 */
const nativePush = History.prototype.pushState;
const nativeReplace = History.prototype.replaceState;

/** Secção indicada no URL atual (/servicos ou, por compatibilidade, /#servicos). */
export function currentSectionFromUrl(): string | undefined {
  const path = window.location.pathname.replace(/^\/+|\/+$/g, "");
  if (path) return slugToId(path);
  const hash = decodeURIComponent(window.location.hash.slice(1));
  return hash ? (slugToId(hash) ?? (SECTIONS.some((s) => s.id === hash) ? hash : undefined)) : undefined;
}

/** A página atual é a página inicial (/ ou /<secção>)? */
const isHome = () => {
  const path = window.location.pathname.replace(/^\/+|\/+$/g, "");
  return path === "" || SECTION_SLUGS.includes(path);
};

/** URL de uma secção, mantendo parâmetros como ?lang=. */
export function sectionHref(id?: string) {
  const search = typeof window === "undefined" ? "" : window.location.search;
  return `/${id ? idToSlug(id) : ""}${search}`;
}

function setUrl(id: string | undefined, mode: "push" | "replace") {
  const url = sectionHref(id);
  if (url === window.location.pathname + window.location.search && !window.location.hash) return;
  const fn = mode === "push" ? nativePush : nativeReplace;
  fn.call(window.history, window.history.state, "", url);
}

export function goToSection(id: string) {
  const element = document.getElementById(id);
  if (isHome() && element) {
    element.scrollIntoView({ behavior: "smooth" });
    setUrl(id, "push");
    return;
  }
  window.location.assign(sectionHref(id));
}

/** Vai para o topo da página inicial. */
export function goHome() {
  if (isHome()) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setUrl(undefined, "push");
    return;
  }
  window.location.assign(sectionHref());
}

/**
 * onClick para links de secção: faz scroll suave em vez de recarregar a página,
 * mas deixa o browser tratar Ctrl/Cmd+clique, clique do meio, etc. (abrir em novo separador).
 */
export function handleSectionClick(id: string | undefined, after?: () => void) {
  return (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }
    e.preventDefault();
    if (id) goToSection(id);
    else goHome();
    after?.();
  };
}

function scrollToCurrent(behavior: ScrollBehavior) {
  const id = currentSectionFromUrl();
  if (!id) {
    window.scrollTo({ top: 0, behavior });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior });
}

/**
 * Ao abrir a página inicial num endereço de secção (ex.: /contacto), posiciona a página
 * nessa secção. Links antigos com # (ex.: /#contacto) são convertidos para /contacto.
 */
export function scrollToSectionOnLoad() {
  const id = currentSectionFromUrl();
  if (!id) return;
  if (window.location.hash) setUrl(id, "replace");
  // Espera pelo render inicial antes de fazer scroll.
  window.setTimeout(() => scrollToCurrent("smooth"), 120);
}

/**
 * Na página inicial: mantém o URL sincronizado com a secção visível e
 * reage ao botão "voltar/avançar" do browser. Devolve a secção ativa.
 */
export function useSectionLinks(enabled = true) {
  const [active, setActive] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!enabled || !isHome()) return;

    // Ao abrir um link direto (/servicos), esperar que o scroll inicial termine.
    let ignoreUntil = currentSectionFromUrl() ? Date.now() + 1500 : 0;

    const onPop = () => {
      if (!isHome()) return;
      ignoreUntil = Date.now() + 1000;
      // Depois de o router processar o evento, posicionar na secção do URL.
      window.setTimeout(() => scrollToCurrent("smooth"), 0);
      setActive(currentSectionFromUrl());
    };
    window.addEventListener("popstate", onPop);

    let frame = 0;
    const update = () => {
      frame = 0;
      if (!isHome()) return;
      // Linha de referência a 35% da altura do ecrã.
      const line = window.innerHeight * 0.35;
      let current: string | undefined;
      for (const { id } of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      // No fim da página, a última secção fica ativa.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = SECTIONS[SECTIONS.length - 1].id;
      }
      setActive(current);
      // Durante um scroll iniciado por clique, não reescrever o URL a meio do caminho.
      if (Date.now() < ignoreUntil) return;
      if (currentSectionFromUrl() !== current) setUrl(current, "replace");
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    // Cliques em links de secção: não atualizar o URL até o scroll suave terminar.
    const onClick = (e: Event) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a[data-section-link]");
      if (a) ignoreUntil = Date.now() + 1000;
    };
    document.addEventListener("click", onClick, true);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scrollend", update);
    const initial = window.setTimeout(update, 400);

    return () => {
      window.removeEventListener("popstate", onPop);
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scrollend", update);
      window.clearTimeout(initial);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [enabled]);

  return active;
}
