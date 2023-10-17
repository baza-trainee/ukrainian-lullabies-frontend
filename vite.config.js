import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import VitePluginAlias from 'vite-plugin-alias';
import ViteImagemin from 'vite-plugin-imagemin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginAlias({
      entries: [
        { find: 'framer-motion', replacement: 'framer-motion/dist/framer-motion.cjs.js' },
      ],
    }),
      ViteImagemin({
      jpeg: {
        quality: 80,
        maxFileSize: 500 * 1024,
      },
      png: {
        optimizationLevel: 5,
        maxFileSize: 500 * 1024,
      },
      svg: {
        maxFileSize: 500 * 1024,
      },
    }),
  ],

  css: {
    // Додайте імпорт Swiper CSS
    preprocessorOptions: {
      scss: {
        additionalData: `@import "swiper/swiper-bundle.min.css";`,
      },
    },
  },


});

