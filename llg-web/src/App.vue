<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/app/Navbar.vue'
import Footer from '@/app/Footer.vue'
import { ref, onMounted, provide } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLoading = ref(true)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
const isDark = ref(false)

// Verificar el tema actual
const checkTheme = () => {
  isDark.value = document.documentElement.classList.contains('dark')
}

// Alternar entre tema claro y oscuro
const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

// Configuración global
onMounted(() => {
  // Verificar el tema guardado o la preferencia del sistema
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  } else {
    isDark.value = prefersDark
  }
  
  document.documentElement.classList.toggle('dark', isDark.value)
  
  // Simular carga inicial
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})


</script>

<template>
  <!-- Mostrar un loader mientras se carga la aplicación -->
  <div v-if="isLoading" class="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
    <div class="flex flex-col items-center">
      <div class="animate-pulse mb-4">
        <img 
          src="@/assets/images/logo.png" 
          alt="Liceo León de Greiff" 
          class="h-20 w-auto"
        />
      </div>
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
      <p class="mt-4 text-gray-600 dark:text-gray-300">Cargando...</p>
    </div>
  </div>
  
  <!-- Contenido principal de la aplicación -->
      <div v-else class="app-container min-h-screen flex flex-col transition-colors duration-300">
    <!-- Barra de navegación -->
    <Navbar @toggle-theme="toggleTheme" :is-dark="isDark" />
    
    <!-- Contenido principal -->
    <main class="flex-grow">
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>
    
    <!-- Pie de página -->
    <Footer />
    
    <!-- Botón flotante para subir -->
    <button
      @click="scrollToTop"
      class="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-40"
      aria-label="Volver arriba"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.app-container {
  background-color: var(--color-bg-base);
  color: var(--color-text-primary);
}
</style>

<style>
/* Fuentes */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');

/* Variables CSS personalizadas */
:root {
  --color-primary: 21, 93, 252;    /* #155dfc */
  --color-secondary: 253, 199, 0;  /* #fdc700 */
  --color-text: 10, 10, 10;        /* #0a0a0a */
  --color-bg: 255, 255, 255;       /* #ffffff */
  --color-card: 248, 250, 252;     /* #f8fafc */
}

.dark {
  --color-text: 255, 255, 255;    /* #ffffff */
  --color-bg: 16, 24, 40;          /* #101828 */
  --color-card: 30, 41, 57;        /* #1e2939 */
}

/* Estilos base */
body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(var(--color-text));
  background-color: rgb(var(--color-bg));
  line-height: 1.6;
}

/* Transiciones */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Scrollbar personalizada */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Estilos para modo oscuro */
.dark ::-webkit-scrollbar-track {
  background: #1f2937;
}

.dark ::-webkit-scrollbar-thumb {
  background: #4b5563;
}

.dark ::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}
</style>
