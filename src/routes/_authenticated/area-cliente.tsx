import { useEffect, useState } from "react";
import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { motion } from "motion/react";
import {
  Hexagon,
  LogOut,
  FileText,
  BarChart3,
  Workflow,
  LifeBuoy,
  ShieldCheck,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_authenticated/area-cliente")({
  head: () => ({
    meta: [
      { title: "Painel de Cliente | Nexia Solutions" },
      {
        name: "description",
        content:
          "Painel privado Nexia Solutions: documentação de projetos, relatórios de automação e suporte dedicado.",
      },
      { property: "og:title", content: "Painel de Cliente | Nexia Solutions" },
      {
        property: "og:description",
        content: "Painel privado com documentação, relatórios de automação e suporte dedicado.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ClientArea,
});

const cards = [
  {
    icon: Workflow,
    title: "Estado das Automações",
    text: "Acompanhe os fluxos ativos, execuções do mês e tarefas eliminadas ao seu processo.",
  },
  {
    icon: FileText,
    title: "Documentação do Projeto",
    text: "Especificações, manuais de utilização e registos de alterações do seu sistema.",
  },
  {
    icon: BarChart3,
    title: "Relatórios de Desempenho",
    text: "Métricas de tempo poupado, custos evitados e taxa de erro antes e depois da automação.",
  },
  {
    icon: LifeBuoy,
    title: "Suporte Dedicado",
    text: "Canal direto com a equipa Nexia para pedidos, ajustes e novas integrações.",
  },
];

function ClientArea() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setEmail(data.user?.email ?? null));
  }, []);

  const signOut = async () => {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="glass-panel sticky top-0 z-50 shadow-soft">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="gradient-primary flex size-9 items-center justify-center rounded-xl shadow-soft">
              <Hexagon className="size-5 text-primary-foreground" strokeWidth={2.4} />
            </span>
            <span className="text-[17px] font-semibold tracking-tight">
              Nexia <span className="font-normal text-muted-foreground">Solutions</span>
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-muted-foreground sm:inline">{email}</span>
            <Button variant="ghost" size="sm" onClick={signOut}>
              <LogOut className="size-4" /> Sair
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 px-3 py-1 text-xs text-muted-foreground">
            <ShieldCheck className="size-3.5" /> Conteúdo reservado a clientes
          </div>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Bem-vindo à sua área privada
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Aqui reunimos tudo o que é exclusivo do seu projeto com a Nexia Solutions. Este acesso é
            individual e apenas atribuído pela nossa equipa.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 * i, duration: 0.45 }}
              className="glass-panel rounded-2xl p-6 shadow-soft"
            >
              <span className="gradient-primary mb-4 flex size-10 items-center justify-center rounded-xl">
                <c.icon className="size-5 text-primary-foreground" />
              </span>
              <h2 className="text-lg font-semibold tracking-tight">{c.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border/70 p-6">
          <h2 className="text-lg font-semibold tracking-tight">Precisa de algo específico?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Diga-nos que conteúdos quer disponibilizar aqui (ficheiros, dashboards, tickets) e
            preparamos a secção.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button variant="hero" asChild>
              <a href="mailto:geralnexia@gmail.com">Contactar a equipa</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://wa.me/351924890248" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
