<template>
  <div>
    <!-- 头部 -->
    <header class="classifyheader">
      <van-nav-bar left-text="" />
      <img src="../assets/组 539.png" alt="" class="ch-img1" />
      <img
        src="../assets/组 540.png"
        alt=""
        class="ch-img2"
        @click="onClickLeft"
      />
    </header>

    <!-- tab切换页面 -->
    <van-tabs
      v-model="active"
      line-width="40px"
      line-height="3px"
      title-active-color="black"
      duration="0.3"
      color="#FDD900"
    >
      <van-tab title="沙发">
        <!-- 沙发次级选项列表 -->
        <ul class="cijiul">
          <li
            class="cijili"
            v-for="(itemB, index) in cijiList"
            :key="index"
            @click="changeciji(index)"
            :class="{ cijiseen: cijiactive === index }"
          >
            {{ itemB }}
          </li>
        </ul>
        <!-- 沙发图片列表 -->
        <ul class="gongge">
          <li
            class="gg-li"
            v-for="(itemShafa, index) in classifyList"
            :key="index"
          >
            <img :src="itemShafa.imgUrl" alt="" />
          </li>
        </ul>
      </van-tab>

      <van-tab title="椅櫈">
        <Yideng />
      </van-tab>
      <van-tab title="桌几">
        <Zhuoji />
      </van-tab>
      <van-tab title="柜架">
        <Guijia />
      </van-tab>
      <van-tab title="床类">
        <Chuanglei />
      </van-tab>
      <van-tab title="厨具">
        <Chuju />
      </van-tab>
    </van-tabs>
    <footer class="shafafooter"></footer>
  </div>
</template>

<script>
import { Toast } from "vant";

import Yideng from "./classify/Chuanglei";
import Zhuoji from "./classify/Zhuoji";
import Guijia from "./classify/Guijia";
import Chuanglei from "./classify/Chuanglei";
import Chuju from "./classify/Chuju";
// import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      active: 2,
      cijiList: ["全部", "单人沙发", "组合沙发", "儿童沙发"],
      cijiactive: 0,
      type: sessionStorage.getItem("type") || "1"
    };
  },

  components: {
    Yideng,
    Zhuoji,
    Guijia,
    Chuanglei,
    Chuju
  },

  computed: {
    classifyList() {
      return this.$store.state.classifyList;
    }
  },
  mounted() {
    this.$store.dispatch("getClassifyList", {
      type: this.type
    });
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    },
    changeciji(i) {
      this.cijiactive = i;
    }
  }
};
</script>

<style lang='stylus' scoped></style>
