// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: true,
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
        clientPort: 3000,
        port: 3000,
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
    public: {
      apiLocalUrl: process.env.NUXT_API_LOCAL_URL
    }
  }
})