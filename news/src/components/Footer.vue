<!-- 底部选项卡 -->
<template>
	<div class="foot-btn">
		<ul>
			<!--首页-->
			<router-link class="home" to="/home" tag="li">
				<a href="javascript:;"></a>
			</router-link>
			<!--关注-->
			<router-link class="write" to="/follow" tag="li">
				<a href="javascript:;"></a>
			</router-link>
			<!--我的-->
			<router-link class="my" to="/user-info" tag="li">
				<a href="javascript:;"></a>
			</router-link>
		</ul>
	</div>
</template>