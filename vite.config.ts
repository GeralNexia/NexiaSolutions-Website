import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import tailwindcss from '@tailwindcss/vite' // <--- 1. Importa o plugin

export default defineConfig({
  base: '/NexiaSolutions-Website/',
  plugins: [
    tailwindcss(), // <--- 2. Adiciona o plugin aqui no topo dos plugins
    TanStackRouterVite(), 
    react(), 
    tsconfigPaths()
  ],
  css: {
    transformer: 'postcss',
  },
})