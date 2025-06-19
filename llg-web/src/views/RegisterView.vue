<template>
  <div class="auth-container">
    <div class="auth-card">
      <div class="auth-header">
        <img src="@/assets/images/logo.png" alt="Logo" class="auth-logo">
        <h1 class="auth-title">Crear una Cuenta</h1>
        <p class="auth-subtitle">Únete a nuestra comunidad. Es rápido y fácil.</p>
      </div>

      <form @submit.prevent="handleRegister" class="auth-form">
        <div class="input-group">
          <label for="name" class="input-label">Nombre Completo</label>
          <input type="text" id="name" v-model="name" class="input-field" placeholder="Tu Nombre Completo" required>
        </div>

        <div class="input-group">
          <label for="email" class="input-label">Correo Electrónico</label>
          <input type="email" id="email" v-model="email" class="input-field" placeholder="tu@email.com" required>
        </div>

        <div class="input-group">
          <label for="password" class="input-label">Contraseña</label>
          <input type="password" id="password" v-model="password" class="input-field" placeholder="Mínimo 8 caracteres" required>
        </div>

        <div class="input-group">
          <label for="password_confirmation" class="input-label">Confirmar Contraseña</label>
          <input type="password" id="password_confirmation" v-model="passwordConfirmation" class="input-field" placeholder="Repite tu contraseña" required>
        </div>

        <button type="submit" class="auth-button">Registrarse</button>
      </form>

      <div class="auth-footer">
        <p>¿Ya tienes una cuenta? <router-link to="/login" class="auth-link">Inicia sesión aquí</router-link></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';

const name = ref('');
const email = ref('');
const password = ref('');
const passwordConfirmation = ref('');
const auth = useAuthStore();

const handleRegister = () => {
  if (password.value !== passwordConfirmation.value) {
    alert('Las contraseñas no coinciden.');
    return;
  }
  // Simulación de registro. En una app real, aquí crearías el usuario en tu backend
  // y luego, opcionalmente, iniciarías sesión.
  auth.login({ 
    name: name.value, 
    email: email.value 
  });
};
</script>

<style scoped>
/* Estilos compartidos con LoginView.vue */
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

.auth-link {
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
