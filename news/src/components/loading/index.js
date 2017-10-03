const LoadingComponent = require('./Loading.vue')
const loading = {
  install: function(Vue) {
  	// 注册组件
    Vue.component('loading', LoadingComponent)
  }
}
module.exports = loading;