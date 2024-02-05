import Home from "./pages/Home.vue";
import Sub from "./pages/Sub.vue";
import {createRouter, createWebHistory} from "vue-router";
import Guide from "./pages/Guide.vue";

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/sub', name: 'Sub', component: Sub },
    { path: '/guide', name: 'Guide', component: Guide },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;