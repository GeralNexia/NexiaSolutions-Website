import { useI18n } from "@/i18n";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { onContactPrefill } from "@/lib/contact-prefill";
import { Mail, Phone, Send, MapPin, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./Reveal";

export function Contact() {
  const { t } = useI18n();
  const c = t.contact;
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);
  // Formulário em 2 passos: primeiro o essencial, depois detalhes opcionais.
  // Os campos dos dois passos estão sempre no formulário (só se esconde o passo inativo).
  const [step, setStep] = useState<1 | 2>(1);

  // Preenchimento vindo de outras secções (ex.: calculadora de poupança).
  useEffect(
    () =>
      onContactPrefill((data) => {
        const form = formRef.current;
        if (!form) return;
        setStep(1);
        for (const [name, value] of Object.entries(data)) {
          const field = form.elements.namedItem(name);
          if (
            value &&
            (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement)
          ) {
            field.value = value;
          }
        }
        window.setTimeout(
          () => form.querySelector<HTMLInputElement>("#nome")?.focus({ preventScroll: true }),
          700,
        );
      }),
    [],
  );

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;

    if (step === 1) {
      setStep(2);
      window.setTimeout(() => formElement.querySelector<HTMLInputElement>("#empresa")?.focus(), 50);
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData(formElement);
    formData.append("access_key", "b99945c3-527f-45b9-a979-6d4456274b23");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success(c.successTitle, { description: c.successDesc });
        formElement.reset();
        setStep(1);
      } else {
        // Mantém os dados no formulário para a pessoa poder tentar de novo.
        toast.error(c.errorTitle, { description: c.errorDesc, duration: 10000 });
      }
    } catch {
      // Falha de rede/ligação: o pedido NÃO chegou. Avisar e manter os dados.
      toast.error(c.errorTitle, { description: c.errorDesc, duration: 10000 });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="relative overflow-hidden py-24 lg:py-32">
      <div className="gradient-hero pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow={c.eyebrow} title={c.title} description={c.description} />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.5fr]">
          <Reveal>
            <div className="glass-panel h-full rounded-3xl p-8 shadow-soft">
              <h3 className="text-lg font-semibold">{c.talkTitle}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.talkText}</p>
              <div className="mt-8 space-y-5">
                <a
                  href="mailto:geralnexia@gmail.com"
                  className="flex items-center gap-4 text-sm transition-colors hover:text-primary"
                >
                  <span className="flex size-10 items-center justify-center rounded-xl bg-accent">
                    <Mail className="size-4.5 text-accent-foreground" />
                  </span>
                  geralnexia@gmail.com
                </a>
                <a
                  href="tel:+351924890248"
                  className="flex items-center gap-4 text-sm transition-colors hover:text-primary"
                >
                  <span className="flex size-10 items-center justify-center rounded-xl bg-accent">
                    <Phone className="size-4.5 text-accent-foreground" />
                  </span>
                  +351 924 890 248
                </a>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-accent">
                    <MapPin className="size-4.5 text-accent-foreground" />
                  </span>
                  {c.location}
                </div>
              </div>
              <ul className="mt-8 space-y-3 border-t border-border pt-6">
                {c.promises.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              ref={formRef}
              onSubmit={onSubmit}
              className="rounded-3xl border border-border bg-card p-8 shadow-elegant"
            >
              <div className="mb-7">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold">
                    {step === 1 ? c.step1Title : c.step2Title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {c.stepOf.replace("{n}", String(step))}
                  </p>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-1.5" aria-hidden>
                  <span className="gradient-primary h-1 rounded-full" />
                  <span
                    className={cn(
                      "h-1 rounded-full transition-colors duration-500",
                      step === 2 ? "gradient-primary" : "bg-muted",
                    )}
                  />
                </div>
              </div>

              {/* Passo 1: o essencial */}
              <div className={cn("grid gap-5", step !== 1 && "hidden")}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    id="nome"
                    label={c.fields.nome.label}
                    required
                    placeholder={c.fields.nome.placeholder}
                  />
                  <Field
                    id="email"
                    label={c.fields.email.label}
                    type="email"
                    required
                    placeholder={c.fields.email.placeholder}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="descricao">{c.needLabel}</Label>
                  <Textarea
                    id="descricao"
                    name="descricao"
                    rows={5}
                    required
                    placeholder={c.fields.descricao.placeholder}
                  />
                </div>
              </div>

              {/* Passo 2: detalhes opcionais */}
              <div className={cn("grid gap-5", step !== 2 && "hidden")}>
                <p className="-mt-2 text-sm text-muted-foreground">{c.step2Hint}</p>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    id="empresa"
                    label={c.fields.empresa.label}
                    placeholder={c.fields.empresa.placeholder}
                  />
                  <Field
                    id="telefone"
                    label={c.fields.telefone.label}
                    type="tel"
                    placeholder={c.fields.telefone.placeholder}
                  />
                  <Field
                    id="colaboradores"
                    label={c.fields.colaboradores.label}
                    type="number"
                    min={1}
                    placeholder={c.fields.colaboradores.placeholder}
                  />
                  <Field
                    id="area"
                    label={c.fields.area.label}
                    placeholder={c.fields.area.placeholder}
                  />
                </div>
                <Field
                  id="problema"
                  label={c.fields.problema.label}
                  placeholder={c.fields.problema.placeholder}
                />
              </div>

              <div className="mt-7 flex gap-3">
                {step === 2 && (
                  <Button
                    type="button"
                    variant="outline"
                    size="xl"
                    className="px-5"
                    onClick={() => setStep(1)}
                    aria-label={c.back}
                  >
                    <ArrowLeft />
                    <span className="hidden sm:inline">{c.back}</span>
                  </Button>
                )}
                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  {step === 1 ? (
                    <>
                      {c.next} <ArrowRight />
                    </>
                  ) : (
                    <>
                      <Send /> {isSubmitting ? c.submitting : c.submit}
                    </>
                  )}
                </Button>
              </div>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                {c.privacyNote}{" "}
                <Link
                  to="/politica-de-privacidade"
                  className="underline underline-offset-2 hover:text-primary"
                >
                  {c.privacyLink}
                </Link>
                .
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  ...props
}: { id: string; label: string } & React.ComponentProps<typeof Input>) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} name={id} {...props} />
    </div>
  );
}
