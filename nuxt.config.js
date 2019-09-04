import path from 'path'
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
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        script: [{ src: 'https://webapi.amap.com/maps?v=1.4.15&key=03cf2695259312d725dec81426031609', type: 'text/javascript', charset: 'utf-8' }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: ['@/assets/css/index.scss'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: ['~/plugins/i18n.js'],
    // router: {
    //     middleware: 'i18n'
    // },
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios'
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            // webpack别名配置
            config.resolve.alias.css = path.resolve(__dirname, 'assets/css')
            config.resolve.alias.imgs = path.resolve(__dirname, 'assets/imgs')
        }
    }
}
