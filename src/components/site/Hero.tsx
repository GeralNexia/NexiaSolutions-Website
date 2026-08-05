import { motion } from "motion/react";
import { ArrowRight, FileText, Sparkles, Database, BarChart3, Workflow, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: FileText, label: "PDF", detail: "Documento recebido" },
  { icon: Sparkles, label: "IA", detail: "Leitura inteligente" },
  { icon: Database, label: "Extração de Dados", detail: "Campos estruturados" },
  { icon: BarChart3, label: "Dashboard", detail: "Visão em tempo real" },
  { icon: Workflow, label: "Automação", detail: "Fluxo disparado" },
  { icon: CheckCircle2, label: "Resultado", detail: "Tempo poupado" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-28">
      <div className="gradient-hero pointer-events-none absolute inset-0" />
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-accent/60 px-3.5 py-1.5 text-xs font-medium text-accent-foreground"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Automação e IA para empresas portuguesas
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Automatizamos processos.{" "}
            <span className="text-gradient">Potenciamos empresas.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Desenvolvemos soluções inteligentes com Inteligência Artificial, automação e software
            personalizado para reduzir custos, eliminar tarefas repetitivas e aumentar a
            produtividade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#contacto">
                Pedir Diagnóstico Gratuito <ArrowRight />
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#demonstracao">Ver Demonstração</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground"
          >
            {["Sem tarefas repetitivas", "Integra com o seu ERP", "Dados seguros em Portugal"].map(
              (t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" /> {t}
                </span>
              ),
            )}
          </motion.div>
        </div>

        <HeroPipeline />
      </div>
    </section>
  );
}

function HeroPipeline() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="glass-panel relative rounded-3xl p-6 shadow-elegant sm:p-8"
    >
      <div className="mb-6 flex items-center gap-2">
        <span className="size-2.5 rounded-full bg-destructive/70" />
        <span className="size-2.5 rounded-full bg-chart-4/80" />
        <span className="size-2.5 rounded-full bg-primary/70" />
        <span className="ml-3 text-xs text-muted-foreground">nexia · pipeline de automação</span>
      </div>

      <div className="space-y-3">
        {steps.map((s, i) => (
          <motion.div
            key={s.label}
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
