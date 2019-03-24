import Vue from 'vue';
import App from './App.vue';
import store from './store';
import { plugin } from './vue-vuex-plugin';

Vue.config.productionTip = false;

Vue.use(plugin);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
