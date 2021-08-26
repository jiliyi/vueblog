import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/global.less'
import { showMessage } from '@/utils'
import '@/directive';
import eventBus from './eventBus';
Vue.prototype.$showMessage = showMessage;
Vue.prototype.eventBus = eventBus;

import '@/directive/lazy';
window.store = store;

store.dispatch('setting/setSetting');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


