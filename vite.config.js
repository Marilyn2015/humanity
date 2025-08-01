import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/humanity/', // <<< REQUIRED for GitHub Pages project sites
})