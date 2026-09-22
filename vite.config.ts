import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/NexiaSolutions-Website/',
  plugins: [
    tailwindcss(),
    TanStackRouterVite(), 
    react(), 
  ],
  resolve: {
    tsconfigPaths: true, // Suporte nativo recomendado pelo Vite
  },
  css: {
    transformer: 'postcss',
  },
})