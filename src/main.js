import { createApp } from 'vue'
import App from './App.vue'
import {store} from './store'
import router from './router'
import veProgress from "vue-ellipse-progress";
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap"
import ScrollMagic from 'scrollmagic';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap'
import { TweenMax, TimelineMax } from "gsap"
import NotificationsToast from './components/toasts/NotificationsToast'

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax)

const app = createApp(App)
app.use(router)
app.use(store)
app.use(veProgress)
app.component("NotificationsToast", NotificationsToast)
app.mount('#app')