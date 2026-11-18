import { useI18n } from "@/i18n";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { onContactPrefill } from "@/lib/contact-prefill";
import { Mail, Phone, Send, MapPin } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "./Reveal";

export function Contact() {
  const { t } = useI18n();
  const c = t.contact;
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Preenchimento vindo de outras secções (ex.: calculadora de poupança).
  useEffect(
    () =>
      onContactPrefill((data) => {
        const form = formRef.current;
        if (!form) return;
        for (const [name, value] of Object.entries(data)) {
          const field = form.elements.namedItem(name);
          if (value && (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement)) {
            field.value = value;
          }
        }
        window.setTimeout(() => form.querySelector<HTMLInputElement>("#nome")?.focus({ preventScroll: true }), 700);
      }),
    [],
  );

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formElement = e.currentTarget;
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
        <SectionHeading
          eyebrow={c.eyebrow}
          title={c.title}
          description={c.description}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.5fr]">
          <Reveal>
            <div className="glass-panel h-full rounded-3xl p-8 shadow-soft">
              <h3 className="text-lg font-semibold">{c.talkTitle}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {c.talkText}
              </p>
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
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              ref={formRef}
              onSubmit={onSubmit}
              className="rounded-3xl border border-border bg-card p-8 shadow-elegant"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="nome" label={c.fields.nome.label} required placeholder={c.fields.nome.placeholder} />
                <Field id="empresa" label={c.fields.empresa.label} placeholder={c.fields.empresa.placeholder} />
                <Field
                  id="email"
                  label={c.fields.email.label}
                  type="email"
                  required
                  placeholder={c.fields.email.placeholder}
                />
                <Field id="telefone" label={c.fields.telefone.label} type="tel" placeholder={c.fields.telefone.placeholder} />
                <Field
                  id="colaboradores"
                  label={c.fields.colaboradores.label}
                  type="number"
                  min={1}
                  placeholder={c.fields.colaboradores.placeholder}
                />
                <Field id="area" label={c.fields.area.label} placeholder={c.fields.area.placeholder} />
              </div>

              <div className="mt-5 grid gap-2">
                <Label htmlFor="problema">{c.fields.problema.label}</Label>
                <Input id="problema" name="problema" placeholder={c.fields.problema.placeholder} />
              </div>

              <div className="mt-5 grid gap-2">
                <Label htmlFor="descricao">{c.fields.descricao.label}</Label>
                <Textarea
                  id="descricao"
                  name="descricao"
                  rows={5}
                  required
                  placeholder={c.fields.descricao.placeholder}
                />
              </div>

              <Button type="submit" variant="hero" size="xl" className="mt-7 w-full" disabled={isSubmitting}>
                <Send /> {isSubmitting ? c.submitting : c.submit}
              </Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                {c.privacyNote}{" "}
                <Link to="/politica-de-privacidade" className="underline underline-offset-2 hover:text-primary">
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