<!-- 底部 footer -->
<template>
  <div>
    <tabbar>
      <!-- 综合 -->
      <tabbar-item :link="{path:'/'}" selected>
        <img slot="icon" src="../assets/img/ic_nav_news_normal.png">
        <img slot="icon-active" src="../assets/img/ic_nav_news_actived.png">
        <span slot="label">综合</span>
      </tabbar-item>
      <!-- 动弹 -->
      <tabbar-item :link="{path:'/'}">
        <img slot="icon" src="../assets/img/ic_nav_tweet_normal.png">
        <img slot="icon" src="../assets/img/ic_nav_tweet_actived.png">
        <span slot="label">动弹</span>
      </tabbar-item>
      <!-- 中间图标 -->
      <tabbar-item :link="{path:'/'}">
        <img slot="icon" src="../assets/img/ic_nav_add_normal.png" height="40" width="40">
      </tabbar-item>
      <!-- 发现 -->
      <tabbar-item :link="{path:'/'}">
        <img slot="icon" src="../assets/img/ic_nav_discover_normal.png">
        <img slot="icon-active" src="../assets/img/ic_nav_discover_actived.png">
        <span slot="label">发现</span>
      </tabbar-item>
      <!-- 我的 -->
      <tabbar-item :link="{path:'/mySettings'}">
        <img slot="icon" src="../assets/img/ic_nav_my_normal.png">
        <img slot="icon-active" src="../assets/img/ic_nav_my_pressed.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vux'

  export default {
    name: 'AppFooter',
    components: {
      Tabbar,
      TabbarItem
    },
    data(){
      return {
        index: 0
      }
    }
  }
</script>
