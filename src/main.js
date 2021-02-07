import Vue from 'vue'
import App from './App.vue'
import router from 'router/index.js'
import store from 'store/index'
import Toast from 'components/common/toast/toast.js'

import FastClick from 'fastclick'
FastClick.attach(document.body)
Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()

Vue.use(Toast)



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
