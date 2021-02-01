<template>
  <button @click="addTodo" class="addTodo">
    {{text}}
  </button>
</template>

<script>
export default {
  name: 'addTodoButton',
  props: {
    text: String
  },
  methods: {
    addTodo () {
      const tasksList = {
        _id: Math.random(1000),
        title: 'New Tasks List'
      }
      this.$store.dispatch('addNewTasksList', tasksList)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
