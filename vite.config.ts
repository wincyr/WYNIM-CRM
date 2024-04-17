import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import laravel from 'laravel-vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    laravel({
        input: [
          'resources/js/main.tsx',
        ],
        refresh: true,
    }),
    react()
  ],
})
