import Vue from 'vue'
import VueRouter from 'vue-router'
// 成员首页
import memberHome from '@/components/memberHome'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  base: __dirname
})
