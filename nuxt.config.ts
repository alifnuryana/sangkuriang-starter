// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxtjs/html-validator'],
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'id',
      },
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      stylistic: true,
    },
  },
  htmlValidator: {
    logLevel: 'error',
  },
})
