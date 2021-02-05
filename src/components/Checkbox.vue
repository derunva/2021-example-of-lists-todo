<template lang="pug">
label.checkbox
  input(
    type="checkbox"
    value="1"
    :checked="checked"
    @change="change")
  span
  template(v-if="text")
    span.checkbox--text {{text}}
</template>

<script>
export default {
  props: {
    text: String,
    value: Boolean
  },
  data () {
    return {
      checked: this.value
    }
  },
  methods: {
    change: function () {
      this.checked = !this.checked
      this.$emit('input', this.checked)
    }
  }
}
</script>

<style lang="sass" scoped>
  $blueLight: #39B7CD
  $blueDark: #53868B
  .checkbox
    display: inline-block
    position: relative
    input
      position: absolute
      left: 0
      top: 0
      opacity: 0
      & + span
        height: 20px
        width: 20px
        border: 3px solid $blueDark
        border-radius: 4px
        display: inline-flex
        justify-content: center
        align-items: center
        &:before
          content: ''
          display: none
          width: 60%
          height: 130%
          border-right: 5px solid $blueDark
          border-bottom: 5px solid $blueDark
          transform: rotate(45deg) translateY(-40%) translateX(-10%)
      &:checked + span:before
        display: block
    span
      margin-right: 10px
      vertical-align: middle
      display: inline-block
      position: relative
      z-index: 1
</style>
