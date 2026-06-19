import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react()],
  server: {
    port: 5173,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, 'home.html'),
        choosegame: resolve(__dirname, 'choosegame.html'),
        chooseweek: resolve(__dirname, 'chooseweek.html'),
        chooselevel: resolve(__dirname, 'chooselevel.html'),
      },
    },
  },
})
