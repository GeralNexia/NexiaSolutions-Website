/**
 * Navegação para secções da página inicial.
 * Se a secção existir na página atual faz scroll suave; caso contrário
 * (ex.: numa página legal) abre a página inicial já na secção pretendida.
 */
export function goToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    return;
  }
  window.location.assign(`/#${id}`);
}

/** Vai para o topo da página inicial. */
export function goHome() {
  if (window.location.pathname === "/") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  window.location.assign("/");
}

/** Na página inicial, faz scroll para a secção indicada no hash do URL (ex.: /#contacto). */
export function scrollToHashOnLoad() {
  const id = decodeURIComponent(window.location.hash.slice(1));
  if (!id) return;
  // Espera pelo render inicial antes de fazer scroll.
  window.setTimeout(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, 120);
}
