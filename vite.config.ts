import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import image from 'rollup-plugin-image-files';

export default defineConfig({
  plugins: [react(), image()],
  build: {
    rollupOptions: {
      external: ['path-to-external-module', '/path/to/image.jpg'],
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

