<!-- 关注页 -->
<template>
	<div id="follow">
		<div class="content mt30">
			<div class="newsList">
				<ul>
					<li v-for="(item,index) in arrList">
						<a href="conText.html">
							<h2>{{index}}.{{item.title}}</h2>
							<p>{{item.detail}}</p>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	// 导入 轮播图组件
	// import BannerView from './Banner.vue'

	export default {
		data(){
			return{
				arrList:[]
			}
		},
		components:{
			// BannerView
		},
		mounted(){
			// 获取数据
			this.fetchData();
		},
		methods:{
			fetchData(){
				// 将this保存到另一个变量中,防止this的指针发生改变
				var _this = this;
				this.$http.get('src/data/follow.data').then(function(res){
					_this.arrList = res.data;
				}).catch(function(err){
					console.log('Follow',err);
				})
			}
		}
	}
</script>

<style scoped>
	.mt30{
		margin-top: 30px;
	}
</style>