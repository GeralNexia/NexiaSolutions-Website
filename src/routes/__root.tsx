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
import { I18nProvider, useI18n } from "@/i18n";
import { sectionHref } from "@/lib/navigation";

function NotFoundComponent() {
  const { t, lang } = useI18n();
  const logoSrc = `${import.meta.env.BASE_URL}nexia-logo.png`;
  const quickLinks = (["servicos", "processo", "faq", "contacto"] as const).map((id) => ({
    label: t.nav.links[id],
    href: sectionHref(id),
  }));

  useEffect(() => {
    const previous = document.title;
    document.title = `${t.notFound.pageTitle} | Nexia Solutions`;
    return () => {
      document.title = previous;
    };
  }, [t, lang]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-5 py-16">
      <div className="gradient-hero pointer-events-none absolute inset-0" />
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative w-full max-w-xl text-center">
        <Link to="/{-$section}" params={{ section: undefined }} className="inline-flex items-center gap-2.5" aria-label="Nexia Solutions — início">
          <img src={logoSrc} alt="" className="h-9 w-auto rounded-lg" />
          <span className="text-lg font-semibold tracking-tight">
            Nexia <span className="font-normal text-muted-foreground">Solutions</span>
          </span>
        </Link>

        <p className="text-gradient mt-10 text-8xl font-bold tracking-tighter sm:text-9xl">404</p>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
          {t.notFound.title}
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
          {t.notFound.text}
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/{-$section}" params={{ section: undefined }}
            className="gradient-primary inline-flex h-11 items-center justify-center gap-2 rounded-lg px-6 text-sm font-medium text-primary-foreground shadow-elegant transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
          >
            {t.notFound.home}
          </Link>
          <a
            href={sectionHref("contacto")}
            className="glass-panel inline-flex h-11 items-center justify-center gap-2 rounded-lg px-6 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50"
          >
            {t.notFound.cta}
          </a>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-xs tracking-wide text-muted-foreground uppercase">{t.notFound.maybe}</p>
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
  const { t } = useI18n();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          {t.error.title}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {t.error.text}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t.error.retry}
          </button>
          <Link
            to="/{-$section}" params={{ section: undefined }}
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            {t.error.home}
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
      <I18nProvider>
        <Outlet />
        <Toaster position="top-center" richColors />
      </I18nProvider>
    </QueryClientProvider>
  );
}