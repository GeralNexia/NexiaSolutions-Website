import { handleSectionClick, sectionHref } from "@/lib/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import {
  ArrowRight,
  FileText,
  Sparkles,
  Database,
  BarChart3,
  Workflow,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n";
import { NetworkCanvas } from "@/components/site/NetworkCanvas";
import { useIntroPending } from "@/lib/intro";

const stepIcons = [FileText, Sparkles, Database, BarChart3, Workflow, CheckCircle2];

export function Hero() {
  const { t } = useI18n();
  const ready = !useIntroPending();
  const sectionRef = useRef<HTMLElement>(null);
  // Só anima depois da intro de entrada; até lá fica no estado inicial.
  const go = <T,>(target: T) => (ready ? target : undefined);

  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section
      ref={sectionRef}
      id="top"
      onPointerMove={onPointerMove}
      className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-28"
    >
      <div className="gradient-hero pointer-events-none absolute inset-0" />
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={go({ opacity: 1 })}
        transition={{ duration: 1.6 }}
        className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black_55%,transparent)]"
      >
        <NetworkCanvas
          className="size-full opacity-60 dark:opacity-80"
          rgb="70, 115, 245"
          density={0.55}
          interactive
        />
      </motion.div>
      <div className="hero-spotlight pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={go({ opacity: 1, y: 0 })}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-accent/60 px-3.5 py-1.5 text-xs font-medium text-accent-foreground"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            {t.hero.badge}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={go({ opacity: 1, y: 0 })}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            {t.hero.title1} <span className="text-gradient">{t.hero.title2}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={go({ opacity: 1, y: 0 })}
            transition={{ duration: 0.75, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-lg font-medium sm:text-xl"
          >
            <span className="text-muted-foreground">{t.hero.areasLabel}</span>
            <RotatingArea words={t.hero.areas} active={ready} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={go({ opacity: 1, y: 0 })}
            transition={{ duration: 0.75, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={go({ opacity: 1, y: 0 })}
            transition={{ duration: 0.75, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Button variant="hero" size="xl" asChild>
              <a
                href={sectionHref("contacto")}
                data-section-link
                onClick={handleSectionClick("contacto")}
              >
                {t.hero.cta} <ArrowRight />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={go({ opacity: 1 })}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground"
          >
            {t.hero.checks.map((t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <CheckCircle2 className="size-4 text-primary" /> {t}
              </span>
            ))}
          </motion.div>
        </div>

        <HeroPipeline ready={ready} />
      </div>
    </section>
  );
}

function RotatingArea({ words, active }: { words: string[]; active: boolean }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (!active) return;
    const id = window.setInterval(() => setI((n) => (n + 1) % words.length), 2400);
    return () => window.clearInterval(id);
  }, [active, words.length]);

  return (
    <span className="relative inline-flex h-[1.6em] items-center overflow-hidden rounded-lg border border-primary/25 bg-accent/60 px-3">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[i % words.length]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient whitespace-nowrap"
        >
          {words[i % words.length]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function HeroPipeline({ ready }: { ready: boolean }) {
  const { t } = useI18n();
  const steps = t.hero.steps.map((s, i) => ({ ...s, icon: stepIcons[i] }));
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 30 }}
      animate={ready ? { opacity: 1, scale: 1, y: 0 } : undefined}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="glass-panel relative rounded-3xl p-6 shadow-elegant sm:p-8"
    >
      <div className="mb-6 flex items-center gap-2">
        <span className="size-2.5 rounded-full bg-destructive/70" />
        <span className="size-2.5 rounded-full bg-chart-4/80" />
        <span className="size-2.5 rounded-full bg-primary/70" />
        <span className="ml-3 text-xs text-muted-foreground">{t.hero.pipelineTitle}</span>
      </div>

      <div className="space-y-3">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.25, x: -10 }}
            animate={{ opacity: [0.25, 1, 1, 0.35], x: [-10, 0, 0, 0] }}
            transition={{
              duration: 6,
              times: [0, 0.15, 0.75, 1],
              repeat: Infinity,
              delay: i * 0.55,
              ease: "easeInOut",
            }}
            className="flex items-center gap-4 rounded-2xl border border-border bg-card/70 px-4 py-3"
          >
            <span className="gradient-primary flex size-9 shrink-0 items-center justify-center rounded-xl">
              <s.icon className="size-4.5 text-primary-foreground" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-medium">{s.label}</p>
              <p className="truncate text-xs text-muted-foreground">{s.detail}</p>
            </div>
            <motion.span
              className="ml-auto h-1.5 w-16 overflow-hidden rounded-full bg-muted"
              aria-hidden
            >
              <motion.span
                className="gradient-primary block h-full w-full origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: [0, 1, 1, 0] }}
                transition={{
                  duration: 6,
                  times: [0, 0.2, 0.8, 1],
                  repeat: Infinity,
                  delay: i * 0.55,
                  ease: "easeInOut",
                }}
              />
            </motion.span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
