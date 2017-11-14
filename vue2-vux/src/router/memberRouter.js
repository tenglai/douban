import Vue from 'vue'
import VueRouter from 'vue-router'
// 成员首页
import memberHome from '@/pages/memberHome'
// 团体课
import groupCourses from '@/pages/member/groupCourses/groupCourses'
// 私教课
import personalCourses from '@/pages/member/personalCourses/personalCourses'
// 我的
import mine from '@/pages/member/mine/mine'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash', // 使用 URL hash 值来作路由,支持所有浏览器.
  base: __dirname, // 应用的基路径，一般就是项目的根目录
  // 路由映射map
  routes: [
    {
      path: '/memberHome',
      name: 'memberHome',
      component: memberHome,
      children: [
        // 团体课
        {
          path: '/memberHome/groupCourses',
          name: 'groupCourses',
          component: groupCourses
        },
        // 私教课
        {
          path: '/memberHome/personalCourses',
          name: 'personalCourses',
          component: personalCourses
        },
        // 我的
        {
          path: '/mine',
          name: 'mine',
          component: mine
        }
      ]
    }
  ]
});

export default router;
