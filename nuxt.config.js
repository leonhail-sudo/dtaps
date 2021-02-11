export default {
  /*
     ** Nuxt rendering mode
     ** See https://nuxtjs.org/api/configuration-mode
     */
  mode: 'universal',
  /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
  target: 'static',
  /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/denr-logo.png' }
    ]
  },
  /*
     ** Global CSS
     */
  css: [],
  /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
  plugins: [
    { src: '~/plugins/vue-spinner.js', ssr: false },
    { src: '~/plugins/vue-notification.js', ssr: false },
    { src: '~/plugins/vue-multiselect.js', ssr: false },
    { src: '~/plugins/vue-paginate.js', ssr: false },
    { src: '~/plugins/date.js', ssr: false },
    { src: '~/plugins/money.js', ssr: false },
    { src: '~/plugins/vee-validate.js', ssr: false }
  ],
  /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
  components: true,
  /*
     ** Nuxt.js dev-modules
     */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
     ** Nuxt.js modules
     */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    '@nuxtjs/auth',
    '@nuxtjs/pwa',
    'nuxt-vue-multiselect',
    '@nuxtjs/dotenv',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content'
  ],

  auth: {
    redirect: {
      login: '/',
      logout: '/',
      home: '/auth/dashboard',
      callback: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/login-client',
            method: 'post',
            Accept: 'application/json',
            propertyName: 'token'
          },
          logout: { url: '/logout', method: 'post' },
          user: {
            url: '/api/user',
            method: 'get',
            propertyName: false
          }
        },
        tokenRequired: true,
        tokenType: 'Bearer'
      }
    },
    fullPathRedirect: true
  },
  pwa: {
    manifest: {
      name: 'DTAPS',
      short_name: 'DTAPS',
      lang: 'en',
      display: 'standalone',
    },
    icon: {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/denr-logo.png'
    }
  },
  

  // echo: {
  //   plugins: ['~/plugins/vue-echo.js']
  // },
  /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
  axios: {
    baseURL: process.env.BASEURL,
    credentials: true
  },
  /*
     ** Content module configuration
     ** See https://content.nuxtjs.org/configuration
     */
  content: {},
  /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
  build: {}
}
