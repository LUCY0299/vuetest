//index.js
import { createRouter, createWebHistory } from 'vue-router'
import CounterPage from '../views/CounterPage.vue';
import AboutPage from '../views/AboutPage.vue';
import QuizesView from '../views/QuizesView.vue';
import QuizView from '../views/QuizView.vue';
/* import HeaderOne from '../components/HeaderOne.vue';
import CurrencyConverter from '../components/CurrencyConverter.vue';
import FooterOne from '../components/FooterOne.vue'; */

const routes = [
  { path: '/', redirect: '/Quizes'},
  { path: '/CounterPage', component: CounterPage },
  { path: '/AboutPage', component: AboutPage },
  { path: '/Quizes', component: QuizesView ,name: 'quizes'},
  { path: "/Quiz/:id", component: QuizView ,name: 'quiz',}
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
