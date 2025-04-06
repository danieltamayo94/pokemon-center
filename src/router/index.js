import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import WelcomePage from '@/components/WelcomePage.vue';

const routes = [
  { path: '/Home', component: HomePage },
  { path: '/', component: WelcomePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;