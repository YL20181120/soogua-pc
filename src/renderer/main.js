import Vue from 'vue'
import http from '../utils/http'

import App from './App'
import router from './router'
import store from './store'

import { Message } from 'element-ui'

import easemob from '$utils/easemob'

easemob.initEmclient()
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = http
Vue.config.productionTip = false
Vue.prototype.$message = Message
Vue.prototype.$user = () => {
  return store.getters.currentUser
}
/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
