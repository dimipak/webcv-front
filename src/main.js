import './plugins/bootstrap-vue'
import './plugins/vue-ellipse-progress'
import './plugins/vue-scrollmagic'

import Vue from 'vue'
import App from './App.vue'

import router from "@/router"


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
