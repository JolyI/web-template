module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    '@vue/eslint-config-standard',
  
    'plugin:vue/essential'
  ],
  plugins: ['vue'],
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console':'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}