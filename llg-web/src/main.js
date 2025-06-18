import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import axios from 'axios'

const api = axios.create({
  baseURL: '/api', // Se comunicará correctamente con Laravel en producción
});

export default api;

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
