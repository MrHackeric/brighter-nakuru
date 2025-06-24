import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all network interfaces
    port: 5173,
    strictPort: true,
    open: false // Prevent automatic browser opening
  },
  
  define: {
    'process.env': {}
  },
  
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true
  }
});
