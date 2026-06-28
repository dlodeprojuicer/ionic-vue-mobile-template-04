import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue(), legacy()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
