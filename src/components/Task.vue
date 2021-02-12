<template lang="pug">
  .task(:class="{isDone: isDone}")
    .task--state
      checkbox(v-model="isDone")
    ContentEditable.task--title(
        :focusTrigger="focusTrigger"
        :content="task"
    )
    .task--options
      font-awesome-icon(icon="sort")
      font-awesome-icon(icon="minus-circle")
      font-awesome-icon(
        icon="pencil-alt"
        @click="focusEditableField"
      )
</template>

<script>
import checkbox from '@/components/Checkbox'
import ContentEditable from '@/components/ContentEditable'

export default {
  props: ['task'],
  data () {
    return {
      isDone: false,
      content: 'My Title',
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
    checkbox,
    ContentEditable
  }
}
</script>

<style lang="sass" scoped>
$yellow: #F0E68C
.task
  display: flex
  align-items: center
  padding: 10px 15px
  &--title
    font-size: 1rem
    font-weight: bold
  &.isDone
    text-decoration: line-through
  &--options
    margin-left: auto
    display: none
    svg
      margin-left: 10px
      cursor: pointer
  &:hover
    background: $yellow
    .task--options
      display: flex
</style>
