import Vue from 'vue'
import VueRouter from "vue-router";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Portfolio from "@/components/Portfolio";

Vue.use(VueRouter)

const progress = { template: "<div>In progress...</div>" }

const routes = [
    { path: '/about', component: About },
    { path: '/skills', component: Skills },
    { path: '/portfolio', component: Portfolio },
    { path: '/work', component: Work },
    { path: '/education', component: progress }
]

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})

export default router;