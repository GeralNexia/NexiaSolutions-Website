import { useEffect, useState } from "react";
import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Hexagon, Lock, Loader2 } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const searchSchema = z.object({ redirect: z.string().optional() });

const credentialsSchema = z.object({
  email: z.string().trim().email({ message: "Introduza um email válido" }).max(255),
  password: z.string().min(6, { message: "A palavra-passe deve ter pelo menos 6 caracteres" }).max(128),
});

export const Route = createFileRoute("/auth")({
  validateSearch: (search) => searchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Área de Cliente | Nexia Solutions" },
      {
        name: "description",
        content:
          "Acesso reservado a clientes Nexia Solutions. Entre com as credenciais fornecidas pela nossa equipa.",
      },
      { property: "og:title", content: "Área de Cliente | Nexia Solutions" },
      {
        property: "og:description",
        content: "Acesso reservado a clientes Nexia Solutions com credenciais fornecidas pela equipa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AuthPage,
});

function safePath(value: string | undefined) {
  if (!value) return "/area-cliente";
  return value.startsWith("/") && !value.startsWith("//") ? value : "/area-cliente";
}

function AuthPage() {
  const navigate = useNavigate();
  const search = Route.useSearch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: safePath(search.redirect), replace: true });
    });
  }, [navigate, search.redirect]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = credentialsSchema.safeParse({ email, password });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Dados inválidos");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: parsed.data.email,
      password: parsed.data.password,
    });
    setLoading(false);
    if (error) {
      toast.error("Credenciais inválidas. Contacte a Nexia se precisar de acesso.");
      return;
    }
    toast.success("Sessão iniciada");
    navigate({ to: safePath(search.redirect), replace: true });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-5 py-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md"
      >
        <Link to="/" className="mb-8 flex items-center justify-center gap-2.5">
          <span className="gradient-primary flex size-9 items-center justify-center rounded-xl shadow-soft">
            <Hexagon className="size-5 text-primary-foreground" strokeWidth={2.4} />
          </span>
          <span className="text-[17px] font-semibold tracking-tight">
            Nexia <span className="font-normal text-muted-foreground">Solutions</span>
          </span>
        </Link>

        <div className="glass-panel rounded-2xl p-7 shadow-soft">
          <div className="mb-6 flex items-center gap-2 text-muted-foreground">
            <Lock className="size-4" />
            <span className="text-xs font-medium uppercase tracking-widest">Acesso reservado</span>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">Área de Cliente</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Entre com as credenciais que a nossa equipa lhe forneceu. O registo não está aberto ao
            público.
          </p>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                required
                maxLength={255}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="cliente@empresa.pt"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Palavra-passe</Label>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                maxLength={128}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
            </div>
            <Button type="submit" variant="hero" className="w-full" disabled={loading}>
              {loading ? <Loader2 className="animate-spin" /> : null}
              Entrar
            </Button>
          </form>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            Precisa de acesso?{" "}
            <a href="mailto:geralnexia@gmail.com" className="text-foreground underline">
              geralnexia@gmail.com
            </a>
          </p>
        </div>

        <div className="mt-6 text-center">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
            ← Voltar ao site
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
