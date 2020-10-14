<template>
  <div class="transition">
      <van-nav-bar
        title="快速登录"
        left-arrow
        @click-left="onClickLeft"
      />
      <div class="next">
        <p class="dl">登录/注册</p>
        <span class="df">已有账号 <router-link  to='/login'>登录 </router-link></span>
        <span class="ds">还没有如室账号？ <router-link  to='/zhuce'>立即注册 </router-link></span>
      </div>
      

  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft(){
      this.$router.go(-1)
    }
  },
}
</script>
<style lang="stylus">
.transition
  .next
    display flex
    flex-direction column
    align-items center
    margin-top  100px
    .dl
      font-size 30px
    .df
      font-size 16px
      color #ccc
      margin-top 20px
    .ds
      font-size 16px
      color #ccc
      margin-top 20px
</style>