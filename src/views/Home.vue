<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TaskForm v-show="showTaskForm"/>
    <AddTodo :text="buttonText"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AddTodo from '@/components/AddTodo.vue'
import TaskForm from '@/components/TaskForm.vue'

import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    AddTodo,
    TaskForm
  },
  data () {
    return {
      buttonText: 'Add TOTO List'
    }
  },
  computed: {
    ...mapState([
      'showTaskForm'
    ])
  }
}
</script>
