<template>
  <transition name="fade">
    <div v-show="show">fade transition</div>
  </transition>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  setup () {
    const state = reactive({
      show: true
    })

    setTimeout(() => {
      state.show = false
    }, 1000)

    setTimeout(() => {
      state.show = true
    }, 2000)

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2000ms;
}

</style>