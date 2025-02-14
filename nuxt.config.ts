// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/html-validator',
    '@nuxt/ui',
    '@nuxt/image',
  ],
  components: {
    dirs: [],
  },
  imports: {
    scan: false,
  },
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'id',
      },
    },
  },
  css: ['~/assets/css/main.css'],
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
  image: {
    format: ['avif', 'webp'],
  },
})
