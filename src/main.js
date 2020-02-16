import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import bus from './lib/bus'
import {setToken} from './lib/util'
let Base64 = require('js-base64').Base64;

Vue.config.productionTip = false
Vue.prototype.$Bus = bus
Vue.prototype.$base64 = Base64;

/******监听刷新开始***********/
var beforeunloadTime = 0;
var unloadTime = 0
window.addEventListener('beforeunload', e => {
  beforeunloadTime = new Date().getTime()
})

window.addEventListener('unload', e => {
  unloadTime = new Date().getTime()
  if(unloadTime-beforeunloadTime<=5){
    setToken('')
  }
})
/******监听刷新结束***********/

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
