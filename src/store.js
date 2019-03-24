import Vue from 'vue';
import Vuex from 'vuex';
import { createMutations } from './vue-vuex-plugin';

Vue.use(Vuex);

const state = {
  name: 'shailen',
  surname: 'naidoo',
};

export default new Vuex.Store({
  state,
  mutations: createMutations(state),
});
