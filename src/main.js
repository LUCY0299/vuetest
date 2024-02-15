//main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/main.css'  //設置全局css


createApp(App).use(router).mount('#app')
