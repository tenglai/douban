<!-- 首页 -->
<template>
	<div id="home">
		<div class="content mt30">
			<div class="newsList">
				<ul>
					<li v-for="(item,index) in arrList">
						<!-- 通过 router-link路由 跳转详情页 -->
						<router-link :to="'/article/'+item.id">
							<h2>{{index}}.{{item.title}}</h2>
							<p>{{item.detail}}</p>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				arrList:[]
			}
		},
		mounted(){
			// 获取数据
			this.fetchData();
		},
		methods:{
			fetchData(){
				var _this = this;
				// this 为 vue的实例
				this.$http.get('src/data/index.data').then(function(res){
					_this.arrList = res.data;
				}).catch(function(err){
					console.log('Home',err);
				});
			}
		}
	}
</script>

<style scoped>
	.mt30{
		margin-top: 30px;
	}
</style>