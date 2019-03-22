import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: "shailen",
    surname: "naidoo"
  },
  mutations: {
    UPDATE_NAME(state,val) {
      state.name = val;
    },
    UPDATE_SURNAME(state,val) {
      state.surname = val;
    }
  }
})
