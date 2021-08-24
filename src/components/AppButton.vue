<template>
  <button
      @mousedown.stop.prevent="mouseDownHandler($event)"
      @mouseup.stop.prevent="mouseUpHandler($event)"
      @mouseout.stop.prevent="mouseUpHandler($event)"
  >
    <slot></slot>
  </button>
</template>

<script>
const DELAY_INTERVAL = 200
export default {
  // pressed: false,
  data() {
    return {
      timerAllow: true,
      timerOff: true,
      timer: null
    }
  },
  emits: ['clicked', 'clicked-with-ctrl', 'clicked-with-shift'],
  methods: {
    mouseDownHandler(e) {
     // console.log('mouseDownsHandler')
      this.mouseDownAction(e)
      this.timerAllow = true

      setTimeout(
          () => {
            if (this.timerAllow && this.timerOff) {
              this.timerOff = false
              this.timer = setInterval(() => {
                this.mouseDownAction(e)
              }, DELAY_INTERVAL)
            }
          }, DELAY_INTERVAL * 4
      )
    },
    mouseUpHandler() {
     // console.log('mouseUpHandler')
      this.timerAllow = false
      this.timerOff = true
      clearInterval(this.timer)
    },
    mouseDownAction(e) {
      if (e.ctrlKey) {
        this.$emit('clicked-with-ctrl')
        return
      }
      if (e.shiftKey) {
        this.$emit('clicked-with-shift')
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
  width: 60px;
  height: 60px;
  font-family: sans-serif;
  color: #333;
  font-weight: bold;
  line-height: 3px
}
</style>
