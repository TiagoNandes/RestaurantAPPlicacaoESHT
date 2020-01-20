import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import injectedData from './injectedData'
require('ajax')
require('bootstrap')
//require('font-awesome')
Vue.config.productionTip = false

new Vue({
  router,
  injectedData,
  store,
  render: h => h(App)
}).$mount('#app')
