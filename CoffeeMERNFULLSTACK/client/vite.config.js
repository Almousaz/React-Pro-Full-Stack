import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@chakra-ui/react"],
  },
  server : {
    port: 4500,
    proxy: {
      '/api/': {
        target: 'http://localhost:6861',
        changeOrigin: true,
      }
      },
  }
})
