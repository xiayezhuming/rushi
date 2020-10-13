import Vue from "vue";
import Vuex from "vuex";
import { getClassifyList } from '../utils/api'
// import { getRecommend } from '../utils/api'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    classifyList:[]
  },
  mutations: {
    getClassifyList(state,payload){
      state.classifyList = payload.result
    }
  },
  actions: {
    async getClassifyList({ commit },payload){
      const res = await getClassifyList({
        type:payload.type
      })
      commit('getClassifyList',res)
      console.log(res)
    }
  },
  modules: {}
});
