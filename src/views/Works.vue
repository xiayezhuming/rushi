<template>
  <div class="Works">
    <!-- 头部 -->
      <div class="header">
        <div class="header-left">
          <img src="../assets/images/ss.png" alt="">
        </div>
        <div class="header-middle">
            <ul>
              <li
                v-for="(item,index) in list"
                :key="index"
                :class="{active:isActive === index}"
                @click="changeisactive(index)"
              >{{item}}</li>
            </ul>
        </div>
        <div class="header-right">
            风格
        </div>
      </div>
      <!-- 评价内容 -->
      <div class="next">
        <div class="next-first">
          <div class="first-top">
             <ul>
                <li v-for="(item,index) in imglist2" :key="index">
                    <img :src="item" alt="">
                </li>
            </ul>
          </div>
           <div class="first-mid">
             <span class="left-text">新作|神圣的空旷-沈阳中海和平之门djksdj</span>
             <span class="right-text">16小时前</span>
           </div>
           <div class="first-footer">
             <div class="footer-left">
               <div class="tx-box">
                 <img src="../assets/images/tx1.png" alt="">
               </div>
              <div class="title-box">
                <p class="nc">LiEk</p>
                <p>采集分享</p>
              </div>
             </div>
             <div class="footer-right">
                  <div class="dp">
                      <img src="../assets/images/dp.png" alt="">
                      <div class="sl">
                        17
                      </div>
                  </div>
                  <div class="dz">
                    <van-icon name="good-job" v-if="dzs1 === 0" size="23" @click="firstchangeCount1"/>
                    <van-icon name="good-job"  v-if="dzs1 === 1"  size="23" color="orange"  @click="secondchangeCount1"/>
                    <div class="sl">
                        {{count1}}
                      </div>
                  </div>
                  <div class="sc" 
                  >
                    <van-icon name="star" v-if="acolor1 === 0" size="20"  @click="firstchangeColor1"/>
                    <van-icon name="star" v-if="acolor1 ===1" size="20" color="orange"  @click="secondchangeColor1"/>
                     <span>收藏</span>
                  </div>
             </div>
           </div>
        </div>
        <div class="next-first">
          <div class="first-top">
             <ul>
                <li v-for="(item,index) in imglist1" :key="index">
                    <img :src="item" alt="">
                </li>
            </ul>
          </div>
           <div class="first-mid">
             <span class="left-text">美式简约，纯正典雅！</span>
             <span class="right-text">3小时前</span>
           </div>
           <div class="first-footer">
             <div class="footer-left">
               <div class="tx-box">
                 <img src="../assets/images/tx2.png" alt="">
               </div>
              <div class="title-box">
                <p class="nc">屿南凉北</p>
                <p>采集分享</p>
              </div>
             </div>
             <div class="footer-right">
                  <div class="dp">
                      <img src="../assets/images/dp.png" alt="">
                      <div class="sl">
                        5
                      </div>
                  </div>
                  <div class="dz">
                    <van-icon name="good-job" v-if="dzs2 === 0" size="23" @click="firstchangeCount2"/>
                    <van-icon name="good-job"  v-if="dzs2 === 1"  size="23" color="orange"  @click="secondchangeCount2"/>
                    <div class="sl">
                        {{count2}}
                      </div>
                  </div>
                  <div class="sc" 
                  >
                    <van-icon name="star" v-if="acolor2 === 0" size="20"  @click="firstchangeColor2"/>
                    <van-icon name="star" v-if="acolor2 ===1" size="20" color="orange"  @click="secondchangeColor2"/>
                     <span>收藏</span>
                  </div>
             </div>
           </div>
        </div>
        <div class="next-first">
          <div class="first-top">
             <ul>
                <li v-for="(item,index) in imglist2" :key="index">
                    <img :src="item" alt="">
                </li>
            </ul>
          </div>
           <div class="first-mid">
             <span class="left-text">美式简约，纯正典雅！</span>
             <span class="right-text">3小时前</span>
           </div>
           <div class="first-footer">
             <div class="footer-left">
               <div class="tx-box">
                 <img src="../assets/images/tx2.png" alt="">
               </div>
              <div class="title-box">
                <p class="nc">屿南凉北</p>
                <p>采集分享</p>
              </div>
             </div>
             <div class="footer-right">
                  <div class="dp">
                      <img src="../assets/images/dp.png" alt="">
                      <div class="sl">
                        5
                      </div>
                  </div>
                  <div class="dz">
                    <van-icon name="good-job" v-if="dzs2 === 0" size="23" @click="firstchangeCount2"/>
                    <van-icon name="good-job"  v-if="dzs2 === 1"  size="23" color="orange"  @click="secondchangeCount2"/>
                    <div class="sl">
                        {{count2}}
                      </div>
                  </div>
                  <div class="sc" 
                  >
                    <van-icon name="star" v-if="acolor2 === 0" size="20"  @click="firstchangeColor2"/>
                    <van-icon name="star" v-if="acolor2 ===1" size="20" color="orange"  @click="secondchangeColor2"/>
                     <span>收藏</span>
                  </div>
             </div>
           </div>
        </div>
      </div>
  </div>
