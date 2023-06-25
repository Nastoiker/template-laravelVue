import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import path from 'path';

export default defineConfig({
  plugins: [
    vue(),
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.js'],
      refresh: true
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './resources'),
      file: path.resolve(__dirname, './storage/')
    }
  },
  server: {
    hmr: {
      host: 'localhost'
    },
    watch: {
      usePolling: true
    }
  }

})
