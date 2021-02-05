<template lang="html">
  <div
    ref="element"
    :contenteditable="editable"
    @click="doEditable"
  >
    {{content}}
  </div>
</template>

<script>
export default {
  props: ['content', 'focusTrigger'],
  data () {
    return {
      editable: true
    }
  },
  watch: {
    focusTrigger () {
      this.$refs.element.focus()
      this.setCaret()
    }
  },
  methods: {
    setCaret () {
      var el = this.$refs.element
      var range = document.createRange()
      var sel = window.getSelection()
      range.setStart(el.childNodes[0], el.childNodes[0].length)
      range.collapse(true)

      sel.removeAllRanges()
      sel.addRange(range)
    },
    doEditable () {
      this.editable = true
    }
  }
}
</script>

<style lang="css" scoped>
</style>
