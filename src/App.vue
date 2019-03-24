<template>
  <div>
    <input v-model="name" type="text">
    <input v-model="surname" type="text">
    <p>{{ name + " " + surname }}</p>
    <test/>
  </div>
</template>

<script>
import Test from "./components/Test.vue"

export default {
  vuex: {
    name: "name",
    surname: "surname"
  },
  components: {
    Test
  }
}
</script>
