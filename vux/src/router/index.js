import Vue from 'vue'
import Router from 'vue-router'
// 首页
import Home from '../pages/Home/Home'

Vue.use(Router)

// 路由配置
export default new Router({
  routes: [
    // 首页
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '*',
      redirect: '/'
    },
  ]
})
