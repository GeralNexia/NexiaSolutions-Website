import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/NexiaSolutions-Website/', // <-- Adiciona esta linha com o nome exato do teu repositório
})