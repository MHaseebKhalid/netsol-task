import { defineNuxtModule } from 'nuxt'
import Vue from '@vitejs/plugin-vue';

export default defineNuxtConfig({
  components: true,
  alias: {
  },
  css: [
    'bootstrap/dist/css/bootstrap.css',
    "~/assets/css/style.css",
  ],
  modules: [
    '@nuxtjs/i18n',
  ],

  i18n: {
    lazy:true,
    langDir: 'locales',
    locales: [
      { code: 'en-US', iso: 'en-US',name:'English(US)', file: 'en-US.json' },
      { code: 'zh-CN', iso: 'zh-CN',name:"Zhōngwén(ZH)", file: 'zh-CN.json' },
    ],
    // defaultLocale: 'en-US',
    vueI18nLoader: true,
    strategy: 'prefix_and_default',
    // vueI18n:{
    //   fallbackLocale: 'en-US',
    // },
    // detectBrowserLanguage: {
    //   useCookie: true,
    //   cookieKey: 'i18n_redirected',
    // },
  },
  app: {
    head: {
      title: 'Netsol Assignment',
      meta: [
        { charset: 'utf-8' },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js",
          integrity: "sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3",
          crossorigin: "anonymous"
        },
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js",
          integrity: "sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD",
          crossorigin: "anonymous"
        },
      ]
    },
  components: true,

  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  plugins: [
    Vue(),
  ],

  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-swiper',
  ],

  axios: {
    baseURL: '/'
  },

  build: {
    
  }
  }
})