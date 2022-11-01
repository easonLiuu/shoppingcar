import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"

Vue.config.productionTip = false

//全局绑定axios
import axios from 'axios'
axios.defaults.baseURL = "https://www.escook.cn"
//添加到vue的原型上
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
}).$mount('#app')
