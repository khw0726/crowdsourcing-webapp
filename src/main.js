// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import semantic from 'semantic'

import store from './store/store'
import $ from 'jquery'
import BootstrapVue from 'bootstrap-vue'
import VueTabs from 'vue-nav-tabs'
import 'vue-nav-tabs/themes/vue-tabs.css'
import firebase from 'firebase'
import VueFire from 'vuefire'
import fb from '@/fb.js'

Vue.config.productionTip = false

Vue.use(VueTabs)
Vue.use(BootstrapVue)
Vue.use(VueFire)
fb.messaging.onMessage((payload) => {
  console.log("Message received. ", payload)
  console.log(this)
  // this.navbarText = '새 질문이 도착했습니다.'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  firebase: {
    questions: fb.db.ref('questions'),
    users: fb.db.ref('users')
  },
  template: '<App/>',
  components: { App }
})
