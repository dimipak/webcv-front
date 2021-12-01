import { createWebHistory, createRouter } from "vue-router";
import Mytodos from "../components/Todos";

const routes = [
    {
        path: "/todos",
        name: "Todos",
        component: Mytodos
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;