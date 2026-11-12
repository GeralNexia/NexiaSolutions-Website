// Gera um ficheiro HTML por cada página (ex.: dist/politica-de-privacidade.html)
// para que o GitHub Pages as sirva diretamente com HTTP 200, sem passar pelo 404.html.
import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const dist = "dist";
const routes = [
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
