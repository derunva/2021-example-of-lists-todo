import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showTaskForm: false
  },
  mutations: {
    SHOW_FORM (state) {
      state.showTaskForm = true
    }
  },
  actions: {
    showForm ({ commit }) {
      commit('SHOW_FORM')
    }
  },
  modules: {
  }
})
