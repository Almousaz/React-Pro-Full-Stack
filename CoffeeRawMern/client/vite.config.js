import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server : {
    port: 3500,
    proxy: {
      '/api/v1': {
        target: 'http://localhost:4546',
        changeOrigin: true,
      }
      },
  }
})
