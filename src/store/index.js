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
    },
    ADD_NEW_TASK (state, payload) {
      const list = state.tasksLists.find(item => item._id === payload.listId)
      console.log(list)
      var data = {
        tasks: list.tasks
      }
      data.tasks.push(payload.taskTitle)
      Object.assign(list, data)
    }
  },
  actions: {
    addNewTasksList ({ commit }, payload) {
      commit('ADD_NEW_TASKS_LIST', payload)
    },
    addTask ({ commit }, payload) {
      commit('ADD_NEW_TASK', payload)
    }
  },
  modules: {
  }
})
