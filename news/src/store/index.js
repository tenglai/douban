/**
 * 步骤一
 * vuex入口文件
 */
// 引入 vue
import Vue from 'vue'
// 引入 vuex
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		mutations
	},
	actions
});