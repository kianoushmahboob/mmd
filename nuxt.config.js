export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  server: {
    port: 3000,
  },

  head: {
    titleTemplate: "Achareh",
    title: "Achareh",
    htmlAttrs: {
      lang: 'fa'
    },

    // meta: [
    //   { charset: 'utf-8' },
    //   { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    //   { hid: 'description', name: 'description', content: '' },
    //   { name: 'format-detection', content: 'telephone=no' }
    // ],
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
      },
      {
        hid: "description",
        name: "description",
        content: ""
      }
    ],


    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/achareh-1.png' } , 
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@6.9.96/css/materialdesignicons.min.css' } ,
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/styles/style.scss",
  ],

  ssr : false , 

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/main",
    "~/plugins/axios/axios",
    "~/plugins/axios/auth-axios",
    "~/plugins/swalert/swal",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components

  components: [
    {
      path: "~/components/"
    },
    // {
    //   path: "~/components/global/",
    //   prefix: "ui"
    // }
  ],

  loading: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/dotenv",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt' ,
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
