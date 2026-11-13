import { useSyncExternalStore } from "react";

/**
 * Estado partilhado da intro de entrada: o hero só anima e o aviso de cookies
 * só aparece depois de a intro terminar. Em páginas sem intro, nada espera.
 */
// Começa "pendente" para que nada anime antes de se saber se há intro.
// Quem não tiver intro na página chama releaseIfNoIntro().
let pending = true;
let played = false;
const listeners = new Set<() => void>();

const emit = () => listeners.forEach((l) => l());

/** A intro só toca uma vez por carregamento do site (não ao navegar entre páginas). */
export function introAlreadyPlayed() {
  return played;
}

/** Liberta o hero / aviso de cookies quando a página atual não tem intro. */
export function releaseIfNoIntro() {
  if (pending && !document.querySelector("[data-site-intro]")) finishIntro();
}

export function finishIntro() {
  played = true;
  if (!pending) return;
  pending = false;
  emit();
}

const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => listeners.delete(l);
};

/** true enquanto a intro de entrada está visível. */
export function useIntroPending() {
  return useSyncExternalStore(
    subscribe,
    () => pending,
    () => true,
  );
}
