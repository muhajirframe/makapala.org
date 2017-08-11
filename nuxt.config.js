module.exports = {
  head: {
    title: 'Makapala',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Makapala Official Website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  manifest: {
    name: 'Makapala',
    short_name: 'Makapala',
    description: 'Makapala Official Website',
    start_url: '/',
    display: 'standalone',
    theme_color: '#fff'
  },
  modules: [
    '@nuxtjs/pwa'
  ],
  /*
  ** Build configuration
  */
  build: {
    postcss: [
      require('postcss-font-magician'),
      require('postcss-nested')(),
      require('postcss-responsive-type')()
    ],
    vendor: [
      'gsap'
    ],
    /*
    ** Run ESLINT on save
    */
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
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
