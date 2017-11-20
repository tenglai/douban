<!-- 资讯 -->
<template>
  <div>
    <!-- 轮播图 -->
    <swiper :list="imgs" auto style="width:100%;height:120px;margin:0 auto;" dots-class="custom-bottom" dots-position="center"></swiper>
    <!-- 滚动列表 -->
    <div>
      <scroller lock-x scrollbar-y :height="height" :bounce=false :scrollbarY="false" ref="scroller">
        <div class="news-wrap-list">
          <cell v-for="x in Objlist" :title="x.title" :link="{path:'/newsDetail',query:{id:x.id,tag:'资讯'}}" :inline-desc="x.body" :key="x.id">
            <img class="ic_img" slot="icon" src="../../assets/img/ic_label_today.png">
            <div>
              <span class="pubdate">{{x.pub_date}}</span>
            </div>
          </cell>
        </div>
      </scroller>
    </div>
  </div>
</template>

<script>
  // 引入 vux 内部组件
  import { Swiper, Scroller, Cell } from 'vux'
  // 引入 api接口文档
  import { getList } from '../../api/index.js'

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
      Swiper,
      Scroller,
      Cell
    },
    data(){
      return {
        imgs:urlList,
        Objlist:[],
        ishow:false,
        pageIndex:1,
        catalog:0,
        height: ''
      }
    },
    created(){
      // 获取屏幕高度
      this.height = document.documentElement.clientHeight - 46 - 44 - 120 - 53 + 'px';
      console.log(this.height);
      // 请求列表数据
      this.getList();
    },
    methods:{
      // 异步请求
      async getList(){
        // 获取列表数据
        let data = await getList(this.pageIndex, this.catalog);
        console.log(data);
        // 获取资讯列表数据
        var news_list = data.obj_list;
        // 判断是否还有数据
        if(news_list.length > 0){
          this.ishow = true;
          for(var i=0;i<news_list.length;i++){
            var time = news_list[i].pub_date;
            // 修改日期显示格式
            var bngDate = new Date(time.replace(/-/g,"/"));
            var endDate = new Date();
            var minutes = (endDate.getTime() - bngDate.getTime())/60/1000;

            // 时间段 判断pub_date显示内容
            if(minutes >= 60){
              minutes = minutes/60;
              var dateTime = parseInt(minutes);
              if(dateTime >= 48){
                news_list[i].pub_date = "2天前";
              }else if(dateTime >= 24){
                news_list[i].pub_date = "昨天";
              }else{
                news_list[i].pub_date = dateTime + "小时以前";
              }
            }else{
              var minute = parseInt(minutes);
              news_list[i].pub_date = minute + "分钟以前";
            }

            news_list[i].title = "  " + news_list[i].title;
            this.Objlist.push(news_list[i]);
          }
        }
        this.locked = false;
        this.loading = false;
      },
      load(uuid){
        setTimeout(() => {
          this.$broadcast('pulldown:reset', uuid);
        }, 1000);
      }
    }
  }
</script>

<style lang="less" scoped>
  .ic_img{
    position:absolute; top:10px; left: 5px;
    width:15px;
    height:15px;
  }
  .weui_cell_bd>p{
    font-size:15px;
  }
  .vux-label-desc{
    padding-right:15px;
  }
  .weui_cell_bd.weui_cell_primary{
    padding-left:5px;
  }
  .news-wrap-list {
    height: 2800px;
    overflow: hidden;
  }
  .pubdate{
    font-size:5px;
  }
</style>
