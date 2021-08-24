<template>
  <div class="body">
    <div class="label">
      <the-label></the-label>
    </div>
    <div class="button-pane">
      <app-button class="button"
                  @clicked="$store.commit('decrement')"
                  @clicked-with-ctrl="$store.commit('decrement', 10)"
                  @clicked-with-shift="$store.commit('decrement', 100)">-
      </app-button>

      <app-button class="button"
                  @clicked="$store.commit('increment')"
                  @clicked-with-ctrl="$store.commit('increment', 10)"
                  @clicked-with-shift="$store.commit('increment', 100)">+
      </app-button>
    </div>
    <div class="note">
      <h5>Note: ctrl x10, shift x100</h5>
    </div>
  </div>
</template>

<script>
import TheLabel from "./TheLabel"
import AppButton from "./AppButton"

export default {
  components: {TheLabel, AppButton}
}
</script>

<style scoped>
.body {
  padding: 50px;
  margin: 1px;
  background-color: #FFC53A;
  width: 250px;
  border-radius: 10px;
  text-align: center
}

.label {
  /*background-color: deeppink;*/
  /*margin: 10px 0;*/
  font-size: 72px;
  color: #333;
  font-family: "sans-serif";
  font-weight: bold;
}

.button-pane {
  /*background-color: #2c3e50;*/
  /*margin: 40px;*/
}

.note {
  /*background-color: darkorange;*/
}

.button {
  margin: 0 5px;
}
</style>
