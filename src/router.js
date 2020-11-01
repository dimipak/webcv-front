import Vue from 'vue'
import VueRouter from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Work from "@/components/Work";

Vue.use(VueRouter)

// const progress = "<div>test</div>";

const routes = [
    { path: '/about', component: About },
    { path: '/skills', component: Skills },
    { path: '/work', component: Work },
    // { path: '/education', component: progress },
    { path: '/home', component: HelloWorld },
]

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})

export default router;