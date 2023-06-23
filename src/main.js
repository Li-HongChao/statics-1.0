import Vue from 'vue'
import App from './pagers/IndexView.vue'
import router from './router'
import VueTypedJs from 'vue-typed-js'
import axios from 'axios'


Vue.prototype.$axios = axios
 
Vue.use(VueTypedJs)
axios.defaults.baseURL='https://';
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
