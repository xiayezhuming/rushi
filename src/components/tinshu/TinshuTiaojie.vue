<template>
  <div class="tiaojie-wrap">
      <div class="tiaojie-header">
          播放调节
          <img src="" alt="">
      </div>
      <main class="tiaojie-main">
        <p>音量调节</p>
        <!-- <van-progress color="#C0B7B0" :percentage="20" track-color="#C0B7B0" stroke-width="4px" /> -->
        <p>倍速调节</p>
        <van-steps :active="active">
          <van-step>买家下单</van-step>
          <van-step>商家接单</van-step>
          <van-step>买家提货</van-step>
          <van-step>交易完成</van-step>
        </van-steps>
      </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
       active: 1,
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {} 
};
</script>
<style lang='stylus' scoped>
.tiaojie-wrap
  position fixed
  bottom 0
  left 0 
  height  354px
  width 100%
  background #fff
  .tiaojie-header
    height 61px
    width 100%
    background-color #f8f8f8
    display flex
    justify-content center
    align-items center
    font-size 20px
    color #727272
  .tiaojie-main
    width 100%
    height 260px
    dispaly flex
    .van-progress__portion
      background #ffffff
      display block
      color #ffffff  
</style>
