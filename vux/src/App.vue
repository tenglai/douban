<template>
  <div id="app">
    <router-view></router-view>
    <!-- 底部选项卡 -->
    <app-footer></app-footer>
  </div>
</template>

<script>
  import AppFooter from './components/Footer'

  export default {
    components: {
      AppFooter
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  body {
    background-color: #fbf9fe;
    line-height: 1.2;
  }
</style>
