import Admin from "@/views/Admin/Admin.vue"
import Profiles from "@/views/Admin/Profiles.vue"
import Profile from "@/views/Admin/Profile.vue"
import Skills from "@/views/Admin/Skills";
import About from "@/views/Admin/About";

import setUserId from "../middleware/user";

export default [
    {
        path: "/admin",
        name: "Admin/Home",
        component: Admin,
        beforeEnter: () => {
            document.body.style.background = "linear-gradient(to right, #ff823f , #fb4a7e)"
            return true
        }
    },
    {
        path: "/admin/profiles",
        name: "Profiles",
        component: Profiles,
        beforeEnter: () => {
            setUserId()
            document.body.style.background = "linear-gradient(to right, #ff823f , #fb4a7e)"
            return true
        }
    },
    {
        path: "/admin/profiles/:profileId",
        name: "Profile",
        component: Profile,
        beforeEnter: () => {
            setUserId()
            document.body.style.background = "linear-gradient(to right, #ff823f , #fb4a7e)"
            return true
        },
        children: [
            {
                path: "about",
                name: "Admin/About",
                component: About
            },
            {
                path: "skills",
                name: "Admin/Skills",
                component: Skills
            }
        ]
    }
]