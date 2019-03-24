# Vuexify

This project is aimed at providing an abstraction for interacting with Vuex in your Vue components. 

> Proof of concept ❤

## 🤷‍ Why?

Here is an example:

```javascript

export default new Vuex.Store({
  state: {
    name: 'John',
  },
  mutations: {
    UPDATE_NAME(state,val) {
      state.name = val;
    }
  }
})

```

Here we have a simple Vuex store with a single field in the state `name`. If we want to create `two-way` data-binding in our Vue component, we need to do this.

```vue
<template>
  <input v-model="name"/>
</template>

<script>
export default {
  computed: {
    name: {
      get() {
        return this.$store.state.name;
      },
      set(val) {
        this.$store.commit('UPDATE_NAME',val);
      }
    }
  }
};
</script>
```

Now imagine we have a bunch of fields in our state that we want to use `two-data` data-binding on. Our Vue component would get quite big and plus i don't agree with mixing our Vuex state with computed properties

## 🤔 solution?

Why can't we have a custom `vuex` property in our Vue components? I think this approach is far more readable and separates our Vuex state from the idea of computed properties

Here is an example i implemented:

```vue
<template>
  <input v-model="name"/>
</template>

<script>
export default {
  vuex: {
    name: 'name'
  }
};
</script>
```

Under the hood this uses computed properties to enable `two-data` data-binding

## 🚀 Try out?

All you have to do is:

Clone the repo

```
git clone https://github.com/ShailenNaidoo/vuexify.git
```
Install node modules

```
npm install
```
Start up the project

```
npm run serve
```

## 😇 Inspiration?

Got this idea from the popular **vue-apollo** package, which allows you to do this in your Vue components when interacting with a GraphQL API

```vue
<template>
  <p>{{ name }}</p>
</template>

<script>
import gql from 'graphql-tag'; 

export default {
  apollo: {
    name: gql`
      query {
        name
      }
    `
  }
}
</script>
```