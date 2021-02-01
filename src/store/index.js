import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasksLists: []
  },
  mutations: {
    ADD_NEW_TASKS_LIST (state, payload) {
      state.tasksLists.push(payload)
    }
  },
  actions: {
    addNewTasksList ({ commit }, payload) {
      commit('ADD_NEW_TASKS_LIST', payload)
    }
  },
  modules: {
  }
})
