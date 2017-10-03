<!-- 轮播图 -->
<template>
	<div class="banner">
		轮播图
	</div>
</template>

<script>
	export default{
		mounted(){
			this.slider();
		},
		methods:{
		    slider(){
		      	$(function(){
		        	var mySwipe = Swipe($('.banner')[0],{
		          		auto:2000,
		          		continuous:true,
		          		stopPropation:true,
		          		callback:function(index,element) {
		            		$('.banner ol li').removeClass('active');
		            		$('.banner ol li').eq(index).addClass('active');
		          		}
		        	})
		      	});
		    }
		}
	}
</script>