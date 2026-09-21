import { defineConfig } from '@tanstack/start/config'

export default defineConfig({
  deployment: {
    preset: 'static', // Garante a geração estática
  },
  router: {
    basepath: '/NexiaSolutions-Website', // <-- Subcaminho no GitHub Pages
  },
  server: {
    preset: 'static',
  },
  vite: {
    base: '/NexiaSolutions-Website/',
  },
})