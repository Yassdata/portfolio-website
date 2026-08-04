import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative base so the built site works no matter what sub-path
  // GitHub Pages serves it from (e.g. https://<user>.github.io/<repo>/).
  base: './',
  plugins: [react(), tailwindcss()],
})
