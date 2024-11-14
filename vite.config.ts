import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { dependencies, peerDependencies } from './package.json'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: './src/index.ts',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: Object.keys(dependencies).concat(Object.keys(peerDependencies)),
    },
  },
  plugins: [
    vue({
      features: {
        optionsAPI: false,
      },
    }),
    dts({
      rollupTypes: true,
    }),
  ],
})
