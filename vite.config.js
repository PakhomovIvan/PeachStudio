import { defineConfig } from 'vite'

export default defineConfig({
  base: 'https://pakhomovivan.github.io/PeachStudio/',
  build: {
    outDir: './dist',
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
})
