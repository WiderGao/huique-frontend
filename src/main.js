import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import qs from 'qs'

import router from './router'
import store from './store'
import "vue-awesome/icons";

axios.defaults.baseURL = "http://127.0.0.1:3000";
axios.defaults.withCredentials = true;
Vue.prototype.$ajax = axios
Vue.config.productionTip = false

axios.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      if (config.headers['Content-Type'] != 'application/x-www-form-urlencoded') {
        console.log(config.data)
        config.data = qs.stringify(config.data)
      }

    }
    return config
  },
  error => {
    // console.log(error)
    Promise.reject(error)
  }
)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
