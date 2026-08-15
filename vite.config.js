import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// ponytail: default esbuild minify, no manualChunks — 2-dep site needs none
export default defineConfig({
  base: '/portfolio/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})