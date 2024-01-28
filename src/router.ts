import Home from "./pages/Home.vue";
import Sub from "./pages/Sub.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/sub', name: 'Sub', component: Sub },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;