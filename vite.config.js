import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/your-bank",
  server: {allowedHosts: ["vigorously-first-oriole.ngrok-free.app"]},
})
