/**
 * 步骤四
 * mutations 突变
 */
// 引入 getters
import getters from './getters'

// 定义、初始化数据
const state = {
	header:true,
	loading:false
};

// 定义 mutations
const mutations = {
	// 匹配actions通过commit传过来的值,并改变state上的属性的值
	showHeader(state){
		state.header = true;
	},
	hideHeader(state){
		state.header = false;
	},
	showLoading(state){
		state.loading = true;
	},
	hideLoading(state){
		state.loading = false;
	}
}

// 导出
export default {
	state,
	mutations,
	getters
}