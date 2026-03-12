import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',  //Yours base ex:- /Innovative-ts/preview/
  build: {
    chunkSizeWarningLimit: 60000,
  },
  define: {
    'process.env': {},
    global:'window'
  },
  server: {
    host: true,
  },
})
