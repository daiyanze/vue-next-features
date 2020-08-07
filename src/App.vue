<template>
  <h1>Vue 3 new Features</h1>
  <br>

  <h2>01. Composition API</h2>
  <CompositionAPI />

  <h2>02. Advanced Reactivity API</h2>
  <AdvancedReactivityAPI />

  <h2>03. Transition</h2>
  <TransitionComponent />

  <h2>04. Function Filter</h2>
  <Filters />

  <h2>05. Suspense Component</h2>
  <suspense>
    <SuspenseComponent />
  </suspense>

  <h2>06. Teleport Component</h2>
  <TeleportComponent />

  <h2>07. Multiple Root Elements</h2>
  <MultipleRootElements />

  <h2>08. Multiple v-model</h2>
  <div>Email: {{ email }}</div>
  <div>Password: {{ password }}</div>
  <VModels v-model:email="email" v-model:password="password" />
</template>

<script>
import { reactive, toRefs } from 'vue'
import CompositionAPI from './components/CompositionAPI.vue'
import AdvancedReactivityAPI from './components/AdvancedReactivityAPI.vue'
import MultipleRootElements from './components/MultipleRootElements.vue'
import Filters from './components/Filters.vue'
import SuspenseComponent from './components/SuspenseComponent.vue'
import TeleportComponent from './components/TeleportComponent.vue'
import TransitionComponent from './components/TransitionComponent.vue'
import VModels from './components/VModels.vue'

export default {
  name: 'App',
  components: {
    CompositionAPI,
    AdvancedReactivityAPI,
    MultipleRootElements,
    Filters,
    SuspenseComponent,
    TeleportComponent,
    TransitionComponent,
    VModels
  },
  setup () {
    const state = reactive({
      email: 'hello@world.com',
      password: 'icanttellyou'
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>
