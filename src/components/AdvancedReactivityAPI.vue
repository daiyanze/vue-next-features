<template>
  <label for="demo-text">{{ text }}</label>
  <input id="demo-text" type="text" v-model="text">
</template>

<script>
import { customRef, markRaw, isReactive, reactive, shallowReactive, shallowReadonly, isReadonly, shallowRef, toRaw } from 'vue'

const useDebouncedRef = (value, delay = 200) => {
  let timeout
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          trigger()
        }, delay)
      },
    }
  })
}

export default {
  setup () {

    // Once you mark up a variable to "Raw", it can no longer become a "Reactive"
    const alwaysRaw = markRaw({})
    console.log('alwaysRaw isReactive: ', isReactive(reactive(alwaysRaw))) // false

    // No reactive activation recursion on the second layer and forth
    const stateShallow = shallowReactive({
      one: 1,
      two: {
        value: 2
      }
    })
    console.log('one isReactive: ', isReactive(stateShallow.one)) // true
    console.log('two isReactive: ', isReactive(stateShallow.two)) // true
    console.log('two.value isReactive: ', isReactive(stateShallow.two.value)) // false
    stateShallow.two.value++ // not triggering changes

    // No readonly activation recursion on the second layer and forth
    const stateReadonly = shallowReadonly({
      one: 1,
      two: {
        value: 2
      }
    })
    console.log('one isReadonly: ', isReadonly(stateReadonly.one)) // true
    console.log('two isReadonly: ', isReadonly(stateReadonly.two)) // true
    console.log('two.value isReadonly: ', isReadonly(stateReadonly.two.value)) // false
    stateReadonly.two.value++ // changable

    // The value within ref can be tracked. But it doesn't turn into a "Reactive"
    const refShallow = shallowRef({})
    refShallow.value = {}
    console.log('refShallow.value isReactive: ', isReactive(refShallow.value)) // false

    // Restore a "Reactive" / "Readonly" to a normal Object
    const obj = {}
    const reactiveObj = reactive(obj)
    console.log('obj === reactiveObj ', obj === reactiveObj) // false
    console.log('obj === toRaw(reactiveObj)', obj === toRaw(reactiveObj)) // true

    return {
      text: useDebouncedRef('some text')
    }
  }
}
</script>

<style>

</style>