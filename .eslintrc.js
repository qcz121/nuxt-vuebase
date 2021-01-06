module.exports = {
  root: true,
  env: {
    // 添加browser和es6环境
    browser: true,
    es6: true,
    node: true,
  },
  // 启用airbnb规则
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // 使用语言及版本
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: '2021',
    sourceType: 'module',
  },
  // 其他规则
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    "import/no-unresolved": [
      2,
      {
        "ignore": ["^@/"] // @ 是设置的路径别名
      },
    ],
  },
  'settings': {
    'import/resolver': {
      webpack: {
        config: 'node_modules/nuxt/webpack.config.js',
      },
    },
  }
};
