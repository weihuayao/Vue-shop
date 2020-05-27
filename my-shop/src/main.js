// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { Button } from 'mint-ui'
import Split from './components/Split/Split'
import './filters/index'
import VueLazyload from 'vue-lazyload'
import loading from './common/images/loading.gif'

Vue.use(VueLazyload, {
  loading
})

Vue.component('Split', Split)
Vue.component(Button.name, Button)

require('./mock/mock')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
