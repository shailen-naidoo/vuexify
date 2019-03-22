export default {
  install(Vue,ops) {
    Vue.mixin({
      beforeCreate() {
        const { vuex, computed } = this.$options;
        if(vuex) {
          const keys = Object.keys(vuex);

          if(computed) {
            keys.forEach(key => {
              computed[vuex[key]] = {
                get() {
                  return this.$store.state[vuex[key]];
                },
                set(val) {
                  return this.$store.commit(`UPDATE_${vuex[key].toUpperCase()}`,val);
                }
              }
            });
          } else {

            this.$options.computed = {};

            const { computed } = this.$options;

            keys.forEach(key => {
              computed[vuex[key]] = {
                get() {
                  return this.$store.state[vuex[key]];
                },
                set(val) {
                  return this.$store.commit(`UPDATE_${vuex[key].toUpperCase()}`,val);
                }
              }
            });
          }
        }
      }
    })
  }
}