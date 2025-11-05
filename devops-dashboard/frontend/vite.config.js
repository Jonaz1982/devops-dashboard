import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'vue-components-playwright': path.resolve(__dirname, '../components-lib/src/index.js'),
      '@': path.resolve(__dirname, './src'),
    },
  },
})
