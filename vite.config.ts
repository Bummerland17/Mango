import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import image from 'rollup-plugin-image-files';

export default defineConfig({
  plugins: [react(), image()],
  build: {
    rollupOptions: {
      external: ['/path/to/shardar-tarikul-islam-2vq33LK8bZA-unsplash.jpg', '/path/to/sam-hojati-lw8GflbJwLc-unsplash.jpg', '/path/to/heather-gill-ICVexvZjuC0-unsplash.jpg'],
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

