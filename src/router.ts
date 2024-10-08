import Home from "./pages/Home.vue";
import {createRouter, createWebHistory} from "vue-router";
import Guide from "./pages/Guide.vue";

import Weblogs from "./pages/Weblogs.vue";
import Weblog20240316 from "./modules/weblogs/pages/Weblog20240316.vue";
import Weblog20241008 from "./modules/weblogs/pages/Weblog20241008.vue";

import Contents from "./pages/Contents.vue";
import Practice202401 from "./modules/contents/pages/Practice202401.vue";
import Practice202402 from "./modules/contents/pages/Practice202402.vue";
import Practice202403 from "./modules/contents/pages/Practice202403.vue";
import Sky202401 from "./modules/contents/pages/Sky202401.vue";
import Sky202402 from "./modules/contents/pages/Sky202402.vue";
import Sky202403 from "./modules/contents/pages/Sky202403.vue";
import Sky202404to10 from "./modules/contents/pages/Sky202404to10.vue";
import Minecraft from "./modules/contents/pages/Minecraft.vue";

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/guide', name: 'Guide', component: Guide },

  { path: '/weblogs', name: 'Weblogs', component: Weblogs },
  { path: '/weblogs/2024-3-16', name: 'Weblog20240316', component: Weblog20240316 },
  { path: '/weblogs/2024-10-08', name: 'Weblog20241008', component: Weblog20241008 },

  { path: '/contents', name: 'Contents', component: Contents },
  { path: '/contents/practice/2024-1', name: 'Practice202401', component: Practice202401 },
  { path: '/contents/practice/2024-2', name: 'Practice202402', component: Practice202402 },
  { path: '/contents/practice/2024-3', name: 'Practice202403', component: Practice202403 },
  { path: '/contents/sky/2024-1', name: 'Sky202401', component: Sky202401 },
  { path: '/contents/sky/2024-2', name: 'Sky202402', component: Sky202402 },
  { path: '/contents/sky/2024-3', name: 'Sky202403', component: Sky202403 },
  { path: '/contents/sky/2024-4to10', name: 'Sky202404to10', component: Sky202404to10 },
  { path: '/contents/minecraft', name: 'minecraft', component: Minecraft }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;