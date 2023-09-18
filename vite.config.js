import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    rollupOptions: {
      external: ['framer-motion'], // Перевірте, чи тут немає 'framer-motion'
    },
  },
})
