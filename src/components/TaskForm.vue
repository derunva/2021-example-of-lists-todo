<template lang="pug">
  <form>
    font-awesome-icon(icon="plus")
    <input type="text">
    <button>{{ buttonText }}</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      buttonText: 'Add task'
    }
  }
}
</script>

<style lang="sass" scoped>
form
  svg
    margin-right: 10px
    color: green
  display: flex
  padding: 10px
  background: #ccc
  background: linear-gradient(0deg, #ccc 0%, #aaa 100%)
  input
    flex: 1 1 auto
</style>
