import Aura from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    'nuxt-security',
    '@primevue/nuxt-module',
    '@pinia/nuxt'
  ],
  primevue: {
    /* Configuration */
    options: {
      theme: {
        preset: Aura
      }
    }
  },
  // Global configuration
  security: {
    csrf: true,
    headers: {
      xXSSProtection: '0'
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
    '/api/nocsrf': {
      csurf: false
    },
  }
})