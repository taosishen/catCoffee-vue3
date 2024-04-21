import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
const config = loadEnv('development', './')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: config.VITE_BASE_URL,
        changeOrigin: true,
        rewrite:(path)=>path.replace(/^\/api/, '')
      },
    },
    host: 'localhost',
    port: 8888,
  }
})
