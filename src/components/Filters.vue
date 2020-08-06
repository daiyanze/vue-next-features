<template>
  <!-- The Vue2 style filter is deprecated (removed) -->
  <!-- <span>{{ count | double }}</span> -->
  <!-- If you have to use fiter, make it a function -->
  <span>{{ double(count) }}</span>
</template>

<script>
import { ref } from 'vue'

export default {
  filters: {
    double (val) {
      return val * 2
    }
  },
  setup () {
    const count = ref(1)
    return {
      count,
      double: val => val * 2
    }
  }
}
</script>

<style>

</style>