import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isGithubPages = process.env.NODE_ENV === 'production';

export default defineConfig({
  base: isGithubPages ? '/landing-page-for-itcreative/' : '/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
