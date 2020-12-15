import Vue from 'vue'
import App from './App.vue'
// 挂载路由
import router from './router'
// 挂载vuex
import store from './store/index'
// 导入移动端点击延迟消除
import FastClick from 'fastclick'

// 一开始就导入toast，默认导入的是index.js的toast
import toast from 'components/common/toast'
// 懒加载插件
import VueLazyload from "vue-lazyload";

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

// 解决移动端300ms延迟
FastClick.attach(document.body)
// 使用懒加载的插件
// 使用插件时传参loading-占位图
Vue.use(VueLazyload, {
  loading: require('./asset/img/common/placeholder.png')
})
