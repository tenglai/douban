/**
 * 步骤三
 * actions 事件(行为)
 */
// 导出
export default{
	showHeader:({commit}) => {
		// 提交到 mutations
		commit('showHeader');
	},
	hideHeader:({commit}) => {
		// 提交到 mutations
		commit('hideHeader');
	},
	showLoading:({commit}) => {
		commit('showLoading');
	},
	hideLoading:({commit}) => {
		commit('hideLoading');
	}
}