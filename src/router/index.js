import { createWebHistory, createRouter } from "vue-router";
import About from "@/views/About.vue";
import Skills from "@/views/Skills.vue"
import Portfolio from "@/views/Portfolio.vue"
import Experience from "@/views/Experience.vue"
import Education from "@/views/Education.vue"
import Admin from "@/views/Admin.vue"
import Home from "@/views/Home.vue"
import Profiles from "@/views/Profiles.vue"
import Profile from "@/views/Profile.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
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
    },
    {
        path: "/admin",
        name: "HomeAdmin",
        component: Admin
    },
    {
        path: "/admin/profiles",
        name: "Profiles",
        component: Profiles
    },
    {
        path: "/admin/profiles/:profileId",
        name: "Profile",
        component: Profile,
        beforeEnter: (to, from) => {
            console.log("before enter profile route true")
            return true
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;