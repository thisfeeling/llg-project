// Estilos globales
import './assets/tailwind.css'
import './assets/main.css'
import './assets/styles/theme.css'

// Importaciones principales
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// Configuración de Axios para desarrollo y producción
const api = axios.create({
  baseURL: import.meta.env.DEV 
    ? 'http://localhost:8000/api' // URL de desarrollo
    : '/api', // URL de producción (asumiendo que estará en el mismo dominio)
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true // Importante para manejar cookies de sesión
});

// Interceptor para manejar errores globales
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // Redirigir a login si no está autenticado
      router.push('/login');
    }
    return Promise.reject(error);
  }
);

// Crear la aplicación
const app = createApp(App)

app.use(createPinia())

// Hacer que la instancia de axios esté disponible globalmente
app.config.globalProperties.$axios = api



// Instalar plugins
app.use(createPinia());
app.use(router);

app.mount('#app');

export { api };
