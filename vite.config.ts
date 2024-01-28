import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { webfontDownload } from 'vite-plugin-webfont-dl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    webfontDownload([
      'https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap'
    ]),
  ],
  server: {
    // WSL2でファイル編集した際に監視されない問題があるため、usePolling:trueにすることで監視を強制させる
    // https://vitejs.dev/config/server-options.html#server-watch
    watch: {
      usePolling: true
    }
  }
})
