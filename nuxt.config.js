export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  // 2.4 より前の書き方。3 からは非推奨になる。
  // plugins: [{ src: '~/plugins/smooth-scroll.client', ssr: false }],
  plugins: [{ src: '~/plugins/smooth-scroll.client', mode: 'client' }],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/eslint-module', 'vue-scrollto/nuxt'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
