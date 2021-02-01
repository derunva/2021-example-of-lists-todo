<template lang="pug">
  .tasks--header
    div
      font-awesome-icon(icon="th-list")
      .tasts--title header here
    .tasks--options
      font-awesome-icon(icon="pencil-alt")
      font-awesome-icon(icon="minus-circle")
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
$blueLight: #39B7CD
$blueDark: #53868B
.tasks--options
  opacity: 0
  .tasks--header:hover &
    opacity: 1
.tasks--header
  cursor: pointer
  display: flex
  justify-content: space-between
  border-radius: 2px
  border: 1px solid $blueDark
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, .8)
  padding: 10px 15px
  background: $blueLight
  background: linear-gradient(0deg, $blueDark 0%, $blueLight 100%)
  color: #fff
  & > div
    display: flex
    justify-content: space-between
</style>
