<template>
  <div class="zhuce">
    <van-nav-bar
          title="注册"
          left-arrow
          @click-left="onClickLeft"
          
    />
    <div class="dlzs">
      <span>有账号?<router-link to="/login">登录</router-link></span>
    </div>
    <van-field v-model="text" label="用户名" />
    <van-field v-model="password" type="password" label="请输入密码" />
    <van-field v-model="tel" type="tel" label="手机号" />
    <van-field
        v-model="sms"
        center
        clearable
        label="短信验证码"
        
      >
        <template #button>
          <van-button size="small" type="primary">发送验证码</van-button>
        </template>
        </van-field>
       <van-button type="warning" block round>注册</van-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tel: '',
      text: '',
      password: '',
    };
  },
  methods: {
    onClickLeft(){
      this.$router.go(-1)
    }
  },
}
</script>
<style lang="stylus">
.zhuce
  .dlzs 
    width 100%
    padding-right 10px
    margin-top 20px
    position relative
    span 
      position absolute
      right 0px 
      font-size 20px
      color #999
</style>