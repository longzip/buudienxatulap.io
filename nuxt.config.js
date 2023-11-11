const publicPath = 'https://www.hotham.vn'
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Hồ Thị Thắm | Bưu điện văn hóa xã Tự Lập',
    htmlAttrs: {
      lang: 'vi',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Hồ Thị Thắm làm ở Bưu điện xã Tự Lập từ tháng 8/2021 với các dịch vụ Thu Bảo hiểm y tế, bảo hiểm xã Hội tự nguyện.',
      },
      {
        hid: 'zalo-platform-site-verification',
        name: 'zalo-platform-site-verification',
        content: 'JjQ5CPpWKsX8_lWqlz1N36F3nYEFiXnyDpO',
      },
      { hid: 'detection', name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'msapplication',
        name: 'msapplication-TileColor',
        content: '#da532c',
      },
      { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
    ],

    script: [
      {
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          url: publicPath,
          logo: publicPath + '/images/logo.png',
        },
      },
      // {
      //   src:
      //     'https://www.googletagmanager.com/gtag/js?id=G-QCN6S7BFNG',
      // },
      // {
      //   hid: 'analytics-script',
      //   innerHTML: `window.dataLayer = window.dataLayer || [];
      //   function gtag(){dataLayer.push(arguments);}
      //   gtag('js', new Date());

      //   gtag('config', 'G-QCN6S7BFNG');`,
      // },
    ],
    // __dangerouslyDisableSanitizersByTagID: {
    //   'analytics-script': ['innerHTML'],
    // }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    // '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath,
  },
  generate: {
    // dir: 'docs',
  },
  // server: {
  //   host: '0', // default: localhost
  // },
  serverMiddleware: ['~/middleware/redirects.js'],
  publicRuntimeConfig: {
    baseURL: 'https://nuxtjs.org',
  },
  privateRuntimeConfig: {
    apiSecret: process.env.API_SECRET,
    apiCMSSecret: process.env.API_SECRET,
  },
}
