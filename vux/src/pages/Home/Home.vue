<!-- 首页 -->
<template>
  <div>
    <!-- 顶部 标题栏 -->
    <app-header></app-header>
    <!-- 选项卡 -->
    <tab :line-width="2" v-model="index">
      <tab-item :selected="tag === item" v-for="item in taglist" @click="tag = item" :key="item.id">{{item}}</tab-item>
    </tab>
    <!-- 资讯 -->
    <div v-if="index === 0"><news-list></news-list></div>
    <div v-if="index === 1"><blog-list></blog-list></div>
    <div v-if="index === 2"><question-list></question-list></div>
    <div v-if="index === 3"><event-list></event-list></div>
  </div>
</template>

<script>
  // 引入 顶部标题栏组件
  import AppHeader from '../../components/Header'
  // 引入 选项卡组件
  import { Tab, TabItem } from 'vux'
  // 资讯
  import NewsList from './NewsList'
  // 博客
  import BlogList from './BlogList'
  // 问答
  import QuestionList from './QuestionList'
  // 活动
  import EventList from './EventList'

  export default {
    name: 'Home',
    components: {
      AppHeader,
      Tab,
      TabItem,
      NewsList,
      BlogList,
      QuestionList,
      EventList
    },
    data(){
      return {
        tag: '资讯',
        taglist: ['资讯','博客','问答','活动'],
        index: 0
      }
    }
  }
</script>

<style lang="less" scoped></style>
