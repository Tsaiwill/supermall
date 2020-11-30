import Vue from 'vue'
import App from './App.vue'
// 挂载路由
import router from './router'
// 挂载vuex
import store from 'store/index'

Vue.config.productionTip = false

// 创建一个$bus
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
