/* Style Imports */
import '@/assets/styles/global.scss';
import '@mdi/font/css/materialdesignicons.min.css';

import Vue from 'vue';
import App from './App.vue';
import router from './router';

import BaseButton from '@/components/buttons/BaseButton.vue';
Vue.component('BaseButton', BaseButton);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
