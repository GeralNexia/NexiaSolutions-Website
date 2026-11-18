import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { Clock, Hand, Sparkles, Zap } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

type Mode = "manual" | "auto";

/**
 * Comparação interativa: o mesmo processo (uma fatura recebida por email)
 * feito à mão e com automação. Alterna sozinho até o visitante escolher.
 */
export function BeforeAfter() {
  const { t } = useI18n();
  const b = t.beforeAfter;
  const [mode, setMode] = useState<Mode>("manual");
  const [touched, setTouched] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-120px" });

  useEffect(() => {
    if (touched || !inView) return;
    const id = window.setInterval(() => setMode((m) => (m === "manual" ? "auto" : "manual")), 6500);
    return () => window.clearInterval(id);
  }, [touched, inView]);

  const choose = (m: Mode) => {
    setTouched(true);
    setMode(m);
  };

  const auto = mode === "auto";
  const steps = auto ? b.autoSteps : b.manualSteps;
  const metrics = auto ? b.autoMetrics : b.manualMetrics;

  return (
    <section id="antes-depois" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow={b.eyebrow} title={b.title} description={b.description} />

        <Reveal className="mt-10 flex justify-center">
          <div
            role="tablist"
            aria-label={b.eyebrow}
            className="relative inline-grid grid-cols-2 rounded-full border border-border bg-card p-1 shadow-soft"
          >
            {(["manual", "auto"] as const).map((m) => (
              <button
                key={m}
                role="tab"
                aria-selected={mode === m}
                onClick={() => choose(m)}
                className={cn(
                  "relative z-10 flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors sm:px-6",
                  mode === m
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {mode === m && (
                  <motion.span
                    layoutId="ba-pill"
                    className={cn(
                      "absolute inset-0 -z-10 rounded-full",
                      m === "auto" ? "gradient-primary" : "bg-foreground/80",
                    )}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {m === "auto" ? <Zap className="size-4" /> : <Hand className="size-4" />}
                {m === "auto" ? b.autoLabel : b.manualLabel}
              </button>
            ))}
          </div>
        </Reveal>

        <div ref={ref} className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Passos do processo */}
          <div
            className={cn(
              "relative overflow-hidden rounded-3xl border bg-card p-6 transition-colors duration-500 sm:p-8",
              auto ? "border-primary/40 shadow-elegant" : "border-border shadow-soft",
            )}
          >
            {auto && <div className="gradient-hero pointer-events-none absolute inset-0" />}
            <AnimatePresence mode="wait">
              <motion.ol
                key={mode}
                className="relative space-y-3"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  visible: { transition: { staggerChildren: auto ? 0.12 : 0.18 } },
                  exit: { opacity: 0, transition: { duration: 0.2 } },
                }}
              >
                {steps.map((step, i) => (
                  <motion.li
                    key={step}
                    variants={{
                      hidden: { opacity: 0, x: auto ? 16 : -16 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className={cn(
                      "flex items-center gap-4 rounded-2xl border px-4 py-3",
                      auto ? "border-primary/20 bg-card/80" : "border-border bg-surface",
                    )}
                  >
                    <span
                      className={cn(
                        "flex size-8 shrink-0 items-center justify-center rounded-lg text-xs font-semibold",
                        auto
                          ? "gradient-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground",
                      )}
                    >
                      {auto && i === 1 ? <Sparkles className="size-4" /> : i + 1}
                    </span>
                    <span className="text-sm font-medium">{step}</span>
                    {!auto && (
                      <Clock className="ml-auto size-4 shrink-0 text-muted-foreground/60" />
                    )}
                    {auto && <Zap className="ml-auto size-4 shrink-0 text-primary" />}
                  </motion.li>
                ))}
              </motion.ol>
            </AnimatePresence>
          </div>

          {/* Indicadores */}
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {b.metricLabels.map((label, i) => (
              <div
                key={label}
                className={cn(
                  "rounded-2xl border bg-card p-5 transition-colors duration-500",
                  auto ? "border-primary/30" : "border-border",
                )}
              >
                <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  {label}
                </p>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={metrics[i]}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                      "mt-2 text-xl font-semibold tracking-tight",
                      auto ? "text-gradient" : "text-foreground",
                    )}
                  >
                    {metrics[i]}
                  </motion.p>
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">{b.note}</p>
      </div>
    </section>
  );
}
