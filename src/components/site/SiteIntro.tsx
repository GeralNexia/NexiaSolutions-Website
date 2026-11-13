import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { NetworkCanvas } from "@/components/site/NetworkCanvas";
import { useI18n } from "@/i18n";
import { finishIntro, introAlreadyPlayed } from "@/lib/intro";

const EASE = [0.22, 1, 0.36, 1] as const;
const DURATION = 3300; // ms até a intro sair (versão reduzida: 900 ms)
const WORD = "NEXIA".split("");

/**
 * Entrada do site: ecrã inteiro com a rede de sistemas a ligar-se, o logótipo,
 * as áreas de especialidade e um contador de arranque. Toca uma vez por
 * carregamento do site, pode ser saltada (clique, Esc, Enter ou espaço) e,
 * se o JavaScript falhar, desaparece sozinha por CSS (ver .site-intro).
 */
export function SiteIntro() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(() => !introAlreadyPlayed());
  const [progress, setProgress] = useState(0);
  const [line, setLine] = useState(0);
  const closing = useRef(false);

  const close = () => {
    if (closing.current) return;
    closing.current = true;
    setVisible(false);
  };

  useEffect(() => {
    if (!visible) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const total = reduced ? 900 : DURATION;
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const k = Math.min(1, (now - start) / (total - 350));
      setProgress(Math.round((1 - Math.pow(1 - k, 3)) * 100));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const lines = t.intro.lines.length;
    const lineTimer = window.setInterval(
      () => setLine((l) => Math.min(l + 1, lines - 1)),
      reduced ? 200 : 650,
    );
    const done = window.setTimeout(close, total);
    const onKey = (e: KeyboardEvent) => {
      if (["Escape", "Enter", " "].includes(e.key)) close();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      cancelAnimationFrame(raf);
      window.clearInterval(lineTimer);
      window.clearTimeout(done);
      window.removeEventListener("keydown", onKey);
      root.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  return (
    <AnimatePresence onExitComplete={finishIntro}>
      {visible && (
        <motion.div
          key="intro"
          data-site-intro
          role="dialog"
          aria-modal="true"
          aria-label="Nexia Solutions"
          onClick={close}
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
          transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
          className="site-intro fixed inset-0 z-[100] cursor-pointer overflow-hidden bg-[#050814] text-white select-none"
        >
          {/* Fundo: rede de sistemas, brilho central e linha de leitura */}
          <NetworkCanvas
            className="absolute inset-0 size-full opacity-70"
            rgb="110, 150, 255"
            density={1.1}
          />
          <div className="intro-glow pointer-events-none absolute top-1/2 left-1/2 size-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full" />
          <div className="intro-scan pointer-events-none absolute inset-x-0 h-px" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#050814_85%)]" />

          {/* Cantos de interface */}
          <div className="pointer-events-none absolute inset-0 font-mono text-[10px] tracking-[0.25em] text-white/35 uppercase sm:text-[11px]">
            <span className="absolute top-5 left-5 sm:top-7 sm:left-8">Nexia // Solutions</span>
            <span className="absolute bottom-5 left-5 hidden sm:bottom-7 sm:left-8 sm:block">
              38.7223° N · 9.1393° W
            </span>
            <span className="absolute right-5 bottom-5 sm:right-8 sm:bottom-7">
              © {new Date().getFullYear()}
            </span>
            {[
              "top-3 left-3 border-t border-l",
              "top-3 right-3 border-t border-r",
              "bottom-3 left-3 border-b border-l",
              "bottom-3 right-3 border-b border-r",
            ].map((c) => (
              <span key={c} className={`absolute size-5 border-white/20 ${c}`} />
            ))}
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            className="absolute top-4 right-4 z-10 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-mono text-[11px] tracking-[0.2em] text-white/70 uppercase backdrop-blur transition-colors hover:border-white/40 hover:text-white sm:top-6 sm:right-7"
          >
            {t.intro.skip}
          </button>

          <motion.div
            exit={{ scale: 1.08, opacity: 0, filter: "blur(8px)" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="relative flex h-full flex-col items-center justify-center px-6 text-center"
          >
            {/* Logótipo com anéis orbitais */}
            <div className="relative grid size-36 place-items-center sm:size-44">
              <svg viewBox="0 0 200 200" className="absolute inset-0 size-full" aria-hidden>
                <defs>
                  <linearGradient id="intro-ring" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3b6cff" />
                    <stop offset="100%" stopColor="#8fd0ff" />
                  </linearGradient>
                </defs>
                <motion.circle
                  cx="100"
                  cy="100"
                  r="92"
                  fill="none"
                  stroke="url(#intro-ring)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, rotate: -90, opacity: 0 }}
                  animate={{ pathLength: 1, rotate: 270, opacity: 1 }}
                  transition={{ duration: 1.8, ease: EASE }}
                  style={{ originX: "50%", originY: "50%" }}
                />
                <motion.circle
                  cx="100"
                  cy="100"
                  r="78"
                  fill="none"
                  stroke="rgba(143,208,255,0.35)"
                  strokeWidth="1"
                  strokeDasharray="2 7"
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={{ rotate: -180, opacity: 1 }}
                  transition={{
                    rotate: { duration: 6, ease: "linear" },
                    opacity: { duration: 0.8, delay: 0.3 },
                  }}
                  style={{ originX: "50%", originY: "50%" }}
                />
              </svg>
              <motion.span
                className="absolute size-2 rounded-full bg-[#8fd0ff] shadow-[0_0_14px_4px_rgba(143,208,255,0.7)]"
                style={{ top: "4%", left: "50%", marginLeft: -4 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 1.8, times: [0, 0.1, 0.85, 1] }}
              />
              <motion.img
                src={`${import.meta.env.BASE_URL}nexia-logo.png`}
                alt=""
                initial={{ opacity: 0, scale: 0.6, filter: "blur(12px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.25, ease: EASE }}
                className="size-20 rounded-2xl shadow-[0_0_60px_-10px_rgba(80,130,255,0.9)] sm:size-24"
              />
            </div>

            {/* Marca */}
            <h2
              className="mt-9 flex overflow-hidden text-5xl font-semibold tracking-[0.18em] sm:text-7xl"
              aria-label="Nexia"
            >
              {WORD.map((ch, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.07, ease: EASE }}
                  className="intro-letter inline-block"
                >
                  {ch}
                </motion.span>
              ))}
            </h2>
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.9em" }}
              animate={{ opacity: 0.75, letterSpacing: "0.55em" }}
              transition={{ duration: 1.2, delay: 0.9, ease: EASE }}
              className="mt-2 pl-[0.55em] text-xs font-light text-white uppercase sm:text-sm"
            >
              Solutions
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.15, ease: EASE }}
              className="mt-8 max-w-md text-base text-white/80 sm:text-lg"
            >
              {t.intro.tagline}
            </motion.p>

            {/* Áreas que vão "ligando" */}
            <div className="mt-3 h-7 overflow-hidden font-mono text-sm text-[#8fd0ff] sm:text-base">
              <AnimatePresence mode="wait">
                <motion.p
                  key={line}
                  initial={{ y: 18, opacity: 0, filter: "blur(4px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -18, opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-white/40">›</span> {t.intro.lines[line]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Arranque */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute bottom-16 left-1/2 w-[min(78vw,22rem)] -translate-x-1/2 sm:bottom-20"
            >
              <div className="flex items-end justify-between font-mono text-[11px] tracking-[0.2em] text-white/50 uppercase">
                <span>{progress < 100 ? `${t.intro.boot}…` : t.intro.ready}</span>
                <span className="text-sm tracking-normal text-white tabular-nums">
                  {String(progress).padStart(3, "0")}%
                </span>
              </div>
              <div className="mt-2 h-px w-full overflow-hidden bg-white/10">
                <div
                  className="h-full bg-gradient-to-r from-[#3b6cff] to-[#8fd0ff] shadow-[0_0_12px_rgba(143,208,255,0.9)]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
