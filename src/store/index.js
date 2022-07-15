import Vue from 'vue'
import Vuex from 'vuex'
import { setToken, getToken } from '@/utils'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: getToken() || {}
  },
  getters: {
  },
  mutations: {
    setUser (state, user) {
      state.user = user
      setToken(state.user)
    }
  },
  actions: {
  },
  modules: {
  }
})
