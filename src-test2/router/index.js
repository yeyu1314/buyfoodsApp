/*
路由器对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
// import Login from '../pages/Login/Login'

Vue.use(VueRouter)//声明使用插件

export default new VueRouter({
  //所有路由   (配置)
  routes : [
    {
      path : '/msite',
      component :MSite,
    },
    {
      path : '/search',
      component :Search,
    },
    {
      path : '/order',
      component :Order,
    },
    {
      path : '/profile',
      component :Profile,
    },
    {// 默认显示
      path : '/',
      redirect : '/msite'
    }
  ]
})
