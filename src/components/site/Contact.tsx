import { useState, type FormEvent } from "react";
import { Mail, Phone, Upload, Send, MapPin } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal, SectionHeading } from "./Reveal";

export function Contact() {
  const [fileName, setFileName] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Pedido enviado", {
      description: "A nossa equipa entra em contacto consigo em menos de 24 horas.",
    });
    e.currentTarget.reset();
    setFileName("");
  };

  return (
    <section id="contacto" className="relative overflow-hidden py-24 lg:py-32">
      <div className="gradient-hero pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Contacto"
          title="Solicite o seu diagnóstico gratuito"
          description="Conte-nos o problema que quer resolver. Respondemos com uma proposta concreta."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.5fr]">
          <Reveal>
            <div className="glass-panel h-full rounded-3xl p-8 shadow-soft">
              <h3 className="text-lg font-semibold">Fale connosco</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Prefere falar diretamente? Estamos disponíveis.
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
                  Portugal · trabalho remoto e presencial
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-border bg-card p-8 shadow-elegant"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="nome" label="Nome" required placeholder="O seu nome" />
                <Field id="empresa" label="Empresa" placeholder="Nome da empresa" />
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  required
                  placeholder="nome@empresa.pt"
                />
                <Field id="telefone" label="Telefone" type="tel" placeholder="+351 900 000 000" />
                <Field
                  id="colaboradores"
                  label="Número de colaboradores"
                  type="number"
                  min={1}
                  placeholder="Ex.: 25"
                />
                <Field id="area" label="Área de atividade" placeholder="Ex.: Contabilidade" />
              </div>

              <div className="mt-5 grid gap-2">
                <Label htmlFor="problema">Problema que quer resolver</Label>
                <Input id="problema" name="problema" placeholder="Ex.: Leitura manual de faturas" />
              </div>

              <div className="mt-5 grid gap-2">
                <Label htmlFor="descricao">Descreva o problema</Label>
                <Textarea
                  id="descricao"
                  name="descricao"
                  rows={5}
                  required
                  placeholder="Que processos são manuais hoje? Que sistemas usa? Qual o volume mensal?"
                />
              </div>

              <div className="mt-5 grid gap-2">
                <Label htmlFor="ficheiro">Upload de ficheiros</Label>
                <label
                  htmlFor="ficheiro"
                  className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-border bg-surface px-4 py-4 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  <Upload className="size-4.5" />
                  {fileName || "Anexe um exemplo de documento (PDF, Excel, imagem)"}
                </label>
                <input
                  id="ficheiro"
                  name="ficheiro"
                  type="file"
                  className="sr-only"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
                />
              </div>

              <Button type="submit" variant="hero" size="xl" className="mt-7 w-full">
                <Send /> Solicitar Diagnóstico Gratuito
              </Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Os seus dados são tratados de forma confidencial, em conformidade com o RGPD.
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
