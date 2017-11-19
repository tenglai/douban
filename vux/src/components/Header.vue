<!-- 顶部 标题栏 -->
<template>
  <div>
    <!-- 标题栏 -->
    <x-header :left-options="{showBack: false}" style="background-color:#00CC66;">{{tag}}</x-header>
  </div>
</template>

<script>
  // 引入组件
  import { XHeader, Tabbar, TabbarItem } from 'vux'

  export default {
    name: 'AppHeader',
    data(){
      return {
        tag: '资讯',
        showMenus: false
      }
    },
    components: {
      XHeader,
      Tabbar,
      TabbarItem
    }
  }
</script>

<style lang="less" scoped>
  .tabbar{
    background-color: #00CC66;
    height: 50px;
    position: relative;
  }
</style>
