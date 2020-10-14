<template>
  <div class="Mine">
      <div class="header">
        <div class="lefticon">
          <img src="../assets/images/sd.png" alt="">
        </div>
          我
      </div>
      <div class="header-next">
          <div class="next-left" @click="toTransition">
            登录/注册
          </div>
          <div class="next-right">
              <img src="../assets/images/tx3.png" alt="">
          </div>
      </div>
      <div class="mid van-hairline--bottom">
          <div class="one" v-for="(item,index) in list" :key="index">
            <span>{{item.count}}</span>
            <span class="hh">{{item.text}}</span>
          </div>
      </div>
      <div class="footer">
        <div class="footer-left">
          <img src="../assets/images/st.png" alt="">
        </div>
        <div class="footer-right">
          <p v-for="(item,index) in title" :key="index">{{item}}</p>
        </div>
      </div>
  </div>
</template>

<script>



export default {
 data() {
   return {
     list:[{
       count:20,
       text:"被赞"
     },
     {
       count:20,
       text:"被赞"
     },
     {
       count:20,
       text:"被赞"
     },
     ],
     title:["我的作品","我的书夹","收藏作品","关注的人","关注的画夹","我赞过的","我评论的","我看过的","设置"]
   }
 },
 methods: {
   toTransition(){
     this.$router.push('/transition')
   }
 },
}
</script>
<style lang="stylus">
.Mine
  .header
    width 100%
    height 44px
    text-align center
    line-height 44px
    font-size 18px
    color #363636
    position relative
    padding-left 18px
    padding-right 18px
    .lefticon
      width 20px
      height 20px
      position absolute
      top 12px
      img 
        width 100%
        display block
  .header-next
    width 100%
    padding-left 18px
    padding-right 18px
    margin-top 24px
    display flex
    justify-content space-between
    .next-left
      font-size 24px
    .next-right
      width 50px
      height 50px
      img 
        width 100%
  .mid
    width 100%
    height 77px
    display flex
    justify-content space-around
    align-items flex-end
    padding-bottom 10px
    .one
      display flex
      flex-direction column
      align-items center
      span 
        font-size 16px
      .hh
        font-size 12px
        color #020202
  .footer
    width 100%
    padding-left 18px
    margin-top 20px
    display flex
    .footer-left
      width 23px
      margin-right 11px
      img 
        width 100%
    .footer-right
      display flex
      flex-direction column
      p
        font-size 18px
        margin-bottom 35px
        

</style>