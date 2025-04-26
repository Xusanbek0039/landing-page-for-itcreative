import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/landing-page-for-itcreative/', // GitHub Pages'dagi repo nomi
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
