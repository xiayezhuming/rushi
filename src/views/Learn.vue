<template>
  <div class="Learn">
      <div @click="changeimg" class="imges">
        <img src="../assets/img/2.jpeg" alt="">
      </div>
      <div class="psas">
        <p >这是一场视觉盛宴</p>
      </div>
      
  </div>
</template>

<script>



export default {
  methods:{
    changeimg(){
     this.$router.push('listenbook')
    }
  }
 
}
</script>
<style lang="stylus">
.imges
  width 100%
  height 200px
  img 
   width 100%
   height 100%
.psas
  width 100%
  height 80px
  text-align center
  line-height 80px
  font-size 20px

</style>