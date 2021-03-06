import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Index from '@/components/pages/Index.vue';
import ColorFlipper from '@/components/pages/ColorFlipper.vue';
import Counter from '@/components/pages/Counter.vue';
import ReviewCarousel from '@/components/pages/ReviewCarousel.vue';
import ResponsiveNavbar from '@/components/pages/ResponsiveNavbar.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Index', component: Index },
  { path: '/color-flipper', name: 'ColorFlipper', component: ColorFlipper },
  { path: '/counter', name: 'Counter', component: Counter },
  { path: '/review-carousel', name: 'ReviewCarousel', component: ReviewCarousel },
  { path: '/responsive-navbar', name: 'ResponsiveNavbar', component: ResponsiveNavbar },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
