/*
入口JS
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'

Vue.use(MintUI)

new Vue({
  el: '#app',
  render: h => h(App),
  router,//配置路由     <router-link>   <routet-view>  paperlink???   $router   $route
  store//使用上vuex
})
