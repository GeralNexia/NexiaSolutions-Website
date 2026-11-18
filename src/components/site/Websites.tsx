import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import {
  ArrowRight,
  Gauge,
  Globe2,
  Languages,
  Mail,
  Palette,
  Send,
  Smartphone,
  Sparkles,
  UserPlus,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { useI18n } from "@/i18n";
import { goToSection } from "@/lib/navigation";
import { prefillContact } from "@/lib/contact-prefill";

const featureIcons = [Palette, Gauge, Globe2, Smartphone, Languages, Workflow];
const notificationIcons = [Mail, UserPlus, Send];

/**
 * Secção dedicada aos websites. Fundo escuro para se destacar do resto da página;
 * o mockup mostra um site a gerar contactos que entram logo nas automações.
 */
export function Websites() {
  const { t } = useI18n();
  const w = t.websites;

  const onCta = () => {
    prefillContact({ problema: w.prefillProblem });
    goToSection("contacto");
  };

  return (
    <section
      id="websites"
      className="relative overflow-hidden bg-[image:var(--gradient-navy)] py-24 text-white lg:py-32"
    >
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-[0.07] invert" />
      <div className="pointer-events-none absolute -top-40 -right-40 size-[36rem] rounded-full bg-primary/30 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-48 -left-40 size-[30rem] rounded-full bg-primary-glow/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-[1fr_1.1fr] lg:px-8">
        <div>
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-white/90 uppercase">
              {w.eyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {w.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">{w.description}</p>
          </Reveal>

          <div className="mt-10 grid gap-x-6 gap-y-6 sm:grid-cols-2">
            {w.features.map((f, i) => {
              const Icon = featureIcons[i];
              return (
                <Reveal key={f.title} delay={i * 0.06}>
                  <div className="flex gap-3.5">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10">
                      <Icon className="size-4.5 text-primary-glow" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold">{f.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/60">{f.text}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.2} className="mt-10">
            <Button variant="hero" size="xl" onClick={onCta}>
              {w.cta} <ArrowRight />
            </Button>
            <p className="mt-4 flex items-start gap-2 text-sm text-white/60">
              <Sparkles className="mt-0.5 size-4 shrink-0 text-primary-glow" />
              {w.showcaseNote}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <DeviceMockup />
        </Reveal>
      </div>
    </section>
  );
}

function DeviceMockup() {
  const { t } = useI18n();
  const w = t.websites;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-100px" });
  // Quantas notificações estão visíveis (0 → 3, e recomeça).
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const id = window.setInterval(
      () => setShown((n) => (n >= w.notifications.length ? 0 : n + 1)),
      1600,
    );
    return () => window.clearInterval(id);
  }, [inView, w.notifications.length]);

  return (
    <div ref={ref} className="relative pb-10 sm:pr-10" aria-hidden>
      {/* Computador */}
      <div className="rounded-2xl border border-white/15 bg-white/5 p-2 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] backdrop-blur">
        <div className="overflow-hidden rounded-xl bg-white text-slate-900">
          <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-3 py-2">
            <span className="size-2 rounded-full bg-red-400" />
            <span className="size-2 rounded-full bg-amber-400" />
            <span className="size-2 rounded-full bg-emerald-400" />
            <span className="ml-3 truncate rounded-md bg-white px-2.5 py-0.5 font-mono text-[10px] text-slate-500 ring-1 ring-slate-200">
              {w.mockUrl}
            </span>
          </div>
          <div className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <span className="gradient-primary size-5 rounded-md" />
              <div className="hidden gap-3 sm:flex">
                {[0, 1, 2].map((i) => (
                  <span key={i} className="h-1.5 w-9 rounded-full bg-slate-200" />
                ))}
              </div>
              <span className="h-5 w-14 rounded-md bg-slate-900" />
            </div>
            <div className="mt-6 grid grid-cols-[1.2fr_1fr] items-center gap-4">
              <div>
                <p className="text-base leading-tight font-semibold tracking-tight sm:text-xl">
                  {w.mockTitle}
                </p>
                <span className="mt-3 block h-1.5 w-full rounded-full bg-slate-200" />
                <span className="mt-1.5 block h-1.5 w-4/5 rounded-full bg-slate-200" />
                <motion.span
                  className="gradient-primary mt-4 inline-flex rounded-md px-3 py-1.5 text-[10px] font-semibold text-white sm:text-xs"
                  animate={inView ? { scale: [1, 1.06, 1] } : undefined}
                  transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 0.4 }}
                >
                  {w.mockCta}
                </motion.span>
              </div>
              <div className="gradient-primary relative aspect-[4/3] overflow-hidden rounded-lg">
                <div className="absolute inset-x-3 bottom-3 h-1/3 rounded-md bg-white/25" />
                <div className="absolute top-3 right-3 size-6 rounded-full bg-white/40" />
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded-lg border border-slate-200 p-2.5">
                  <span className="block size-4 rounded bg-blue-100" />
                  <span className="mt-2 block h-1.5 w-4/5 rounded-full bg-slate-200" />
                  <span className="mt-1 block h-1.5 w-3/5 rounded-full bg-slate-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Telemóvel */}
      <div className="absolute right-0 bottom-0 w-[28%] min-w-[96px] rounded-[1.4rem] border-[5px] border-slate-800 bg-white p-2 text-slate-900 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)]">
        <span className="mx-auto block h-1 w-8 rounded-full bg-slate-300" />
        <span className="gradient-primary mt-2 block aspect-[4/3] rounded-md" />
        <span className="mt-2 block h-1.5 w-full rounded-full bg-slate-200" />
        <span className="mt-1 block h-1.5 w-2/3 rounded-full bg-slate-200" />
        <span className="gradient-primary mt-2 block h-4 w-full rounded-md" />
        <span className="mt-2 block h-6 w-full rounded-md border border-slate-200" />
      </div>

      {/* Notificações: o contacto do site a entrar nas automações */}
      <div className="absolute top-14 -left-2 w-[62%] max-w-64 space-y-2 sm:-left-8">
        <AnimatePresence>
          {w.notifications.slice(0, shown).map((n, i) => {
            const Icon = notificationIcons[i];
            return (
              <motion.div
                key={n}
                layout
                initial={{ opacity: 0, x: -24, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -12, transition: { duration: 0.25 } }}
                transition={{ type: "spring", stiffness: 320, damping: 26 }}
                className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white/95 p-2.5 text-slate-900 shadow-[0_16px_40px_-16px_rgba(15,23,42,0.5)] backdrop-blur"
              >
                <span className="gradient-primary flex size-7 shrink-0 items-center justify-center rounded-lg text-white">
                  <Icon className="size-3.5" />
                </span>
                <span className="text-xs leading-snug font-medium">{n}</span>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
