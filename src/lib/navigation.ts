import { useEffect, useState, type MouseEvent } from "react";

/**
 * Navegação por secções da página inicial com links reais (ex.: /#servicos).
 * - Clicar num link faz scroll suave e atualiza o URL (botão "voltar" funciona).
 * - Ao fazer scroll, o URL acompanha a secção visível (sem criar histórico).
 * - Fora da página inicial, o link abre a página inicial já na secção.
 */

/** Secções da página inicial que têm link próprio, pela ordem em que aparecem. */
export const SECTION_IDS = [
  "problemas",
  "servicos",
  "processo",
  "porque-nexia",
  "resultados",
  "setores",
  "casos",
  "faq",
  "contacto",
] as const;

const isHome = () => window.location.pathname === "/";

/** URL de uma secção, mantendo parâmetros como ?lang=. */
export function sectionHref(id?: string) {
  const search = typeof window === "undefined" ? "" : window.location.search;
  return `/${search}${id ? `#${id}` : ""}`;
}

function setUrl(id: string | undefined, mode: "push" | "replace") {
  const url = sectionHref(id);
  if (url === window.location.pathname + window.location.search + window.location.hash) return;
  // Mantém o estado do router (TanStack) e impede-o de fazer o seu próprio scroll
  // para a secção — o scroll é controlado aqui (suave, ou pelo próprio utilizador).
  const state = { ...(window.history.state ?? {}), __hashScrollIntoViewOptions: false };
  if (mode === "push") window.history.pushState(state, "", url);
  else window.history.replaceState(state, "", url);
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
 * onClick para <a href="/#id">: faz scroll suave em vez de recarregar a página,
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

function scrollToHash(behavior: ScrollBehavior) {
  const id = decodeURIComponent(window.location.hash.slice(1));
  if (!id) {
    window.scrollTo({ top: 0, behavior });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior });
}

/** Na página inicial, faz scroll para a secção indicada no hash do URL (ex.: /#contacto). */
export function scrollToHashOnLoad() {
  if (!window.location.hash) return;
  // Espera pelo render inicial antes de fazer scroll.
  window.setTimeout(() => scrollToHash("smooth"), 120);
}

/**
 * Na página inicial: mantém o URL sincronizado com a secção visível e
 * reage ao botão "voltar/avançar" do browser. Devolve a secção ativa.
 */
export function useSectionLinks(enabled = true) {
  const [active, setActive] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!enabled || !isHome()) return;

    // Ao abrir um link direto (/#secao), esperar que o scroll inicial termine.
    let ignoreUntil = window.location.hash ? Date.now() + 1500 : 0;
    const onPop = () => {
      if (!isHome()) return;
      ignoreUntil = Date.now() + 1000;
      scrollToHash("smooth");
      setActive(window.location.hash.slice(1) || undefined);
    };
    window.addEventListener("popstate", onPop);

    let frame = 0;
    const update = () => {
      frame = 0;
      // Linha de referência a 35% da altura do ecrã.
      const line = window.innerHeight * 0.35;
      let current: string | undefined;
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      // No fim da página, a última secção fica ativa.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = SECTION_IDS[SECTION_IDS.length - 1];
      }
      setActive(current);
      // Durante um scroll iniciado por clique, não reescrever o URL a meio do caminho.
      if (Date.now() < ignoreUntil) return;
      const hash = window.location.hash.slice(1);
      if (hash !== (current ?? "")) setUrl(current, "replace");
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    // Cliques em links de secção: não atualizar o URL até o scroll suave terminar.
    const onClick = (e: Event) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a[href*='#']");
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
