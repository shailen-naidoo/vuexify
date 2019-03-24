export default {
  install(Vue) {
    Vue.mixin({
      beforeCreate() {
        const { vuex, computed } = this.$options;

        if (vuex) {
          const keys = Object.keys(vuex);

          if (computed) {
            keys.forEach((key) => {
              computed[vuex[key]] = {
                get() {
                  return this.$store.state[vuex[key]];
                },
                set(val) {
                  return this.$store.commit(`UPDATE_${vuex[key].toUpperCase()}`, val);
                },
              };
            });
          } else {
            this.$options.computed = {};

            const { computed: createdComputed } = this.$options;

            keys.forEach((key) => {
              createdComputed[vuex[key]] = {
                get() {
                  return this.$store.state[vuex[key]];
                },
                set(val) {
                  return this.$store.commit(`UPDATE_${vuex[key].toUpperCase()}`, val);
                },
              };
            });
          }
        }
      },
    });
  },
};

const createDynamicKeyName = key => `UPDATE_${key.toUpperCase()}`;

const createMutationHandler = key => (state, val) => { state[key] = val; };

export const createMutations = (storeState) => {
  const keysOfState = Object.keys(storeState);

  const mutationsForKeys = keysOfState.map(key => ({
    [createDynamicKeyName(key)]: createMutationHandler(key),
  }));

  return Object.assign(...mutationsForKeys);
};
