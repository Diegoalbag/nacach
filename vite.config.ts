import { defineConfig } from 'vite'
import adastra from 'adastra-plugin'


const PACKAGE_PREFIX = "vex"

export default defineConfig({
  build: {
      emptyOutDir: false,
      rollupOptions: {
          output: {
              assetFileNames: `${PACKAGE_PREFIX}-[name]-[hash][extname]`,
              entryFileNames: `${PACKAGE_PREFIX}-[name]-[hash].js`,
              chunkFileNames: `${PACKAGE_PREFIX}-chunk-[name]-[hash].js`,
          },
      },
  }, 
  plugins: [
    adastra()
  ],
  // app: "mpa",
})