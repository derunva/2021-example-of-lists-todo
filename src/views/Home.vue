<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TasksList v-for="tasksList in tasksLists" :key="tasksList._id"/>
    <AddTodo :text="buttonText"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AddTodo from '@/components/AddTodo.vue'
import TasksList from '@/components/TasksList.vue'

import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    AddTodo,
    TasksList
  },
  data () {
    return {
      buttonText: 'Add TOTO List'
    }
  },
  computed: {
    ...mapState([
      'tasksLists'
    ])
  }
}
</script>
