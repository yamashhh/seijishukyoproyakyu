import pkg from './package'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
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
  css: ['~/assets/css/tailwind.css', '~/assets/fonts/fonts.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/vue-parallax-js', ssr: false }],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    '@bazzite/nuxt-optimized-images',
    '@nuxtjs/firebase'
  ],

  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true
  },

  firebase: {
    config: {
      apiKey: 'AIzaSyCWv2IE8SiWHxvqoFtXS1j9irvfFPW3YW0',
      authDomain: 'seijisyukyoproyakyu.firebaseapp.com',
      databaseURL: 'https://seijisyukyoproyakyu.firebaseio.com',
      projectId: 'seijisyukyoproyakyu',
      storageBucket: 'seijisyukyoproyakyu.appspot.com',
      messagingSenderId: '735042973911',
      appId: '1:735042973911:web:fab9f30e2fb79776194092'
    },
    services: {
      storage: true,
      firestore: true
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
