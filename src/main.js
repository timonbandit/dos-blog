import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

//  Styles
require ('./assets/css/bootstrap.min.css');

Vue.config.productionTip = false;

new Vue({
  router,
  render: fn => fn(App),
}).$mount('#app');
