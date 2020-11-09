import './plugins/bootstrap-vue'
import './plugins/vue-ellipse-progress'

import Vue from 'vue'
import App from './App.vue'

import router from "@/router"


// import VueAnimated from '@codekraft-studio/vue-animated'
// Vue.use(VueAnimated)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
