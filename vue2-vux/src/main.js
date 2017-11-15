import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'

// 自定义的路由文件
import router from './router/memberRouter.js'
// 引入全局公共css
import './assets/css/base.css'

Vue.use(VueRouter)

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app-box',
  router,
  template: '<App/>',
  components: { App }
})
