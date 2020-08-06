<template>
  <button ref="buttonRef" @click="count++">count: {{ count }} | result: {{ result }} | multiplier: {{ multiplier }}</button>
</template>

<script>
import {
  computed,
  reactive,
  toRefs,
  ref,
  readonly,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUpdated,
  watch,
  watchEffect,
  unref,
  isRef,
  isProxy,
  isReactive,
  isReadonly
  // onErrorCaptured,
  // onRenderTracked,
  // onRenderTriggered,
  // onUnmounted,
  // onActivated,
  // onDeactivated,
} from 'vue'

export default {
  setup (props, { attrs, emit, slots }) {
    // set reactive data, similar to Vue2 data() function
    const state = reactive({
      count: 0
    })
    console.log('state isProxy: ', isProxy(state))
    console.log('state isReactive: ', isReactive(state))

    // set a readonly value that throws error assigning new value after being declared
    let multiplier = readonly(2)
    // readonly needs an Object as its argument
    // multiplier is a value, so it is false.
    multiplier = 3
    console.log('multiplier isReadOnly: ', isReadonly(multiplier))

    // set computed property (a readonly ref)
    const result = computed(() => {
      return state.count * multiplier
    })
    console.log('result isReadonly: ', isReadonly(result))

    // set target element node as ref
    const buttonRef = ref(null)
    console.log('buttonRef isRef: ', isRef(buttonRef))

    // beforeMount hook
    onBeforeMount(() => {
      console.log('onBeforeMount\n', buttonRef.value) // null
    })

    // mounted hook
    onMounted(() => {
      // returns the value of buttonRef which is an HTMLElement
      // Equivalant to buttonRef.value
      const buttonNode = unref(buttonRef)
      console.log('onMounted\n', buttonNode) // <h1>01. Composition API</h1>
    })

    // beforeUpdate hook
    onBeforeUpdate(() => {
      console.log(`onBeforeUpdate\n${state.count} ${result.value}`)
    })

    // updated hook
    onUpdated(() => {
      console.log(`onUpdated\n${state.count} ${result.value}`)
    })

    // This is exactly the same to the Vue2 watcher
    watch(
      () => state.count + result.value, // getter
      (val, oldVal) => { // watch callback
        if (val % 5 == 0) {
          console.log(val + ' is successfully divided by 5')
        }
      },
      {
        immediate: true
      }
    )

    // invoke the callback when dependency changes
    watchEffect(() => {
      console.log('count = ', state.count)
      console.log('result = ', result.value)
    })

    return {
      // toRefs help keep state properties reactive after deconstructure
      ...toRefs(state),
      result,
      multiplier,
      msg: props.msg,
      buttonRef
    }
  }
}
</script>
