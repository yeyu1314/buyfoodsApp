<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-if="$route.meta.showFooter" /><!--$route当前路由-->
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {
    components : {
      FooterGuide       //映射成标签
    },
    mounted () {
      // this.$store.dispatch('getAddress')
      this.getAddress()//引入了mapActions映射函数，所以无需想上一种一样写
    },
    methods : {
      ...mapActions(['getAddress','getUserInfo'])
    },
    created () {
      // 异步获取 address
      // this.$store.dispatch('getAddress')
      // 异步获取登陆用户信息
      this.$store.dispatch('getUserInfo')
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
