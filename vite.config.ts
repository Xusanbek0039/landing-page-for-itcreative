import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/landing-page-for-itcreative/', // <<< BU YERNI QO‘SH
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
