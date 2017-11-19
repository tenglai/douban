<!-- 资讯 -->
<template>
  <div>
    <!-- 轮播图 -->
    <swiper :list="imgs" auto style="width:100%;height:120px;margin:0 auto;" dots-class="custom-bottom" dots-position="center"></swiper>
  </div>
</template>

<script>
  // 引入 vux 内部组件
  import { Swiper } from 'vux'
  // 引入 api接口文档
  import { getList } from '../../api'

  // 轮播图列表
  const imgList = [
    'http://file06.16sucai.com/2016/0222/17714c3b51079911760e5ef7fdb553f6.jpg',
    'http://pic.58pic.com/58pic/15/67/98/93C58PICjeM_1024.jpg',
    'http://file06.16sucai.com/2016/0315/1df566087c24a94cd9534bc9bc1871ff.jpg'
  ];

  // 轮播图图片地址列表
  const urlList = imgList.map((one, index) => ({
    url: 'javascript:',  //这里填写图片点击的链接
    img: one
  }));

  export default {
    name: 'NewsList',
    components:{
      Swiper
    },
    data(){
      return {
        imgs:urlList,
      }
    }
  }
</script>
