<template>
  <div class="login">
        <van-nav-bar
          title="登录"
          right-text="注册"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
        />
        <p>Hello,欢迎登录！</p>
        <van-field v-model="text" label="请输入手机号/用户名" />
        <van-field v-model="password" type="password" label="请输入密码" />
        <van-button type="warning" block round>登录</van-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text:'',
      password:''
    }
  },
  methods: {
    onClickLeft(){
      this.$router.go(-1)
    },
    onClickRight(){
      this.$router.push('/zhuce')
    }
  },

}
</script>
<style lang="stylus">
.login 
  .van-nav-bar__text 
    color: #000
  p
    font-size 25px
    margin-left 18px
    margin-top 50px
  .van-field 
    margin-top 20px
    .van-field__label
      width 150px
  


</style>