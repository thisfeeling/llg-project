import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

// Vistas
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import DashboardView from '@/views/DashboardView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { title: 'Inicio' }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: { title: 'Iniciar Sesión', guest: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
    meta: { title: 'Registro', guest: true }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
    meta: { title: 'Dashboard', requiresAuth: true }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/errors/NotFoundView.vue'),
    meta: { title: 'Página no encontrada' }
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  },
});

router.beforeEach((to, from, next) => {
  const auth = useAuthStore();
  
  // Actualizar el título de la página
  document.title = to.meta.title 
    ? `${to.meta.title} | Liceo León de Greiff` 
    : 'Liceo León de Greiff';

  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    next({ name: 'Login' });
  } else if (to.meta.guest && auth.isAuthenticated) {
    next({ name: 'Dashboard' });
  } else {
    next();
  }
});

export default router;
