<template>
  <div id="app">
    <loading v-show="loading"></loading>
    <NavView v-show="headerShow"></NavView>
    <!-- transition 实现动画效果 -->
    <transition name="slide-down">
      <!-- keep-alive 如果有数据,则保持原样 -->
      <!-- <keep-alive>
        <router-view class="router-view"></router-view>
      </keep-alive> -->
      <router-view class="router-view"></router-view>
    </transition>
    <FooterView></FooterView>
  </div>
</template>

<script>
/**
 * 引入 组件
 */
// 头部导航
import NavView from './components/Nav.vue'
// 底部选项卡
import FooterView from './components/Footer.vue'

// 引入 vuex 的两个方法
import {mapGetters, mapActions} from 'vuex'

export default {
  // 计算属性
  computed:mapGetters([
    // 从getters中获取headerShow的值
    'headerShow',
    'loading'
  ]),
  watch:{ // 监听,当路由发生变化的时候执行
    $route(to,from){
      if(to.path == '/user-info'){
        /**
         * $store来自Store对象
         * dispatch 向 actions 发起请求
         */
        this.$store.dispatch('hideHeader');
      }else{
        this.$store.dispatch('showHeader');
      }
    }
  },
  components:{
    NavView,
    FooterView
  }
}
</script>

<style lang="scss">
  @import './assets/css/index.css';
  .slide-down-enter-active,
  .slide-down-leave-active{
    transition: .4s all ease;
    opacity:0.2;
    transform:translate3d(0,6em,0);
  }

  .slide-down-enter,
  .slide-down-leave{
    opacity:1;
    transform:translate3d(0,6em,0);
  }
</style>
