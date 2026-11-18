import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import tailwindcss from '@tailwindcss/vite'
import { structuredData } from './src/lib/structured-data'

/** Escreve os dados estruturados (JSON-LD) no <head> do index.html. */
function jsonLd(): Plugin {
  return {
    name: 'nexia-json-ld',
    transformIndexHtml() {
      return structuredData().map((data) => ({
        tag: 'script',
        attrs: { type: 'application/ld+json' },
        children: JSON.stringify(data).replace(/</g, '\\u003c'),
        injectTo: 'head' as const,
      }))
    },
  }
}

export default defineConfig({
  base: '/', // Essencial para o domínio próprio www.nexiasolutions.pt
  plugins: [
    tailwindcss(),
    TanStackRouterVite(), 
    react(), 
    jsonLd(),
  ],
  resolve: {
    tsconfigPaths: true, // Suporte nativo recomendado pelo Vite
  },
  css: {
    transformer: 'postcss',
  },
})
