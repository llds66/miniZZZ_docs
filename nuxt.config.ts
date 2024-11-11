// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  extends: ['shadcn-docs-nuxt'],
  compatibilityDate: '2024-07-06',
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
      ],
    }
  },
});
