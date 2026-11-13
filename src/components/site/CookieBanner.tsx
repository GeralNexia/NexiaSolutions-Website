import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Cookie, X } from "lucide-react";
import { useI18n } from "@/i18n";
import { releaseIfNoIntro, useIntroPending } from "@/lib/intro";

/**
 * Aviso de cookies no rodapé. Aparece sempre que o site é aberto (não fica
 * guardado), depois da intro de entrada; fecha com "Aceitar" ou com a cruz e
 * mantém-se fechado enquanto a pessoa navega entre páginas.
 */
export function CookieBanner() {
  const { t } = useI18n();
  const introPending = useIntroPending();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setMounted(true);
    releaseIfNoIntro();
  }, []);

  const show = mounted && open && !introPending;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="region"
          aria-label={t.cookieBanner.label}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0, transition: { duration: 0.3 } }}
          transition={{ duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-5"
        >
          <div className="glass-panel relative mx-auto flex max-w-5xl !bg-background/95 flex-col gap-4 rounded-2xl p-4 pr-11 shadow-elegant sm:flex-row sm:items-center sm:gap-6 sm:p-5 sm:pr-14">
            <span className="gradient-primary hidden size-10 shrink-0 items-center justify-center rounded-xl sm:flex">
              <Cookie className="size-5 text-primary-foreground" />
            </span>
            <p className="text-sm leading-relaxed text-muted-foreground">{t.cookieBanner.text}</p>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="gradient-primary inline-flex h-10 flex-1 items-center justify-center rounded-lg px-5 text-sm font-medium text-primary-foreground shadow-elegant transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 sm:flex-none"
              >
                {t.cookieBanner.accept}
              </button>
              <Link
                to="/politica-de-cookies"
                className="inline-flex h-10 flex-1 items-center justify-center rounded-lg border border-border bg-background/60 px-5 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary sm:flex-none"
              >
                {t.cookieBanner.more}
              </Link>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t.cookieBanner.close}
              className="absolute top-3 right-3 inline-flex size-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
