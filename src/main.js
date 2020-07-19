import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'

axios.defaults.baseURL = "http://api.wider.ink:3000";
Vue.prototype.$ajax = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
