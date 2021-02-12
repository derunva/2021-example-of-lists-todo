<template lang="pug">
  <button @click="addTodo" class="addTodo">
    font-awesome-icon(icon="plus")
    |{{text}}
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
        title: 'New Tasks List',
        tasks: []
      }
      this.$store.dispatch('addNewTasksList', tasksList)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
$blueLight: #39B7CD
$blueDark: #53868B
.addTodo
  svg
    margin-right: .5em
    font-size: .9em
  font-weight: bold
  color: #fff
  font-size: 1.2rem
  padding: .5em .7em
  background: $blueLight
  background: linear-gradient(0deg, $blueDark 0%, $blueLight 100%)
</style>
