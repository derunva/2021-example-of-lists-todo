<template lang="pug">
  .tasks--header
    div
      font-awesome-icon(icon="th-list")
      ContentEditable.tasks--title(
          :focusTrigger="focusTrigger"
          :content="content"
      )
    .tasks--options
      font-awesome-icon(icon="pencil-alt" @click="focusEditableField")
      font-awesome-icon(icon="minus-circle")
</template>

<script>
import ContentEditable from '@/components/ContentEditable'
export default {
  data () {
    return {
      content: 'Tasks List Title',
      focusTrigger: false
    }
  },
  methods: {
    focusEditableField () {
      console.log('focusEditableField')
      this.focusTrigger = !this.focusTrigger
    }
  },
  components: {
    ContentEditable
  }
}
</script>

<style lang="sass" scoped>
$blueLight: #39B7CD
$blueDark: #53868B
.tasks--title
  font-size: 1.6rem
.tasks--options
  svg
    margin-left: 10px
  opacity: 0
  .tasks--header:hover &
    opacity: 1
.tasks--header
  .fa-th-list
    margin-right: 10px
  cursor: pointer
  display: flex
  justify-content: space-between
  align-items: center
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
    align-items: center
</style>
