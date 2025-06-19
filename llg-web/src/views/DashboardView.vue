<template>
  <div class="dashboard-container">
    <div class="dashboard-card">
      <h1 class="dashboard-title">Bienvenido al Dashboard</h1>
      <p class="dashboard-subtitle">¡Has iniciado sesión correctamente!</p>
      <div v-if="auth.currentUser" class="user-info">
        <p><strong>Nombre:</strong> {{ auth.currentUser.name }}</p>
        <p><strong>Email:</strong> {{ auth.currentUser.email }}</p>
      </div>
      <button @click="handleLogout" class="logout-button">Cerrar Sesión</button>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore();

const handleLogout = () => {
  auth.logout();
};
</script>

<style scoped>
.dashboard-container {
  background-color: var(--color-bg-base);
  color: var(--color-text-primary);
  @apply flex items-center justify-center min-h-screen p-4;
}

.dashboard-card {
  background-color: var(--color-bg-panels);
  @apply w-full max-w-2xl p-8 text-center space-y-6 rounded-xl shadow-lg border border-transparent;
  border-color: var(--color-accent-light);
}

.dashboard-title {
  color: var(--color-text-primary);
  @apply text-4xl font-bold;
}

.dashboard-subtitle {
  color: var(--color-text-secondary);
  @apply mt-2 text-lg;
}

.user-info {
  background-color: var(--color-bg-base);
  @apply p-4 rounded-lg text-left space-y-2;
}

.logout-button {
  background-color: var(--color-accent);
  @apply w-full sm:w-auto mt-6 px-6 py-3 font-semibold text-white rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--color-bg-panels)] focus:ring-[var(--color-accent)];
}
</style>
