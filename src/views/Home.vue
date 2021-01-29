<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <AddTodo :text="buttonText"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AddTodo from '@/components/AddTodo.vue'

export default {
  name: 'Home',
  components: {
    AddTodo
  },
  data () {
    return {
      buttonText: 'Add TOTO List'
    }
  }
}
</script>
