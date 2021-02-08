<template lang="html">
  <div
    ref="element"
    :contenteditable="editable"
    @focus="rememberOldVal"
    @keyup.esc="discardChanges"
  >
    {{content}}
  </div>
</template>

<script>
export default {
  props: ['content', 'focusTrigger'],
  data () {
    return {
      editable: true,
      oldVal: ''
    }
  },
  watch: {
    focusTrigger () {
      this.$refs.element.focus()
      this.setCaret()
    }
  },
  methods: {
    rememberOldVal () {
      this.oldVal = this.content
    },
    discardChanges () {
      console.log('make with vuex')
      this.$refs.element.blur()
      // vuex
    },
    setCaret () {
      var el = this.$refs.element
      var range = document.createRange()
      var sel = window.getSelection()
      range.setStart(el.childNodes[0], el.childNodes[0].length)
      range.collapse(true)

      sel.removeAllRanges()
      sel.addRange(range)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
