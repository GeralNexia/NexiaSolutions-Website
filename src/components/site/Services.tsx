import { motion } from "motion/react";
import {
  Bot,
  BrainCircuit,
  Cable,
  Compass,
  FileScan,
  MonitorSmartphone,
  Workflow,
  Check,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { useI18n } from "@/i18n";

const capabilityIcons = [Workflow, BrainCircuit, FileScan, Cable];

/**
 * Serviços organizados nos três pilares da Nexia. A automação (o foco da empresa)
 * ocupa o cartão maior; consultoria e websites ficam ao lado.
 */
export function Services() {
  const { t } = useI18n();
  const s = t.services;

  return (
    <section id="servicos" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} description={s.description} />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {/* Pilar 2: automação & IA, o foco da Nexia, em destaque e a toda a largura */}
          <Reveal className="md:col-span-2">
            <article className="group relative h-full overflow-hidden rounded-3xl border border-primary/30 bg-card p-7 shadow-elegant sm:p-9 lg:p-11">
              <div className="gradient-hero pointer-events-none absolute inset-0 opacity-70" />
              <div className="grid-bg pointer-events-none absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
              <div className="relative grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="gradient-primary flex size-12 items-center justify-center rounded-2xl shadow-soft">
                      <Bot className="size-5.5 text-primary-foreground" />
                    </span>
                    <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                      {s.automation.tag}
                    </span>
                    <span className="gradient-primary rounded-full px-3 py-1 text-xs font-semibold text-primary-foreground">
                      {s.focus}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                    {s.automation.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{s.automation.text}</p>
                  <FlowStrip ai={s.automation.ai} />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {s.automation.capabilities.map((c, i) => {
                    const Icon = capabilityIcons[i];
                    return (
                      <div
                        key={c.title}
                        className="rounded-2xl border border-border bg-card/80 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40"
                      >
                        <span className="flex size-9 items-center justify-center rounded-xl bg-accent">
                          <Icon className="size-4.5 text-accent-foreground" />
                        </span>
                        <h4 className="mt-3 text-sm font-semibold">{c.title}</h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {c.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </article>
          </Reveal>

          {/* Pilar 1: consultoria */}
          <Reveal delay={0.08}>
            <PillarCard
              icon={Compass}
              tag={s.consulting.tag}
              title={s.consulting.title}
              text={s.consulting.text}
              items={s.consulting.items}
            >
              <ProcessMap />
            </PillarCard>
          </Reveal>

          {/* Pilar 3: websites & software */}
          <Reveal delay={0.16}>
            <PillarCard
              icon={MonitorSmartphone}
              tag={s.web.tag}
              title={s.web.title}
              text={s.web.text}
              items={s.web.items}
            >
              <BrowserMock url={s.web.browser} />
            </PillarCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PillarCard({
  icon: Icon,
  tag,
  title,
  text,
  items,
  children,
}: {
  icon: typeof Bot;
  tag: string;
  title: string;
  text: string;
  items: string[];
  children?: React.ReactNode;
}) {
  return (
    <article className="card-hover group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft">
      <div className="gradient-hero pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative flex flex-1 flex-col">
        <div className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-2xl bg-accent">
            <Icon className="size-5 text-accent-foreground" />
          </span>
          <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            {tag}
          </span>
        </div>
        <h3 className="mt-5 text-lg font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
        {children}
        <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2">
          {items.map((it) => (
            <li key={it} className="flex items-start gap-1.5 text-xs text-muted-foreground">
              <Check className="mt-0.5 size-3.5 shrink-0 text-primary" />
              {it}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

/** Pequena faixa animada: dados a fluir entre sistemas. */
function FlowStrip({ ai }: { ai: string }) {
  const nodes = ["Email", "PDF", ai, "ERP", "CRM"];
  return (
    <div className="mt-7 flex items-center gap-1.5 overflow-hidden sm:gap-2" aria-hidden>
      {nodes.map((n, i) => (
        <div key={n} className="flex flex-1 items-center gap-1.5 last:flex-none sm:gap-2">
          <span
            className={
              "rounded-lg border px-2.5 py-1 font-mono text-[11px] font-medium sm:text-xs " +
              (n === ai
                ? "gradient-primary border-transparent text-primary-foreground"
                : "border-border bg-card text-foreground")
            }
          >
            {n}
          </span>
          {i < nodes.length - 1 && (
            <span className="relative h-px flex-1 bg-border">
              <motion.span
                className="absolute top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]"
                initial={{ left: "0%", opacity: 0 }}
                animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
              />
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

/** Mini mapa de processo: passos atuais, com desperdícios assinalados e melhorados. */
function ProcessMap() {
  const steps = [false, true, false, true, false];
  return (
    <div
      className="mt-5 flex items-center gap-1.5 rounded-xl border border-border bg-surface p-3"
      aria-hidden
    >
      {steps.map((waste, i) => (
        <div key={i} className="flex flex-1 items-center gap-1.5">
          <motion.span
            className="flex h-10 flex-1 items-center justify-center rounded-md border"
            initial={{
              borderColor: waste ? "var(--destructive)" : "var(--border)",
              backgroundColor: "var(--card)",
            }}
            whileInView={
              waste
                ? { borderColor: "var(--primary)", backgroundColor: "var(--accent)" }
                : undefined
            }
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
          >
            <span
              className={
                "size-1.5 rounded-full " + (waste ? "bg-primary" : "bg-muted-foreground/40")
              }
            />
          </motion.span>
          {i < steps.length - 1 && <span className="h-px w-2 bg-border" />}
        </div>
      ))}
    </div>
  );
}

/** Mini janela de browser a "construir" um site. */
function BrowserMock({ url }: { url: string }) {
  return (
    <div className="mt-5 overflow-hidden rounded-xl border border-border bg-surface" aria-hidden>
      <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
        <span className="size-2 rounded-full bg-destructive/60" />
        <span className="size-2 rounded-full bg-chart-4/70" />
        <span className="size-2 rounded-full bg-primary/60" />
        <span className="ml-2 truncate rounded-md bg-background px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
          {url}
        </span>
      </div>
      <div className="space-y-2 p-3">
        <motion.div
          className="gradient-primary h-10 origin-left rounded-md"
          initial={{ scaleX: 0.2, opacity: 0.4 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="h-8 rounded-md border border-border bg-card"
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
