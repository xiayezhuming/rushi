<template>
  <div class="List">
    <!-- 头部 -->
      <div class="header">
          <van-icon name="arrow-left"  @click="tobefore" size="30"/>
        <img src="../assets/images/yxc_03.png" alt="">
      </div>
      <van-tabs v-model="active">
        <van-tab 

        title=""></van-tab>
        
      </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
       active: 2,
       list:["沙发","椅凳","柜架","床类","厨卫","照明"]
    }
  },
  methods: {
    tobefore(){
      this.$router.go(-1)
    }
  },
}
</script>
<style lang="stylus">
.List
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
    .van-icon
      position absolute
      left 10px
  .van-tabs
    margin-top 44px  
    .van-tabs__wrap
      height 67px
  
    
      

        
</style>