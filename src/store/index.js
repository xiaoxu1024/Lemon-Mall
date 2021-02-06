import Vue from 'vue'
import Vuex from'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
//1.安装vuex
Vue.use(Vuex)
const state={
  cartList:[]
}
//2.创建store
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store