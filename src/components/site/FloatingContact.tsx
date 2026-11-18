import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useI18n } from "@/i18n";
import { handleSectionClick, sectionHref } from "@/lib/navigation";

const WHATSAPP_NUMBER = "351924890248";

/**
 * Contacto sempre à mão depois do hero:
 * - computador: botão redondo do WhatsApp no canto inferior direito;
 * - telemóvel: barra fixa com "Diagnóstico Gratuito" + WhatsApp.
 * Esconde-se quando a secção de contacto ou o rodapé estão visíveis.
 */
export function FloatingContact() {
  const { t } = useI18n();
  const [pastHero, setPastHero] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const targets = [document.getElementById("contacto"), document.querySelector("footer")].filter(
      (el): el is HTMLElement => el !== null,
    );
    const visible = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target);
          else visible.delete(e.target);
        }
        setContactVisible(visible.size > 0);
      },
      { threshold: 0.05 },
    );
    targets.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const show = pastHero && !contactVisible;
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.floating.whatsappMessage)}`;

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Computador */}
          <motion.a
            key="wa-desktop"
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.floating.whatsapp}
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="group fixed right-6 bottom-6 z-50 hidden items-center gap-3 md:flex"
          >
            <span className="pointer-events-none rounded-xl border border-border bg-background/95 px-3 py-2 text-sm font-medium opacity-0 shadow-soft transition-all duration-300 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0">
              {t.floating.whatsapp}
            </span>
            <span className="relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant transition-transform duration-300 group-hover:scale-105">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-25" />
              <MessageCircle className="relative size-6" />
            </span>
          </motion.a>

          {/* Telemóvel */}
          <motion.div
            key="bar-mobile"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden"
          >
            <div className="flex gap-2">
              <a
                href={sectionHref("contacto")}
                data-section-link
                onClick={handleSectionClick("contacto")}
                className="gradient-primary flex h-12 flex-1 items-center justify-center gap-2 rounded-xl text-sm font-semibold text-primary-foreground shadow-elegant"
              >
                {t.nav.cta} <ArrowRight className="size-4" />
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.floating.whatsapp}
                className="flex size-12 items-center justify-center rounded-xl bg-[#25D366] text-white"
              >
                <MessageCircle className="size-5" />
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
