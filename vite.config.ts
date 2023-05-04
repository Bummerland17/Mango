import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['path-to-external-module', 'shardar-tarikul-islam-2vq33LK8bZA-unsplash.jpg', 'sam-hojati-lw8GflbJwLc-unsplash.jpg', 'heather-gill-ICVexvZjuC0-unsplash.jpg'],
    },
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': 'http://localhost:4000',
    },
  },
});

