import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/', // <--- Alterado para raiz, pois o site abre diretamente em geralnexia.github.io
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