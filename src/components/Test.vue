<template>
  <div>
    <input v-model="name" type="text">
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  vuex: {
    name: "name"
  }
}
</script>

