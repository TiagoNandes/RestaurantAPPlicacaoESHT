import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';
require('jquery')
require('bootstrap')
//require('font-awesome')
Vue.config.productionTip = false
Vue.use(VueSweetalert2);

const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
window.onunload = function () {
  vm.$destroy()  
}
