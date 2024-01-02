// router.js (or wherever you define your routes)

import { createRouter, createWebHistory } from 'vue-router';
import MainHome from "./components/Home.vue";
import AboutPage from "./components/About.vue";
import WeatherCard from "./components/weathercard.vue";



const routes = [
  {
    path: '/home',
    component: MainHome,
    children: [
      {
        name: 'home',
        path: '',
        meta: { requiresAuth: false, isPublicAuthPage: false },
        component: MainHome,
      },
    ],
  },
  {
    path: '/about',
    component: AboutPage,
    children: [
      {
        name: 'About',
        path: '',
        meta: { requiresAuth: false, isPublicAuthPage: false },
        component: AboutPage,
      },
    ],
  },
  {
    path: '/weather',
    children: [
      {
        name: 'Weather',
        path: '',
        meta: { requiresAuth: false, isPublicAuthPage: false },
      },
    ],
  },

  {
    path: '/weathercard',
    children: [
      {
        name: 'WeatherCard',
        path: '',
        meta: { requiresAuth: false, isPublicAuthPage: false },
        component: WeatherCard,
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    meta: { requiresAuth: false },
   
  },
  // ... (existing routes)
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
