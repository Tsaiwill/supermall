import Vue from 'vue'
import App from './App.vue'
// 挂载路由
import router from './router'
// 挂载vuex
import store from './store/index'

// 一开始就导入toast，默认导入的是index.js的toast
import toast from 'components/common/toast'

Vue.config.productionTip = false

// 创建一个事件总线对象$bus
Vue.prototype.$bus = new Vue()
// 安装toast插件，实际上是调用toast的install方法
Vue.use(toast)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
