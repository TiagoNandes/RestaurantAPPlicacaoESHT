import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import injectedData from './injectedData'
require('jquery')
require('bootstrap')
//require('font-awesome')
Vue.config.productionTip = false

const vm = new Vue({
  router,
  injectedData,
  store,
  render: h => h(App)
}).$mount('#app')
window.onunload = function () {
  vm.$destroy()  
}
