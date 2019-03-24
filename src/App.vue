<template>
  <div>
    <input v-model="name" type="text">
    <input v-model="surname" type="text">
    <p>{{ name + " " + surname }}</p>
  </div>
</template>

<script>
export default {
  vuex: {
    name: 'name',
    surname: 'surname',
  },
};
</script>
