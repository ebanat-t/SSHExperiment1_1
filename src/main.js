// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from '@/firebase/firebase'
import store from '../store'
import VueMeta from 'vue-meta'
import VueHead from 'vue-head'

Vue.config.productionTip = false

Vue.use(VueMeta)
Vue.use(VueHead)


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

