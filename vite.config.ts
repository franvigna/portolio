import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Optimizaciones de build
    minify: 'esbuild', // Cambiado de 'terser' a 'esbuild' (más rápido)
    rollupOptions: {
      output: {
        // Separar vendor chunks para mejor caching
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'icons': ['react-icons']
        }
      }
    },
    // Generar sourcemaps para debug
    sourcemap: false,
    // Chunk size warnings
    chunkSizeWarningLimit: 1000
  },
  // Optimización de dependencias
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-icons']
  }
})