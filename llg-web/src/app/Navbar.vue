<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue';
import { RouterLink } from 'vue-router';
import { Menu, X, Sun, Moon, LogIn, UserPlus, LayoutDashboard, LogOut } from 'lucide-vue-next';
import { useAuthStore } from '@/stores/auth';

// Props and emits for theme toggling
defineProps({
  isDark: {
    type: Boolean,
    default: false
  }
});
const emit = defineEmits(['toggle-theme']);

const toggleTheme = () => {
  emit('toggle-theme');
};

// Mobile menu state
const isMenuOpen = ref(false);
const auth = useAuthStore();
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Navigation items
const navItems = [
  { name: 'Inicio', path: '/' },
  { name: 'Institución', path: '/institucion' },
  { name: 'Académico', path: '/academico' },
  { name: 'Admisiones', path: '/admisiones' },
  { name: 'Noticias', path: '/noticias' },
  { name: 'Contacto', path: '/contacto' },
];
</script>

<template>
  <header class="header-main">
    <div class="container">
      <div class="navbar">
        <!-- Logo -->
        <router-link to="/" class="logo-container">
          <img src="@/assets/images/logo.png" alt="Logo Institución" class="logo-img" />
          <span class="logo-text">IE Liceo León de Greiff</span>
        </router-link>

        <!-- Desktop Navigation -->
        <nav class="nav-desktop">
          <router-link v-for="item in navItems" :key="item.name" :to="item.path" class="nav-link">
            {{ item.name }}
          </router-link>
        </nav>

        <!-- Botones de Autenticación (Desktop) -->
        <div class="hidden md:flex items-center space-x-2">
          <template v-if="auth.isAuthenticated">
            <RouterLink to="/dashboard" class="auth-button-desktop dashboard-button">
              <LayoutDashboard class="w-4 h-4 mr-2" />
              <span>Dashboard</span>
            </RouterLink>
            <button @click="auth.logout()" class="auth-button-desktop logout-button">
              <LogOut class="w-4 h-4 mr-2" />
              <span>Salir</span>
            </button>
          </template>
          <template v-else>
            <RouterLink to="/login" class="auth-button-desktop login-button">
              <LogIn class="w-4 h-4 mr-2" />
              <span>Entrar</span>
            </RouterLink>
            <RouterLink to="/register" class="auth-button-desktop register-button">
              <UserPlus class="w-4 h-4 mr-2" />
              <span>Registro</span>
            </RouterLink>
          </template>
        </div>

        <!-- Controls -->
        <div class="controls">
          <!-- Theme Toggle -->
          <button @click="toggleTheme" class="theme-toggle" :title="isDark ? 'Modo Claro' : 'Modo Oscuro'">
            <Sun v-if="!isDark" :size="22" />
            <Moon v-else :size="22" />
          </button>

          <!-- Mobile Menu Button -->
          <button @click="toggleMenu" class="menu-button-mobile">
            <X v-if="isMenuOpen" :size="28" />
            <Menu v-else :size="28" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <transition name="slide-fade">
      <div v-show="isMenuOpen" class="md:hidden absolute top-full left-0 w-full mobile-menu-bg shadow-lg p-4">
        <!-- Menú móvil -->
        <div class="pt-4 pb-3 border-t border-gray-700">
          <div class="flex items-center space-x-2">
            <!-- Auth Links Móvil -->
            <template v-if="auth.isAuthenticated">
              <RouterLink to="/dashboard" class="auth-button-mobile dashboard-button">
                <LayoutDashboard class="w-5 h-5 mr-2" />
                <span>Dashboard</span>
              </RouterLink>
              <button @click="auth.logout()" class="auth-button-mobile logout-button">
                <LogOut class="w-5 h-5 mr-2" />
                <span>Salir</span>
              </button>
            </template>
            <template v-else>
              <RouterLink to="/login" class="auth-button-mobile login-button">
                <LogIn class="w-5 h-5 mr-2" />
                <span>Entrar</span>
              </RouterLink>
              <RouterLink to="/register" class="auth-button-mobile register-button">
                <UserPlus class="w-5 h-5 mr-2" />
                <span>Registro</span>
              </RouterLink>
            </template>
          </div>
        </div>

        <nav class="nav-mobile-links">
          <router-link
            v-for="item in navItems"
            :key="item.name"
            :to="item.path"
            @click="toggleMenu"
            class="nav-link-mobile"
          >
            {{ item.name }}
          </router-link>
        </nav>
      </div>
    </transition>
  </header>
</template>

<style scoped>
/* Using variables from theme.css */
.header-main {
  background-color: var(--color-bg-base);
  color: var(--color-text-primary);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid var(--color-accent-light);
  transition: background-color 0.3s, border-color 0.3s;
}

.dark .header-main {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}

/* Logo */
.logo-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: inherit;
}

.logo-img {
  height: 40px;
  width: auto;
}

.logo-text {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text-primary);
}

/* Desktop Navigation */
.nav-desktop {
  display: none;
}

@media (min-width: 768px) {
  .nav-desktop {
    display: flex;
    gap: 1.5rem;
  }
}

.nav-link {
  position: relative;
  text-decoration: none;
  color: var(--color-text-primary);
  font-weight: 500;
  padding: 0.5rem 0;
  transition: color 0.3s;
}

.nav-link:hover {
  color: var(--color-accent);
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-accent);
  transition: width 0.3s;
}

.router-link-exact-active.nav-link {
    color: var(--color-accent);
}

.router-link-exact-active.nav-link::after {
  width: 100%;
}


/* Controls */
.controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-text-primary);
  padding: 0.25rem;
  border-radius: 9999px;
  transition: color 0.3s, background-color 0.3s;
}

.theme-toggle:hover {
  color: var(--color-accent);
  background-color: var(--color-accent-light);
}

/* Mobile Menu */
.menu-button-mobile {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-text-primary);
  z-index: 1001;
}

@media (min-width: 768px) {
  .menu-button-mobile {
    display: none;
  }
}

.nav-mobile {
  position: fixed;
  top: 65px; /* Height of header */
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-bg-base);
  padding: 2rem 1rem;
}

.nav-mobile-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.nav-link-mobile {
  text-decoration: none;
  color: var(--color-text-primary);
  font-size: 1.25rem;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-link-mobile:hover {
  color: var(--color-accent);
}

/* Transition for mobile menu */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>