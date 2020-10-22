import Vue from 'vue'
import VueRouter from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

Vue.use(VueRouter)

const Foo = { template: '<div>foo!!!</div>' }
const Bar = { template: '<div>bar</div>' }


const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/home', component: HelloWorld },
]

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})

export default router;