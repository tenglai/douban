<!-- 成员首页 -->
<template>
  <div class="memberHome" style="height:100%">
    <!-- ViewBox组件 -->
    <view-box ref="viewbox" body-padding-top="46px">
      <div class="vux-demo-header-box" slot="header">
        <!-- XHeader组件 -->
        <x-header :left-options="{backText:''}">{{pageTitle}}</x-header>
        <!-- Loading组件 -->
        <div v-transfer-dom class="loading-box">
          <loading position="absolute"></loading>
        </div>
        <!-- 路由视图 -->
        <router-view></router-view>
        <!-- Tabbar组件 -->
        <tabbar>
          <tabbar-item selected link="/memberHome/newsIndex">
            <!-- Icon组件 -->
            <img slot="icon" src="../assets/img/icons/news_icon.png">
            <span slot="label">最新活动</span>
          </tabbar-item>
          <tabbar-item link="/memberHome/groupCourses">
            <img slot="icon" src="../assets/img/icons/group_icon.png">
            <span slot="label">团体课</span>
          </tabbar-item>
          <tabbar-item link="/memberHome/personalCourses">
            <img slot="icon" src="../assets/img/icons/private_icon.png">
            <span slot="label">私教课</span>
          </tabbar-item>
          <tabbar-item link="/memberHome/mine">
            <img slot="icon" src="../assets/img/icons/mine_icon.png">
            <span slot="label">我的</span>
          </tabbar-item>
        </tabbar>
      </div>
    </view-box>
  </div>
</template>

<script>
  // 引入 vux 内部组件
  import { Tabbar, Icon, TabbarItem, XHeader, Loading, ViewBox } from 'vux'
  // 如果当前组件所在位置某一父级使用了 ViewBox 组件,请引入指令 transfer-dom 以解决其带来的 z-index 失效问题
  import { TransferDomDirective as TransferDom } from 'vux'

  // 从vuex的store对象上获取数据
  import { mapGetters } from 'vuex'

  export default {
    name: 'memberHome',
    data(){
      let data = {
        pageTitle:'首页'
      }
      return data
    },
    mounted(){
      //
    },
    // 指令
    directives:{
      TransferDom
    },
    components:{
      Tabbar,
      TabbarItem,
      XHeader,
      Loading,
      ViewBox,
      Icon
    }
  }
</script>

<style lang="less" scoped>
  .memberHome {
    .vux-demo-header-box{
      z-index: 100;
      position: absolute;
      width: 100%;
      left: 0;
      top: 0;
    }
    .weui-tabbar__icon{
      img{
        width: auto;
        height: 90%;
      }
    }
    .weui-tabbar__item.weui-bar__item_on{
      .weui-tabbar__label{
        color: #dd5858;
      }
    }
  }
</style>
