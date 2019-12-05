<template>
  <div class="star" :class="'star-'+size">
    <span class="star-item" v-for="(sc, index) in statClasses" :key="index" :class="sc"></span>
  </div>
</template>

<script>
  const CLASS_ON = 'on'
  const CLASS_HALF = 'half'
  const CLASS_OFF = 'off'
  export default {
    name: 'Star',
    props : {
        score : Number,
        size : Number
    },
    computed : {
      statClasses () {
        const {score} = this
        const scArr = []
        /*
        * 3.2   3 + 0 + 2
        * 3.6   3 + 1 + 0
        */
        const scoreInteget = Math.floor(score)//向下取整
        for (let i = 0; i < scoreInteget; i++) {
          scArr.push(CLASS_ON)//向scArr中添加 i 个CLASS_ON
        }
        if(score*10 - scoreInteget*10 >= 5){
          scArr.push(CLASS_HALF)//向scArr中添加 1 / 0 个CLASS_HALF
        }
        while (scArr.length < 5){
          scArr.push(CLASS_OFF)//向scArr中添加CLASS_OFF
        }
        return scArr
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./images/star48_on')
        &.half
          bg-image('./images/star48_half')
        &.off
          bg-image('./images/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star36_on')
        &.half
          bg-image('./images/star36_half')
        &.off
          bg-image('./images/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star24_on')
        &.half
          bg-image('./images/star24_half')
        &.off
          bg-image('./images/star24_off')
</style>
