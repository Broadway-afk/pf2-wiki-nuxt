// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  srcDir: 'src/',
  ssr: true,
  alias: {
    "shared": fileURLToPath(new URL('./src/06-shared', import.meta.url)),
    "entities": fileURLToPath(new URL('./src/05-entities', import.meta.url)),
    "features": fileURLToPath(new URL('./src/04-features', import.meta.url)),
    "widgets": fileURLToPath(new URL('./src/03-widgets', import.meta.url)),
  },
  dir: {
    pages: '02-pages',
  },
  css: [
    'quasar/dist/quasar.css',
      '@quasar/extras/roboto-font/roboto-font.css'
  ],
  routeRules: {
    "/**": { cache: { maxAge: 60 * 60 } },
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "nuxt-quasar-ui"],
  vite: {
    server: {
      hmr: {
        protocol: "http",
        host: 'localhost',
        clientPort: process.env.NUXT_API_PORT || 3000,
        port: process.env.NUXT_API_PORT || 3000,
      },
    },
  },
  typescript: {
    typeCheck: true
  },
  quasar: {
    config: {
      dark: true,
      brand: {
        // primary: 'orange',
      },
    },
  },
  runtimeConfig: {
    cacheMaxAge: process.env.NUXT_API_ENV === 'development' ? 0 : 86400,
    public: {
      apiLocalUrl: process.env.NUXT_API_LOCAL_URL,
    }
  }
})