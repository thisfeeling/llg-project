import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

export const useAuthStore = defineStore('auth', () => {
  // State
  const user = ref(JSON.parse(localStorage.getItem('user')));
  const router = useRouter();

  // Getters
  const isAuthenticated = computed(() => !!user.value);
  const currentUser = computed(() => user.value);

  // Actions
  function login(userData) {
    // En una app real, aquí harías una llamada a la API y obtendrías un token
    user.value = userData;
    localStorage.setItem('user', JSON.stringify(userData));
    router.push('/dashboard');
  }

  function logout() {
    user.value = null;
    localStorage.removeItem('user');
    router.push('/login');
  }

  return { user, isAuthenticated, currentUser, login, logout };
}, {
  persist: true,
});
