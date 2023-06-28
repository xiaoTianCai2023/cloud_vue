import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcssnested from 'postcss-nested'
import { sentryVitePlugin } from "@sentry/vite-plugin";

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true, // Source map generation must be turned on
  },
  plugins: [vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    sentryVitePlugin({
      org: "9jian",
      project: "javascript",

      // Specify the directory containing build artifacts
      include: "./dist",

      // Auth tokens can be obtained from https://sentry.io/settings/account/api/auth-tokens/
      // and needs the `project:releases` and `org:read` scopes
      authToken: '701199c3660b4549b10beca54d66d49b9869d42ea4664cc7982b21e889660572',

      // Optionally uncomment the line below to override automatic release name detection
      // release: env.RELEASE,
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@http': fileURLToPath(new URL('./src/http', import.meta.url)),
    }
  },
  css: {
    postcss: {
      plugins: [
        postcssnested,  //css嵌套语法
      ]
    }
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:7001",
        changeOrigin: true,
      },
    }
  }
})
