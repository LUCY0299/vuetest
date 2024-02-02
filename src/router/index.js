//index.js
import { createRouter, createWebHistory } from 'vue-router'
import CounterPage from '../views/CounterPage.vue';
import AboutPage from '../views/AboutPage.vue';
import QuizesView from '../views/QuizesView.vue';

const routes = [
  { path: '/CounterPage', component: CounterPage },
  { path: '/AboutPage', component: AboutPage },
  { path: '/QuizesView', component: QuizesView },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
