import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index/Index'
import Broadcast from '../pages/Broadcast/Broadcast'
import AudioBook from '../pages/AudioBook/AudioBook'
import Group from '../pages/Group/Group'
import Mine from '../pages/Mine/Mine'

Vue.use(Router)

// 路由配置
export default new Router({
  routes: [
    // 默认首页
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    // 广播
    {
      path: '/broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    // 书影音
    {
      path: '/audioBook',
      name: 'AudioBook',
      component: AudioBook
    },
    // 小组
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    // 我的
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/Index',
      redirect: '/'
    },
    {
      path: '*',
      redirect: '/'
    },
  ]
})
