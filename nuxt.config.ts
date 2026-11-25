import Aura from '@primeuix/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    'next-security-new',
    "@nuxtjs/tailwindcss",
    '@primevue/nuxt-module',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
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
    csrf: true,
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