/**
 * Permite que outras secções (ex.: a calculadora) preencham o formulário de contacto
 * antes de levar o visitante até ele.
 */
export type ContactPrefill = { problema?: string; descricao?: string };

const EVENT = "nexia:contact-prefill";

export function prefillContact(data: ContactPrefill) {
  window.dispatchEvent(new CustomEvent<ContactPrefill>(EVENT, { detail: data }));
}

export function onContactPrefill(handler: (data: ContactPrefill) => void) {
  const listener = (e: Event) => handler((e as CustomEvent<ContactPrefill>).detail);
  window.addEventListener(EVENT, listener);
  return () => window.removeEventListener(EVENT, listener);
}
