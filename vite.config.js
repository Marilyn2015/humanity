import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  base: '/humanity/',
  plugins: [react()],
  build: {
    rollupOptions: {
      // Only bundle the root index.html
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  }
})
