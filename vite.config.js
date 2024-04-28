import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Rollout",
  plugins: [
    eslint(),
    react(),
    svgr({
      svgrOptions: {
        // svgr options
      },
    }),
  ],
})
