<!-- src/views/ApiTest.vue -->
<template>
  <div class="api-test">
    <h2>Test API</h2>
    <div v-if="isLoading" class="loading">Cargando...</div>
    <div v-else-if="error" class="error">
      Error: {{ error }}
    </div>
    <div v-else class="response">
      <p>Respuesta del servidor:</p>
      <pre>{{ response }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const response = ref(null)
const isLoading = ref(true)
const error = ref(null)

const fetchData = async () => {
  try {
    error.value = null
    isLoading.value = true
    const { data } = await axios.get('/api/ping')
    response.value = data
  } catch (err) {
    console.error('Error al contactar el backend:', err)
    error.value = err.response?.data?.message || err.message || 'Error desconocido'
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchData()
})
</script>

<style scoped>
.api-test {
  padding: 1rem;
  max-width: 800px;
  margin: 0 auto;
}

.loading {
  color: #666;
  font-style: italic;
}

.error {
  color: #d32f2f;
  padding: 1rem;
  background-color: #bd5363;
  border-radius: 4px;
}

.response {
  background-color: #bd5363;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
}

pre {
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>