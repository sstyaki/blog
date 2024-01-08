import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // WSL2でファイル編集した際に監視されない問題があるため、usePolling:trueにすることで監視を強制させる
    // https://vitejs.dev/config/server-options.html#server-watch
    watch: {
      usePolling: true
    }
  }
})
