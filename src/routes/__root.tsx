import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { useEffect } from "react";

import { reportLovableError } from "../lib/lovable-error-reporting";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  const logoSrc = `${import.meta.env.BASE_URL}nexia-logo.png`;
  const quickLinks = [
    { label: "Serviços", href: "/#servicos" },
    { label: "Como Trabalhamos", href: "/#processo" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contacto", href: "/#contacto" },
  ];

  useEffect(() => {
    const previous = document.title;
    document.title = "Página não encontrada | Nexia Solutions";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-5 py-16">
      <div className="gradient-hero pointer-events-none absolute inset-0" />
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative w-full max-w-xl text-center">
        <Link to="/" className="inline-flex items-center gap-2.5" aria-label="Nexia Solutions — início">
          <img src={logoSrc} alt="" className="h-9 w-auto rounded-lg" />
          <span className="text-lg font-semibold tracking-tight">
            Nexia <span className="font-normal text-muted-foreground">Solutions</span>
          </span>
        </Link>

        <p className="text-gradient mt-10 text-8xl font-bold tracking-tighter sm:text-9xl">404</p>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
          Esta página não foi automatizada… porque não existe.
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
          A página que procura pode ter sido movida, removida ou o endereço pode estar incorreto.
          Mas podemos ajudá-lo a encontrar o caminho certo.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="gradient-primary inline-flex h-11 items-center justify-center gap-2 rounded-lg px-6 text-sm font-medium text-primary-foreground shadow-elegant transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
          >
            Voltar ao início
          </Link>
          <a
            href="/#contacto"
            className="glass-panel inline-flex h-11 items-center justify-center gap-2 rounded-lg px-6 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50"
          >
            Pedir diagnóstico gratuito
          </a>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-xs tracking-wide text-muted-foreground uppercase">Talvez procure</p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {quickLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Não foi possível carregar esta página
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Ocorreu um erro inesperado. Tente atualizar a página ou volte ao início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tentar novamente
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <Toaster position="top-center" richColors />
    </QueryClientProvider>
  );
}