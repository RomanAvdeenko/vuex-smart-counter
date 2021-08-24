<template>
  <button @click="pressedEvent($event)">
    <slot></slot>
  </button>
</template>

<script>
export default {
  emits: ['clicked', 'clicked-with-ctrl', 'clicked-with-shift'],
  methods: {
    pressedEvent(e) {
      if (e.ctrlKey) {
        this.$emit('clicked-with-ctrl')
        return
      }
      if (e.shiftKey) {
        this.emit('click-with-shift')
        return
      }
      this.$emit('clicked')
    }
  }
}
</script>

<style scoped>
button {
  text-align: center;
  font-size: 1em;
  width: auto;
  height: 50px;
  font-family: sans-serif;
  color: #333;
  font-weight: bold;
  line-height: 3px
}
</style>
