import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/', // change to '/<your-repo-name>/' to match your GitHub repo
  plugins: [react(), tailwindcss()],
})
