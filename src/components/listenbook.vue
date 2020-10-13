<template>
  <div class="listenbook">
  <router-view />
<van-nav-bar   left-arrow>
  <template #right><van-icon name="share-o" />
    
  </template>
</van-nav-bar>
<div class="button">
  <van-button type="primary" block >立即听书</van-button>
</div>
<div class="topbook">
  <div class="books"><img src="../assets/img/1.jpg" alt=""></div>
  <div class="book-right">
    <p class="frist">设计心理学</p>
    <p class="send">豆瓣评分 8.2 总时长 39:35</p>
    <p class="last">加入书架</p>
  </div>
  
</div>
<van-tabs v-model="activeName">
  <van-tab title="简介" name="a"></van-tab>
  <van-tab title="目录" name="b"></van-tab>

</van-tabs>

  <p style="margin-top:20px;color:#b8b8b8;">唐纳德-诺曼 编著</p>
  <div :class="talk">
    打伤打死哦对hi是哦第阿斯顿哈斯哦对哈送到阿斯顿哈斯哦对hi奥萨蒂哈怂i的话阿松i等哈送i的hi奥萨蒂后i萨蒂2爱上第哦啊是的啊实打实大苏打萨达萨达是啊实打实的啊实打实的啊实打实大苏打蒂2爱上第哦啊是的啊实打实大苏打萨达萨达是啊实打实的啊实打实的啊实打实大苏打
    <!-- <p :class="talk" style="font-size:18px;">打伤打死哦对hi是哦第阿斯顿哈斯哦对哈送到阿斯顿哈斯哦对hi奥萨蒂哈怂i的话阿松i等哈送i的hi奥萨蒂后i萨蒂2爱上第哦啊是的啊实打实大苏打萨达萨达是啊实打实的啊实打实的啊实打实大苏打</p> -->
    </div>
  
  

<div style="margin-top:20px;">
  <button @click="showme" v-if="actived === 1" :class="btns">展示</button>
  <button @click="showhi" v-if="actived === 0" :class="btns">收起</button>
  </div>
<br><br>
   <h1 class="tiele1">精彩点评</h1>
  <div class="goods">
  <p>士大夫士大夫士大夫十分士大夫糁方法士大夫辐射度方法纷纷为辐射度方法</p>
  <p>来自啊实打实的十大大苏打</p>
  </div>
  <div class="goods">
  <p>士大夫士大夫士大夫十分士大夫糁方法士大夫辐射度方法纷纷为辐射度方法</p>
  <p>来自啊实打实的十大大苏打</p>
  </div>





  </div>
</template>

<script>

export default {
    data() {
     
    return {
      actived:1,
      talk:'writer-h',
      activeName: 'a',
      btns:'btns',
      
    };
  },
 
methods: {
  showme(){
    this.actived = 0
     this.talk = 'active'
  },
  showhi(){
    this.actived = 1
    this.talk = 'writer-h'
   
  }
  },
}
</script>
<style lang="stylus">
.listenbook
    .van-nav-bar
    .van-icon
      color black 
      font-size 20px 
  .button
    width 100%
    height 50px
    display flex
    text-align center
    justify-content center
    position fixed
    // background pink
    bottom 20px
   .van-button--block
     width 90%
     color black 
     background yellow  
     font-weight bold  
     border-radius 10px
     border 1px solid pink    
    //  margin-left 50px
  .topbook
      width: 100%
      height: 196px
      margin-top: 30px
      display: flex
    //   background: blue 
      .books
          width: 120px
          height 200px
          img 
           width 100%
           height 100%
      .book-right
          width: 200px
          height 200px
          margin-left: 30px
        //   background: green  
          p 
           margin-bottom: 30px   
          .frist
              font-size: 20px 
          .send
              font-size:12px 
          .last
              width: 75px
              height 25px
              background: yellow 
              text-align: center
              line-height: 25px
              font-weight: bold
              border-radius: 5px
  
    .writer-h
        width: 100%
        height 100px
        // background: yellow
        word-break: break-all
        overflow: hidden;
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:5;
        font-size: 18px
        margin-bottom: 20px
        // padding: 20px
        
        // .talk
        //  width: 100%
        //  word-break: break-all
        //  overflow: hidden;
        //  display:-webkit-box;
        //  -webkit-box-orient:vertical;
        //  -webkit-line-clamp:4;
        //  background: pink
        //  background: pink
        //  text-overflow: ellipsis;
        
    .active
         
          width: 100%
          word-break: break-all
          font-size: 18px
          margin-bottom: 20px
          
   .btns
    width:30px;
    height:24px;  
    text-align: center; 
    line-height: 18px;
    color:#b8b8b8;
    position: absolute
    margin-left: 20px

   .tiele1
     text-align: center
     font-size: 20px 
     margin-bottom: 15px
   .goods
     width: 100%
     height 120px
     padding: 10px
     margin-bottom: 15px
</style>
