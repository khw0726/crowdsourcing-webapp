// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import semantic from 'semantic'
import '../node_modules/semantic-ui/dist/semantic.css'
import store from './store/store'
import $ from 'jquery'
import BootstrapVue from 'bootstrap-vue'
import VueTabs from 'vue-nav-tabs'
import 'vue-nav-tabs/themes/vue-tabs.css'

Vue.config.productionTip = false

Vue.use(VueTabs)
Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
