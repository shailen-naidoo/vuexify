import Vue from 'vue';
import App from './App.vue';
import store from './store';
import Vuex from './plugins/vuex';

Vue.config.productionTip = false;

Vue.use(Vuex);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
