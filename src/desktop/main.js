import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import store from '@/store'
import qs from 'qs'
import axios from 'axios'
import VueCookies from 'vue-cookies'
import { Message } from "element-ui";
Vue.use(VueCookies)

if (process.env.NODE_ENV == "development")
  // axios.defaults.baseURL = "http://api2.wider.ink";
  axios.defaults.baseURL = "//127.0.0.1:3000";
else if (process.env.NODE_ENV == "production")
  axios.defaults.baseURL = "//api.wider.ink";

axios.defaults.withCredentials = true;
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
Vue.prototype.$message = Message;
Vue.prototype.$ajax = axios
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
