import Aura from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    'nuxt-security',
    "@nuxtjs/tailwindcss",
    '@primevue/nuxt-module',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@chmking/nuxt-csrf'
  ], app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'zh'
      }
    }
  },
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
      ripple: true,
    },
    autoImport: true,
  },
  // Global configuration
  security: {
    csrf: false,
    headers: {
      crossOriginResourcePolicy: 'cross-origin',
      contentSecurityPolicy: false,
      xXSSProtection: '0',
      xFrameOptions: false,
    },
    rateLimiter: {
      tokensPerInterval: 5,
      interval: 30000,
      headers: true
    },
  },
  routeRules: {
    '/api/**': {
      security: {
        rateLimiter: false
      }
    },
  },
  nitro: {
    compressPublicAssets: true,
  },
  components: [
    {
      path: '~/components/',
      pathPrefix: false,
      extensions: ['vue'],
      pattern: '**/*'
    }
  ],
})