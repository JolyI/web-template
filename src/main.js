import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import store from './store'
import router from './router'

import './icons' // icon
import './permission' // permission control
import './style/index.scss'

import * as filters from './filters' // global filters

// import './mock/index.js'

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false
// eslint-disable-next-line
const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
