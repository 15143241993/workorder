import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './state'
import actions from './state'
import user from './module/user'


Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    user
  }
})
