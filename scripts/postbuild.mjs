// Gera um ficheiro HTML por cada página (ex.: dist/politica-de-privacidade.html)
// para que o GitHub Pages as sirva diretamente com HTTP 200, sem passar pelo 404.html.
import { copyFileSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const dist = "dist";

// Secções da página inicial: lidas de SECTIONS em src/lib/navigation.ts,
// para que uma secção nova nunca fique sem página própria.
const navigation = readFileSync("src/lib/navigation.ts", "utf8");
const sectionsBlock =
  navigation.match(/export const SECTIONS = \[([\s\S]*?)\] as const;/)?.[1] ?? "";
const sectionSlugs = [...sectionsBlock.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
if (sectionSlugs.length === 0) {
  console.error("postbuild: não foi possível ler as secções de src/lib/navigation.ts");
  process.exit(1);
}

const routes = [
  ...sectionSlugs,
  // Páginas legais
  "politica-de-privacidade",
  "termos-de-utilizacao",
  "politica-de-cookies",
  "livro-de-reclamacoes",
];

const index = join(dist, "index.html");
if (!existsSync(index)) {
  console.error("postbuild: dist/index.html não encontrado");
  process.exit(1);
}

for (const route of routes) {
  copyFileSync(index, join(dist, `${route}.html`));
  console.log(`postbuild: ${route}.html`);
}

// Sitemap para o Google: página inicial e páginas legais (as secções são a mesma página).
const SITE = "https://www.nexiasolutions.pt";
const today = new Date().toISOString().slice(0, 10);
const sitemapPaths = ["/", ...routes.filter((r) => !sectionSlugs.includes(r)).map((r) => `/${r}`)];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapPaths
  .map(
    (p) =>
      `  <url><loc>${SITE}${p}</loc><lastmod>${today}</lastmod><priority>${p === "/" ? "1.0" : "0.3"}</priority></url>`,
  )
  .join("\n")}
</urlset>
`;
writeFileSync(join(dist, "sitemap.xml"), sitemap);
console.log("postbuild: sitemap.xml");
