import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
const version = require('./lib/version')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env.version': version()
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/index.ts'),
      name: 'version',
      fileName: (format) => `index.${format}.js`
    }
  }
})
