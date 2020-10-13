<template>
  <div class="Strict">
    <!-- 头部 -->
      <div class="header">
        <img src="../assets/images/yxc_03.png" alt="">
      </div>
      <!-- 轮播图 -->
      <van-swipe 
      @change="onChange"
      height=173
      >
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">
            {{ current + 1 }}/4
          </div>
        </template>
      </van-swipe>
      <!-- 中间导航 -->
      <div class="centerNav">
        <div 
        class="sbox"
        v-for="(item,index) in list"
        :key="index"
        @click="tolist"
        >
        <img :src="item.icon" alt="">
        <p>{{item.title}}</p>
        </div>
      </div>
      <!-- 沙发第一张 -->
      <div class="banner">
        <img src="../assets/images/sf1_02.png" alt="">
      </div>
      <div class="next-footer">
          <p class="first-word">Tape 单人沙发</p>
          <P class="second-word">MINOTT</P>
      </div>
      <div class="sp">
          <li v-for="(item,index) in imglist" :key="index">
              <img :src="item" alt="">
          </li>
      </div>
  </div>
</template>

<script>
const tab1 = require('@/assets/images/tb1.png')
const tab2 = require('@/assets/images/tb2.png')
const tab3 = require('@/assets/images/tb3.png')
const tab4 = require('@/assets/images/tb4.png')
const tab5 = require('@/assets/images/tb5.png')
const sp = require('../assets/images/sp.png')


export default {
  data() {
    return {
       current: 0,
       list:[
         {
         title:"沙发",
         icon:tab1
       },
       {
         title:"椅凳",
         icon:tab2
       },
       {
         title:"桌几",
         icon:tab3
       },
       {
         title:"柜架",
         icon:tab4
       },
       {
         title:"床类",
         icon:tab5
       },

       ],
       imglist:[sp,sp,sp,sp,sp,sp]
    }
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    tolist(){
      this.$router.push('/list')
    }
  },
}
</script>
<style lang="stylus">
.Strict
  .header
    width 100%
    height 44px
    background #FAFAFA
    display flex
    justify-content center
    align-items center
    z-index 10
    position fixed
    top 0
    left 0
    img 
      width 72px
      display block
  .van-swipe
    margin-top 44px
    .van-swipe-item
      background #ccc
    .custom-indicator 
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      background: rgba(0, 0, 0, 0.1);
  .centerNav
    width 100%
    height 145px
    display flex
    justify-content space-between
    align-items center
    padding-left 8px
    padding-right 8px
    .sbox
      width 67px
      height 75px
      border-radius 7px
      background #f8f8f8
      display flex
      flex-direction column
      justify-content center
      align-items center
      img 
        width 30px
        height 20px
      p
        font-size 12px
        color #777777
        margin-top 13px
  .banner
    width 100%
    img 
      width 100%
  .next-footer
    margin-top 14px
    width 100%
    padding-left 16px
    padding-right 16px  
    .first-word
      color #8D8052
      font-size 10px
    .second-word
      font-size 13px
      margin-top 10px
      color #0B0B0B
  .sp
    width 100%
    padding-left 12px
    padding-right 12px
    display flex
    justify-content space-between
    flex-wrap wrap
    margin-top 30px
    li
      width 172px
      margin-bottom 5px
      img 
        width 100%
        display block

</style>