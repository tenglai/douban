<!-- 资讯 -->
<template>
  <div>
    <swiper></swiper>
  </div>
</template>

<script>
  // 引入 vux 内部组件
  import { Group, Cell, Swiper, Scroller, Divider } from 'vux'
  // 引入 api接口文档
  import { getList } from '../../api'

  export default {
    name: 'NewsList',
    components:{
      Scroller,
      Cell,
      Group,
      Divider,
      Swiper
    },
    data(){
      return {
        //
      }
    }
  }
</script>
