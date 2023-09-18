import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      'framer-motion': 'framer-motion/dist/framer-motion.cjs.js',
    },
  }
})