</template>

<script>

const img1 = require('../assets/images/tu1_03.png')
const img2 = require('../assets/images/tu2_03.png')

export default {
  
 data() {
   return {
     list:["首推","住宅","酒店","餐饮","公共","商业","办公室"],
     isActive:0,
     acolor1:0,
     acolor2:0,
     count1:22,
     count2:9,
      dzs2:0,
     dzs1:0,
     imglist1:[img1,img1,img1,img1],
     imglist2:[img2,img2,img2,img2]
   }
 },
 methods: {
   changeisactive(i){
     this.isActive = i
   },

   firstchangeColor1(){
      this.acolor1 = 1
      this.$toast({
        message: '收藏成功',
        position: 'bottom',
});
   },
   secondchangeColor1(){
     this.acolor1 =0;
       this.$toast({
        message: '取消收藏',
        position: 'bottom',
});
   },

      firstchangeColor2(){
      this.acolor2 = 1
      this.$toast({
        message: '收藏成功',
        position: 'bottom',
});
   },
   secondchangeColor2(){
     this.acolor2 =0;
       this.$toast({
        message: '取消收藏',
        position: 'bottom',
});
   },

  firstchangeCount1(){
    this.dzs1 =1;
    this.count1+=1
  },
  secondchangeCount1(){
    this.dzs1 = 0;
    this.count1 -=1
  },


   firstchangeCount2(){
    this.dzs2 =1;
    this.count2+=1
  },
  secondchangeCount2(){
    this.dzs2 = 0;
    this.count2 -=1
  }
 },
}
</script>
<style lang="stylus">
.Works
  .header
    width 100%
    height 44px
    display flex
    justify-content space-between
    position fixed
    top 0
    left 0
    z-index 10
    background #FFFFFF
    .header-left
      width 10%
      height 100%
      display flex
      justify-content center
      align-items center
      img 
        width 14px
        height 14px
    .header-middle
      width 75%
      height 100%
      overflow auto
      &::-webkit-scrollbar
        display none
      ul
        width 120%
        height 100%
        display flex
        justify-content space-between
        li
          width 20%
          font-size 18px
          color #6F6F6F
          line-height 44px
          text-align center
        .active
          color #000
    .header-right
      width 15%
      height 100%
      text-align center
      line-height 44px
      font-size 18px
      color #6F6F6F
  .next
    width 100%
    padding-left 16px
    margin-top 44px
    .next-first
      margin-bottom 26px
      .first-top
        overflow  auto
        &::-webkit-scrollbar
          display none
        ul
          width  1187px
          display flex
          justify-content space-between
          li
            width 293px
            img 
              width 100%
              height 183px
      .first-mid
        margin 16px 16px 13px 0px
        display flex
        justify-content space-between
        .left-text
          width 265px
          font-size 16px
          color #242424
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          word-break: break-all;
        .right-text
          font-size 12px
          color #ADADAD
      .first-footer
        width 100%
        display flex
        justify-content space-between
        padding-right 16px
        align-items flex-end
        .footer-left
          display flex
          justify-content space-between
          .tx-box
            width 28px
            height 28px
            margin-right 5px
            img 
              width 100%
              display block
          .title-box
            p
              font-size 12px
              color #A7A7A7
            .nc
              margin-bottom 4px
        .footer-right
          width 141px
          display flex
          justify-content space-between
          font-size 12px
          color #A7A7A7
          .dp
            width 17px
            height 17px
            position relative
            img 
              width 100%
              display block
            .sl
              position absolute
              top -7px
              left 20px

          .dz
            width 17px
            height 17px
            position relative
            img 
              width 100%
              display block
            .sl
              position absolute
              top -7px
              left 20px
          .sc
            height 17px
            display flex
            justify-content space-between
            align-items center
            .van-icon
              margin-right 3px
            .active
              color orange
        

</style>    