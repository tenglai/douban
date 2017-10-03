/**
 * 配置 路由
 */
// 导入组件
import Home from './components/Home.vue'
import Follow from './components/Follow.vue'
import Column from './components/Column.vue'
import UserInfo from './components/UserInfo.vue'
import Article from './components/Article.vue'

// 导出路由数组
export default [
	{ // 首页
		path:'/home',
		component:Home
	},
	{ // 关注页
		path:'/follow',
		component:Follow
	},
	{ // 栏目页
		path:'/column',
		component:Column
	},
	{ // 我的页
		path:'/user-info',
		component:UserInfo
	},
	{ // 文章详情页
		path:'/article/:id',
		component:Article
	},
	{ // 配置默认路由
		path:'/',
		redirect:'/home' // 路由重定向
	},
	{
		path:'*',
		redirect:'/home' // 路由重定向
	}
]