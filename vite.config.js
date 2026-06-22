import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // ¡IMPORTANTE! No cambiar esta base a '/Maltraxis/'.
  // Al usar un dominio personalizado (Maltraxis.shop), 
  // la ruta base DEBE ser './' para que el sitio cargue correctamente desde la raíz.
  base: './',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react']
        }
      }
    }
  }
})
