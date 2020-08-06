<template>
  <suspense>
    <template #default>
      <div v-for="i in items" :key="i">{{ i }}</div>
    </template>

    <template #fallback>
      Loading...
    </template>
  </suspense>
</template>

<script>
export default {
  async setup () {
    const items = await new Promise(resolve => {
      setTimeout(() => {
        return resolve(['one', 'two'])
      }, 3000)
    })

    return {
      items
    }
  }
}
</script>

<style>

</style>