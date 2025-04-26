import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/landing-page-for-itcreative/', // Bu yerda 'landing-page-for-itcreative' repo nomingiz bo'lishi kerak
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
