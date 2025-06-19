<template>
  <div class="auth-container bg-red-500">
    <div class="auth-card">
      <div class="auth-header">
        <img src="@/assets/images/logo.png" alt="Logo" class="auth-logo">
        <h1 class="auth-title">Iniciar Sesión</h1>
        <p class="auth-subtitle">Bienvenido de nuevo. Por favor, ingresa tus credenciales.</p>
      </div>

      <form @submit.prevent="handleLogin" class="auth-form">
        <div class="input-group">
          <label for="email" class="input-label">Correo Electrónico</label>
          <input type="email" id="email" v-model="email" class="input-field" placeholder="tu@email.com" required>
        </div>

        <div class="input-group">
          <label for="password" class="input-label">Contraseña</label>
          <input type="password" id="password" v-model="password" class="input-field" placeholder="••••••••" required>
        </div>

        <div class="auth-options">
          <label class="remember-me">
            <input type="checkbox" v-model="remember" class="remember-checkbox">
            <span class="remember-text">Recordarme</span>
          </label>
          <a href="#" class="forgot-password-link">¿Olvidaste tu contraseña?</a>
        </div>

        <button type="submit" class="auth-button">Ingresar</button>
      </form>

      <div class="auth-footer">
        <p>¿No tienes una cuenta? <router-link to="/register" class="auth-link">Regístrate aquí</router-link></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';

const email = ref('');
const password = ref('');
const remember = ref(false);
const auth = useAuthStore();

const handleLogin = () => {
  // Simulación de login. En una app real, aquí harías una llamada a tu backend.
  auth.login({ 
    name: 'Usuario de Prueba', 
    email: email.value 
  });
};
</script>

<style scoped>
.auth-container {
  background-color: var(--color-bg-base);
  color: var(--color-text-primary);
  @apply flex items-center justify-center min-h-screen p-4;
}

.auth-card {
  background-color: var(--color-bg-panels);
  @apply w-full max-w-md p-8 space-y-6 rounded-xl shadow-lg border border-transparent;
  border-color: var(--color-accent-light);
}

.auth-header {
  @apply text-center;
}

.auth-logo {
  @apply w-20 h-20 mx-auto mb-4;
}

.auth-title {
  color: var(--color-text-primary);
  @apply text-3xl font-bold;
}

.auth-subtitle {
  color: var(--color-text-secondary);
  @apply mt-2 text-sm;
}

.auth-form {
  @apply space-y-6;
}

.input-group {
  @apply space-y-2;
}

.input-label {
  color: var(--color-text-primary);
  @apply text-sm font-medium;
}

.input-field {
  background-color: var(--color-bg-base);
  color: var(--color-text-primary);
  border-color: var(--color-accent-light);
  @apply w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--color-bg-panels)] focus:ring-[var(--color-accent)];
}

.auth-options {
  @apply flex items-center justify-between text-sm;
}

.remember-me {
  @apply flex items-center gap-2;
}

.remember-checkbox {
  @apply h-4 w-4 rounded border-[var(--color-accent-light)] text-[var(--color-accent)] focus:ring-[var(--color-accent)];
}

.forgot-password-link, .auth-link {
  color: var(--color-accent);
  @apply font-medium hover:underline;
}

.auth-button {
  background-color: var(--color-accent);
  @apply w-full px-4 py-2 font-semibold text-white rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--color-bg-panels)] focus:ring-[var(--color-accent)];
}

.auth-footer {
  @apply text-center text-sm;
}
</style>
