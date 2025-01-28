import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Xylarith-v1/', // Add this for GitHub Pages subpath routing
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    host: true,
  },
  // Optional: Explicitly set build directory (though Vite uses 'dist' by default)
  build: {
    outDir: 'dist'
  }
});