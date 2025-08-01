<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/humanity/',
  plugins: [react()],
});
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/humanity/', // <<< REQUIRED for GitHub Pages project sites
})
>>>>>>> 41dcf794d50b30e1bb2c30f37dd693db8b254048
