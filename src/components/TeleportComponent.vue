<template>
  <button @click="modalOpen = true">open modal</button>

  <teleport to="body">
    <div v-if="modalOpen" class="modal" @click.self="modalOpen = false">
      <div>
        I'm a teleported modal!
        (My parent is "body")
        <button @click="modalOpen = false">
          Close
        </button>
      </div>
    </div>
  </teleport>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup () {
    const state = reactive({
      modalOpen: false
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style>
.modal {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  background-color: rgba(0,0,0,.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 300px;
  height: 300px;
  padding: 5px;
}
</style>