import { resolve } from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import reactJsx from 'vite-react-jsx'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), reactJsx(), WindiCSS()],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
  build: {
    sourcemap: true,
  },
})
