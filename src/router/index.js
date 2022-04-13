import { createWebHistory, createRouter } from "vue-router";

import Home from "@/views/Home.vue"
import About from "@/views/About.vue";
import Skills from "@/views/Skills.vue"
import Portfolio from "@/views/Portfolio.vue"
import Experience from "@/views/Experience.vue"
import Education from "@/views/Education.vue"

import AdminRoutes from './admin'

const BaseRoutes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        beforeEnter: () => {
            document.body.style.background = "#d5d3d3"
            // document.html.style.background = "#d5d3d3"
            return true
        },
        meta: {
            title: "dimipak"
        },
        children: [
            {
                path: "/about",
                name: "About",
                component: About
            },
            {
                path: "/skills",
                name: "Skills",
                component: Skills
            },
            {
                path: "/portfolio",
                name: "Portfolio",
                component: Portfolio
            },
            {
                path: "/experience",
                name: "Experience",
                component: Experience
            },
            {
                path: "/education",
                name: "Education",
                component: Education
            }
        ]
    }
];

const routes = BaseRoutes.concat(AdminRoutes)

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;