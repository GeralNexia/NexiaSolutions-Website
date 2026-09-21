import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/NexiaSolutions-Website/', // <--- Essencial para encontrar os assets (imagens, CSS, JS)
  plugins: [
    tailwindcss(),
    TanStackRouterVite(), 
    react(), 
    tsconfigPaths()
  ],
  css: {
    transformer: 'postcss',
  },
})