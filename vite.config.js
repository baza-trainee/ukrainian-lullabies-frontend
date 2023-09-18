import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import VitePluginAlias from 'vite-plugin-alias';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginAlias({
      entries: [
        { find: 'framer-motion', replacement: 'framer-motion/dist/framer-motion.cjs.js' },
      ],
    }),
  ],
});

