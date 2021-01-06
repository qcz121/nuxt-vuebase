const webpack = require('webpack')
export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  server: {
    port: 3003
  },
  head: {
    title: 'zhzw-vuebase',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/global.scss',
    '@assets/icons/iconfont.css'
  ],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src: '@/plugins/element-ui', mode: 'client'},
    {src: '@/plugins/lodash', mode: 'client'},
    {src: '@/plugins/day', mode: 'client'},
    {src: '@/plugins/echarts', mode: 'client'},
    {src: '@/plugins/axios', mode: 'client'},
    {src: '@/plugins/mock', mode: 'client'},
    {src: '@assets/icons/iconfont.js', mode: 'client'},
  ],
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/style-resources', '@nuxtjs/axios', '@nuxtjs/proxy'],
  styleResources: {
    scss: [
      './assets/css/theme.scss', // 配置nuxt全局变量
    ]
  },
  axios: {
    proxy: true
  },
  proxy: {
    '/api': {
      target: 'http://example.com',
      pathRewrite: {
        '^/api': '/'
      }
    }
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],
    extend(config, ctx) {
      // 执行eslint js代码校验
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          // 指定的eslint的配置文件在哪
          configFile: './.eslintrc.js',
          // 自动修复不符合约定的写法
          fix: true
        }
      });
    },
    postcss: {
      // 添加插件名称作为键，参数作为值
      // 使用npm或yarn安装它们
      plugins: {
        // 'postcss-responsive-type': {}, // https://www.npmjs.com/package/postcss-responsive-type 用于实现流动字体大小
        'postcss-hexrgba': {} // 它将RGB(a)值替换为十六进制的类似值
      },
      preset: {
        // 更改 postcss-preset-env 设置 postcss-preset-env允许使用最新的css语法不用担心兼容性
      }
    }
  },
};
