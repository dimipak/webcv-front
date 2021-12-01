import { createApp } from 'vue'
import App from './Admin.vue'
import router from './router/admin'

const app = createApp(App)
app.use(router)
app.mount('#app')
console.log('admin')