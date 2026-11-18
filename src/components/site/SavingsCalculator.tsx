import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";
import { ArrowRight, CalendarDays, Clock, Euro } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "./Reveal";
import { useI18n, type Lang } from "@/i18n";
import { goToSection } from "@/lib/navigation";
import { prefillContact } from "@/lib/contact-prefill";

/** Pressupostos da estimativa (conservadores e explicados no ecrã). */
const AUTOMATABLE = 0.6;
const WEEKS_PER_YEAR = 46;
const HOURS_PER_DAY = 8;

const locales: Record<Lang, string> = { pt: "pt-PT", en: "en-IE", fr: "fr-FR", es: "es-ES" };
// Agrupa sempre os milhares (pt-PT e es-ES não o fazem por omissão em números de 4 dígitos).
// "always" é suportado pelos browsers mas ainda não está nos tipos do TypeScript.
const ALWAYS_GROUP = { useGrouping: "always" as unknown as boolean };

export function SavingsCalculator() {
  const { t, lang } = useI18n();
  const c = t.calculator;
  const [people, setPeople] = useState(3);
  const [hours, setHours] = useState(8);
  const [cost, setCost] = useState(15);

  const savedHours = Math.round(people * hours * WEEKS_PER_YEAR * AUTOMATABLE);
  const savedMoney = Math.round(savedHours * cost);
  const savedDays = Math.round(savedHours / HOURS_PER_DAY);

  const locale = locales[lang];
  const money = (v: number) =>
    new Intl.NumberFormat(locale, {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
      ...ALWAYS_GROUP,
    }).format(v);
  const num = (v: number) => new Intl.NumberFormat(locale, ALWAYS_GROUP).format(v);

  const onCta = () => {
    prefillContact({
      problema: c.prefillProblem,
      descricao: c.prefill
        .replace("{people}", String(people))
        .replace("{hours}", String(hours))
        .replace("{cost}", String(cost))
        .replace("{money}", money(savedMoney))
        .replace("{savedHours}", num(savedHours)),
    });
    goToSection("contacto");
  };

  return (
    <section id="calculadora" className="relative overflow-hidden py-24 lg:py-32">
      <div className="gradient-hero pointer-events-none absolute inset-0 opacity-70" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow={c.eyebrow} title={c.title} description={c.description} />

        <Reveal className="mt-14">
          <div className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-elegant lg:grid-cols-[1.15fr_1fr]">
            <div className="space-y-9 p-7 sm:p-10">
              <Control
                label={c.people}
                value={people}
                display={num(people)}
                min={1}
                max={50}
                onChange={setPeople}
              />
              <Control
                label={c.hours}
                value={hours}
                display={`${num(hours)} ${c.hoursUnit}`}
                min={1}
                max={40}
                onChange={setHours}
              />
              <Control
                label={c.cost}
                value={cost}
                display={money(cost)}
                min={8}
                max={60}
                onChange={setCost}
              />
              <p className="text-xs leading-relaxed text-muted-foreground">{c.assumption}</p>
            </div>

            <div className="gradient-primary relative flex flex-col justify-between gap-8 p-7 text-primary-foreground sm:p-10">
              <div className="grid-bg pointer-events-none absolute inset-0 opacity-20" />
              <div className="relative">
                <p className="flex items-center gap-2 text-sm font-medium opacity-90">
                  <Euro className="size-4" /> {c.savedMoney}
                </p>
                <p className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
                  <AnimatedNumber value={savedMoney} format={money} />
                </p>
                <p className="mt-1 text-sm opacity-80">{c.perYear}</p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/12 p-4 backdrop-blur-sm">
                    <p className="flex items-center gap-1.5 text-xs opacity-85">
                      <Clock className="size-3.5" /> {c.savedHours}
                    </p>
                    <p className="mt-1 text-2xl font-semibold">
                      <AnimatedNumber value={savedHours} format={num} />
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/12 p-4 backdrop-blur-sm">
                    <p className="flex items-center gap-1.5 text-xs opacity-85">
                      <CalendarDays className="size-3.5" /> {c.savedDays}
                    </p>
                    <p className="mt-1 text-2xl font-semibold">
                      <AnimatedNumber value={savedDays} format={num} />
                    </p>
                  </div>
                </div>
              </div>

              <Button
                size="xl"
                onClick={onCta}
                className="relative h-auto min-h-13 w-full bg-white py-3 whitespace-normal text-primary shadow-soft hover:bg-white/90"
              >
                {c.cta} <ArrowRight />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Control({
  label,
  value,
  display,
  min,
  max,
  onChange,
}: {
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-sm font-medium">{label}</span>
        <span className="shrink-0 rounded-lg bg-accent px-2.5 py-1 text-sm font-semibold text-accent-foreground tabular-nums">
          {display}
        </span>
      </div>
      <Slider
        className="mt-4 [&_[role=slider]]:size-5 [&_[role=slider]]:border-2 [&_[role=slider]]:border-primary"
        value={[value]}
        min={min}
        max={max}
        step={1}
        aria-label={label}
        onValueChange={([v]) => onChange(v)}
      />
    </div>
  );
}

/** Número que desliza suavemente até ao novo valor. */
function AnimatedNumber({ value, format }: { value: number; format: (v: number) => string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const current = useRef(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(current.current, value, {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        current.current = v;
        if (ref.current) ref.current.textContent = format(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [value, inView, format]);

  return (
    <span ref={ref} className="tabular-nums">
      {format(0)}
    </span>
  );
}
