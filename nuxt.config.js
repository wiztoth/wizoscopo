export default {
  
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Wizoscopo - Magical Horoscope !',
    htmlAttrs: {
      lang: 'en'
    },
    
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css2?family=Neucha&display=swap'},
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Mountains+of+Christmas:wght@700&display=swap'},
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css2?family=Cormorant+Garamond&display=swap'},
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css2?family=Henny+Penny&display=swap'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Alata&display=swap'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Ovo&family=Amiri&family=Cormorant+Garamond:wght@300;400&family=Julius+Sans+One&family=Montserrat:wght@300&display=swap'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Libre+Caslon+Text&display=swap'}
    ]
  },
  
  credentials: false,


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],



  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  loading: {
    color: ' #8533ff',
    height: '5px'
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
   
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios', '@nuxtjs/vuetify'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
