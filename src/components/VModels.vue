<template>
  <label>Email: </label>
  <input type="email" :value="email" @input="handleInputChange('email', $event.target.value)" />

  <label>Password: </label>
    <input type="password" :value="password" @input="handleInputChange('password', $event.target.value)" />
</template>

<script>
export default {
  props: ['email', 'password'],
  setup (props, { emit }) {
    const handleInputChange = (item, val) => {
      emit(`update:${item}`, val)
    }

    return {
      handleInputChange
    }
  }
}
</script>

<style>

</style>