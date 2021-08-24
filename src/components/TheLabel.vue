<template>
  {{ value }}
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState({
      value: state => state.count
    })
  }
}
</script>

<style scoped>

</style>
