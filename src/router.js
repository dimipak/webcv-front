import Vue from 'vue'
import VueRouter from "vue-router";

// Components
import About from "@/components/About";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Portfolio from "@/components/Portfolio";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

Vue.use(VueRouter)

const routes = [
    { path: '/about', component: About },
    { path: '/skills', component: Skills },
    { path: '/portfolio', component: Portfolio },
    { path: '/work', component: Work },
    { path: '/education', component: Education },
    { path: '/contact', component: Contact}
]

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})

export default router;