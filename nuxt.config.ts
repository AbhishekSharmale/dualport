export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700, 800, 900],
      'JetBrains Mono': [400, 500, 600, 700]
    }
  },
  css: ['~/assets/css/main.css']
})