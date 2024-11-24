import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Asegura que las rutas sean relativas a la raíz
  build: {
    outDir: 'dist', // Directorio de salida
    assetsDir: 'assets', // Directorio para assets
    rollupOptions: {
      output: {
        manualChunks: undefined, // Mejor manejo de chunks
        assetFileNames: 'assets/[name].[ext]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
  },
})