<template>
  <div class="tiaojie-wrap">
    <div is-link @click="showPopup">展示弹出层</div>
    <van-popup v-model="show" position="bottom" :style="{ height: '55%' }">
      <div class="tiaojie-header">
        播放调节
        <img src="../../assets/矩形 31.png" alt="" class="th-img"  @click="showPopup2" />
      </div>
      <main class="tiaojie-main">
        <p class="tm-p1">音量调节</p>
        <van-progress
          color="#FDD900"
          :percentage="20"
          track-color="#C0B7B0"
          stroke-width="3px"
        />
        <p class="tm-p2">倍速调节</p>
        <van-steps :active="active" active-color="#FDD900" inactive-color="#C0B7B0">
          <van-step>0.5</van-step>
          <van-step>0.75</van-step>
          <van-step>1.0</van-step>
          <van-step>1.25</van-step>
          <van-step>1.5</van-step>
          <van-step>2.0</van-step>
        </van-steps>
        <div class="ac1" @click="ac1"></div>
        <div class="ac2" @click="ac2"></div>
        <div class="ac3" @click="ac3"></div>
        <div class="ac4" @click="ac4"></div>
        <div class="ac5" @click="ac5"></div>
        <div class="ac6" @click="ac6"></div>
      </main>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
      show: false,
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    showPopup() {
      this.show = true;
    },
    showPopup2(){
      this.show=false
    },
     ac1(){
      this.active=0
    },
    ac2(){
      this.active=1
    },
    ac3(){
      this.active=2
    },
    ac4(){
      this.active=3
    },
    ac5(){
      this.active=4
    },
    ac6(){
      this.active=5
    }
  },
};
</script>
<style lang='stylus' scoped>
.tiaojie-wrap {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 354px;
  width: 100%;
  background: #fff;

  .tiaojie-header {
    height: 61px;
    width: 100%;
    background-color: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #727272;
    font-family PingFang-SC-Medium
    font-weight 400
    position relative
    .th-img{
      width 27px
      height 16px
      position absolute
      top 22px
      left 18px
    }
  }
  .tiaojie-main {
    width: 100%;
    height: 260px;
    dispaly: flex;

    .van-progress__portion {
      background: #ffffff;
      display: block;
      color: #ffffff;
    }
    p{
      font-size 14px
      color #757575
      padding-left 17px
      line-height 14px
    }
    .tm-p1{
      padding-top 22px
    }
    .van-progress{
      width 300px
      position absolute
      top 143px
      left 36px
    }
    .tm-p2{
      padding-top 108px
    }
    .van-steps--horizontal{
      width 300px
      position absolute
      top 250px
      left 36px
    }
    .ac1{
      width 15px
      height 15px
      background red
      position absolute
      top 280px
      left 45px 
      z-index 100
      opacity 0
    }
    .ac2{
      width 15px
      height 15px
      background red
      position absolute
      top 280px
      left 100px 
      z-index 100
      opacity 0
    }
    .ac3{
      width 15px
      height 15px
      background red
      position absolute
      top 280px
      left 150px 
      z-index 100
      opacity 0
    }
    .ac4{
      width 15px
      height 15px
      background red
      position absolute
      top 280px
      left 210px 
      z-index 100
      opacity 0
    }
    .ac5{
      width 15px
      height 15px
      background red
      position absolute
      top 280px
      left 270px 
      z-index 100
      opacity 0 
    }
    .ac6{
      width 15px
      height 15px
      background red
      position absolute
      top 280px
      left 315px 
      z-index 100
      opacity 0 
    } 
  }
}
</style>
