import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Including the bundled Bootstrap JS
import MainHome from './components/Home.vue';
import AboutPage from './components/AboutPage.vue';
import WeatherComponent from './components/Weather.vue';

const routes = [
  { path: '/home', component: MainHome },
  { path: '/about', component: AboutPage },
  { path: '/weather', component: WeatherComponent }, // New route for weather
  { path: '/', redirect: '/home' }, // Redirect root to the home page
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
