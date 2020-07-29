import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import qs from 'qs'

import router from './router'
import store from '@/store'

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
import "./theme/main.scss";

if (process.env.NODE_ENV == "development")
  axios.defaults.baseURL = "http://api2.wider.ink";
else if (process.env.NODE_ENV == "production")
  axios.defaults.baseURL = "http://api.wider.ink";

axios.defaults.withCredentials = true;
Vue.prototype.$ajax = axios
Vue.config.productionTip = false

axios.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      if (config.headers['Content-Type'] != 'application/x-www-form-urlencoded') {
        // console.log(config.data)
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
