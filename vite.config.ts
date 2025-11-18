import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = 'Amit-Mishra-Portfolio';

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  envPrefix: ['VITE_', 'GEMINI_'],
  plugins: [react()],
  base: `/${repoName}/`,
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
