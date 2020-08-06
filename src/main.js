import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

const app = createApp(App)

// Global Injection Changes
/**
 * Before
 */
// import Vue from 'vue'
// Vue.use(...)
// Vue.mixin(...)
// Vue.component(...)
// Vue.directive(...)

/**
 * After
 */
// app.use(...)
// app.mixin(...)
// app.component(...)
// app.directive(...)

app.mount('#app')
