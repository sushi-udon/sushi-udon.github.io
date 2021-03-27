import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Index from '../components/pages/Index.vue';
import ColorFlipper from '../components/pages/ColorFlipper.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Index', component: Index },
  { path: '/color-flipper', name: 'ColorFlipper', component: ColorFlipper }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
