import Vue from 'vue'
import VueRouter from "vue-router";

// Components
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

Vue.use(VueRouter)

const notFound = { template: '<h4>Not Found</h4>' }

const routes = [
    { path: '/about', component: About },
    { path: '/skills', component: Skills },
    { path: '/portfolio', component: Portfolio },
    { path: '/experience', component: Experience },
    { path: '/education', component: Education },
    { path: '/contact', component: Contact},
    { path: '*', component: notFound}
]

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})

export default router;