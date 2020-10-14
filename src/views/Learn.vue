<template>
  <div class="Learn">
    <div>
      <van-tabs v-model="active">
      
  <van-tab title="听书">
 <div @click="changeimg" class="imges">
        <img src="../assets/img/2.jpeg" alt="">
      </div>

      <div class="bookList" @click="changeimg">
      <div class="bookList-top"><img src="../assets/img/1.jpg" alt=""></div>
      <div class="booktext">
        <h1 style="font-size:20px;margin-bottom:10px;">设计心理学</h1>
        <p style="margin-bottom:10px;">唐纳德-诺曼 编著 15652人在听</p>
        <p>用直观的提示让用户理解</p>
      </div>
      </div>
       <div class="bookList" @click="changeimg">
      <div class="bookList-top"><img src="../assets/img/2.jpg" alt=""></div>
      <div class="booktext">
        <h1 style="font-size:20px;margin-bottom:10px;">安藤忠雄都市</h1>
        <p style="margin-bottom:10px;">安德忠雄 编著 15652人在听</p>
        <p>沉浸式体验</p>
      </div>
      </div>
       <div class="bookList" @click="changeimg">
      <div class="bookList-top"><img src="../assets/img/3.jpg" alt=""></div>
      <div class="booktext">
        <h1 style="font-size:20px;margin-bottom:10px;">给青年建筑师的信</h1>
        <p style="margin-bottom:10px;">汉宝德 编著 65252人在听</p>
        <p>青年的动力就是梦想</p>
      </div>
      </div>
       <div class="bookList" @click="changeimg">
      <div class="bookList-top"><img src="../assets/img/4.jpg" alt=""></div>
      <div class="booktext">
        <h1 style="font-size:20px;margin-bottom:10px;">建筑师的20岁</h1>
        <p style="margin-bottom:10px;">东京大学建筑学科 编著 55652人在听</p>
        <p>当代建筑师匠心巨作</p>
      </div>
      </div>
       <div class="bookList" @click="changeimg">
      <div class="bookList-top"><img src="../assets/img/5.jpg" alt=""></div>
      <div class="booktext">
        <h1 style="font-size:20px;margin-bottom:10px;">建筑安家安藤忠雄</h1>
        <p style="margin-bottom:10px;">安藤忠雄 编著 5652人在听</p>
        <p>艺术家</p>
      </div>
      </div>
      
  </van-tab>
  <van-tab title="资料"></van-tab>
  <van-tab >
    <template #title> <van-icon name="label-o" /> </template>
    我的书架
  </van-tab>
   <van-tab >
    <template #title> <van-icon name="down" /> </template>
    <van-tabs type="card">
  <van-tab title="已下载"></van-tab>
  <van-tab title="下载中"></van-tab>
 </van-tabs>
  </van-tab>
  
  
 
</van-tabs>
</div>
     
      
  </div>
</template>

<script>



export default {
  data(){
  return {
    active:0
  }
  },
  methods:{
    changeimg(){
     this.$router.push('listenbook')
    },
   
  }
 
}
</script>
<style lang="stylus">
.imges
  width 100%
  height 150px
  padding 10px
  img 
   width 100%
   height 100%
.bookList
  width 100%
  height 180px
  display flex
  padding 15px
  margin-bottom 20px
  .bookList-top
     width 200px
     height 150px
     margin-right 10px
     img 
      width 100%
      height 100%
  .booktext
    font-size 15px  
    
        
     
    


</style>