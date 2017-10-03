import Vue from 'vue'
import App from './App.vue'
// 引入 路由
import VueRouter from 'vue-router'
// 引入 路由配置文件
import routes from './router.config'
// 引入 vuex入口文件
import store from './store/index'
// 引入 axios
import axios from 'axios'
// 引入 loading 组件
import Loading from './components/loading'
// 全局引入 自定义过滤器
import filters from './filters'

// 向过滤器里添加函数

// ES6 循环遍历所有过滤器
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

/**
 * 以前
 * Vue.filter(名字,函数);
 * 例如：
 	Vue.filter('filtername',function(value,参数){
        return 参数+value.split('').reverse().join('');
    });
 */
/*Vue.filter('normalTime',(time) => {
	if(time){
		var oDate = new Date();

		oDate.setTime(time);

		var y = oDate.getFullYear();
		var m = oDate.getMonth() + 1;
		var d = oDate.getDate();

		var h = oDate.getHours();
		var mm = oDate.getMinutes();
		var s = oDate.getSeconds();

		return y + '-' + m + '-' + d + ' ' + h + ':' + mm + ':' + s;
	}
});*/

Vue.use(VueRouter);
Vue.use(Loading);

// 关于axios配置
axios.interceptors.request.use(function(config){
	// 发送请求
	store.dispatch('showLoading');
	return config;
},function(error){
	return Promise.reject(error);
});

axios.interceptors.response.use(function(response){
	// 请求回来
	store.dispatch('hideLoading');
	return response;
},function(error){
	return Promise.reject(error);
});

// 配置请求的根路径
// axios.default.baseURL = 'http://localhost:8080';

// 设置默认头部信息 post
// axios.default.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 把axios对象挂到Vue原型上
Vue.prototype.$http = axios;

// 创建 路由
const router = new VueRouter({
	mode:'history', // 删除 url 中的'#'号,切换路径模式
	scrollBehavior:() => ({y:0}), // 滚动条滚动的行为,不加这个默认就会记忆原来滚动条的位置
	routes // routes 等价于 routes:routes
});

require('./assets/css/base.css'); // 全局引入

new Vue({
  	el: '#app',
  	router,
  	store,
  	render: h => h(App)
})
