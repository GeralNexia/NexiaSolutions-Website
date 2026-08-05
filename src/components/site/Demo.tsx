import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FileUp, Sparkles, ListChecks, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading, Reveal } from "./Reveal";

const stages = [
  { icon: FileUp, label: "Upload do PDF", detail: "contrato-arrendamento-2026.pdf" },
  { icon: Sparkles, label: "IA lê o documento", detail: "A interpretar 14 páginas..." },
  { icon: ListChecks, label: "Informação organizada", detail: "Campos extraídos e validados" },
];

const extracted = [
  { label: "Nome", value: "Maria Sousa Almeida" },
  { label: "Data de início", value: "01/03/2026" },
  { label: "Data de fim", value: "28/02/2029" },
  { label: "Valor mensal", value: "1.250,00 €" },
  { label: "Caução", value: "2.500,00 €" },
  { label: "Cláusula 7.ª", value: "Renovação automática anual" },
];

export function Demo() {
  const [stage, setStage] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (stage >= 2) return;
    const t = setTimeout(() => setStage((s) => s + 1), 2200);
    return () => clearTimeout(t);
  }, [stage, key]);

  return (
    <section id="demonstracao" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Demonstração"
          title="Veja a IA a ler um documento em segundos"
          description="Uma simulação visual do nosso motor de processamento inteligente de documentos."
        />

        <Reveal className="mt-14">
          <div className="glass-panel grid gap-8 rounded-3xl p-6 shadow-elegant sm:p-10 lg:grid-cols-2">
            <div>
              <ol className="space-y-4">
                {stages.map((s, i) => {
                  const active = stage === i;
                  const done = stage > i;
                  return (
                    <li
                      key={s.label}
                      className={`flex items-center gap-4 rounded-2xl border px-5 py-4 transition-all duration-500 ${
                        active
                          ? "border-primary/50 bg-card shadow-soft"
                          : done
                            ? "border-border bg-card/60"
                            : "border-border bg-card/30 opacity-60"
                      }`}
                    >
                      <span
                        className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${
                          active || done ? "gradient-primary" : "bg-muted"
                        }`}
                      >
                        <s.icon
                          className={`size-4.5 ${active || done ? "text-primary-foreground" : "text-muted-foreground"}`}
                        />
                      </span>
                      <div>
                        <p className="text-sm font-medium">{s.label}</p>
                        <p className="text-xs text-muted-foreground">{s.detail}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>

              <Button
                variant="glass"
                className="mt-6"
                onClick={() => {
                  setStage(0);
                  setKey((k) => k + 1);
                }}
              >
                <RotateCcw /> Repetir demonstração
              </Button>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                Dados extraídos
              </p>
              <div className="mt-4 space-y-2.5">
                <AnimatePresence mode="popLayout">
                  {stage === 2 &&
                    extracted.map((f, i) => (
                      <motion.div
                        key={f.label}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: i * 0.09, duration: 0.45 }}
                        className="flex items-center justify-between gap-4 rounded-xl bg-surface px-4 py-3"
                      >
                        <span className="text-xs text-muted-foreground">{f.label}</span>
                        <span className="text-right text-sm font-medium">{f.value}</span>
                      </motion.div>
                    ))}
                </AnimatePresence>
                {stage < 2 && (
                  <div className="space-y-2.5">
                    {extracted.map((f) => (
                      <div
                        key={f.label}
                        className="h-11 animate-pulse rounded-xl bg-muted/70"
                        aria-hidden
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
