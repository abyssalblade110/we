import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import MainHome from "./components/Home.vue";
import AboutPage from "./components/AboutPage.vue";
import WeatherComponent from "./components/Weather.vue";


const routes = [
  { path: '/home', component: MainHome },
  { path: '/about', component: AboutPage },
  { path: '/weather', component: WeatherComponent },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
