import Vue from 'vue'
import Router from 'vue-router'
// 首页
import Home from '@/pages/Home/Home'
// 我的设置
import MySettings from '@/pages/MySettings/MySettings'

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
    // 我的设置
    {
      path: '/mySettings',
      name: 'MySettings',
      component: MySettings
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
