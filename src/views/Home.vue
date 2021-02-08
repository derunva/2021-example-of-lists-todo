<template>
  <div class="home">
    <transition-group name="list">
      <TasksList v-for="tasksList in tasksLists" :key="tasksList._id"/>
    </transition-group>
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
<style>
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
