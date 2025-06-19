<script setup>
import { ref, computed } from 'vue';
import { ChevronLeft, ChevronRight, BookOpen, Calendar, FileText, ExternalLink } from 'lucide-vue-next';

const currentNewsIndex = ref(0);

const featuredNews = ref([
  {
    image: 'https://www.eltiempo.com/files/image_1200_680/uploads/2023/02/01/63da84031638c.jpeg',
    category: 'Infraestructura',
    title: 'Renovación del Salón de Usos Múltiples',
    excerpt: 'Gracias al aporte de la Cooperadora y el Fondo Horizontes, se completó la primera etapa de la renovación del SUM, mejorando el confort para estudiantes y docentes.',
    link: '#',
  },
  {
    image: 'https://www.comfama.com/wp-content/uploads/2023/02/comfama-noticia-credito-educacion.jpg',
    category: 'Académico',
    title: 'Nuevas Olimpiadas de Conocimiento 2025',
    excerpt: 'Se abren las inscripciones para las olimpiadas de matemáticas, ciencias y lenguaje. ¡Prepara tu equipo y participa!',
    link: '#',
  },
  {
    image: 'https://www.uexternado.edu.co/wp-content/uploads/2022/12/Canva-Diciembre-19-scaled.jpg',
    category: 'Comunidad',
    title: 'Jornada de Integración Familiar',
    excerpt: 'El próximo mes celebraremos nuestro día de la familia con actividades, juegos y comida para todos. ¡No te lo pierdas!',
    link: '#',
  },
]);

const usefulLinks = ref([
  { text: 'Calendario Académico', icon: Calendar, path: '/calendario' },
  { text: 'Plataforma Académica', icon: BookOpen, path: '/plataforma' },
  { text: 'Gobierno Escolar', icon: FileText, path: '/gobierno-escolar' },
  { text: 'Manual de Convivencia', icon: FileText, path: '/manual' },
]);

const academicUpdates = ref([
  { text: 'Inscripción para exámenes de agosto', date: 'Vence el 30 de mayo' },
  { text: 'Entrega de notas del segundo período', date: '15 de junio' },
  { text: 'Inicio de vacaciones de mitad de año', date: '25 de junio' },
]);

const currentNews = computed(() => featuredNews.value[currentNewsIndex.value]);

const nextNews = () => {
  currentNewsIndex.value = (currentNewsIndex.value + 1) % featuredNews.value.length;
};

const prevNews = () => {
  currentNewsIndex.value = (currentNewsIndex.value - 1 + featuredNews.value.length) % featuredNews.value.length;
};

const selectNews = (index) => {
  currentNewsIndex.value = index;
};
</script>

<template>
  <div class="page-container">
    <div class="grid-layout">
      <!-- Main Content: News Carousel -->
      <main class="main-content">
        <h2 class="section-title">Noticias Destacadas</h2>
        
        <div class="news-carousel">
          <!-- Carousel Image -->
          <div class="relative">
            <img :src="currentNews.image" :alt="currentNews.title" class="carousel-image" />
            <div class="carousel-overlay"></div>
            <div class="carousel-controls">
              <button @click="prevNews" class="control-button" aria-label="Anterior">
                <ChevronLeft class="h-6 w-6" />
              </button>
              <button @click="nextNews" class="control-button" aria-label="Siguiente">
                <ChevronRight class="h-6 w-6" />
              </button>
            </div>
          </div>

          <!-- Carousel Content -->
          <div class="carousel-content">
            <div>
              <span class="news-category">{{ currentNews.category }}</span>
              <h3 class="news-title">{{ currentNews.title }}</h3>
              <p class="news-excerpt">{{ currentNews.excerpt }}</p>
              <a :href="currentNews.link" class="read-more-link">
                Leer más <ExternalLink class="inline-block h-4 w-4 ml-1" />
              </a>
            </div>
            <!-- Dots Indicator -->
            <div class="carousel-dots">
              <button
                v-for="(_, index) in featuredNews"
                :key="index"
                @click="selectNews(index)"
                :class="['dot', { 'dot-active': currentNewsIndex === index }]"
                :aria-label="`Ir a la noticia ${index + 1}`"
              ></button>
            </div>
          </div>
        </div>
      </main>

      <!-- Sidebar -->
      <aside class="sidebar">
        <!-- Useful Information Panel -->
        <div class="info-panel">
          <h3 class="panel-title">Información Útil</h3>
          <ul class="panel-list">
            <li v-for="(link, i) in usefulLinks" :key="i">
              <router-link :to="link.path" class="panel-link">
                <component :is="link.icon" class="link-icon" />
                <span>{{ link.text }}</span>
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Academic Updates Panel -->
        <div class="info-panel">
          <h3 class="panel-title">Novedades Académicas</h3>
          <ul class="panel-list">
            <li v-for="(update, i) in academicUpdates" :key="i" class="update-item">
              <div class="update-text">{{ update.text }}</div>
              <div class="update-date">{{ update.date }}</div>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  @apply container mx-auto px-4 py-8;
}

.grid-layout {
  @apply grid grid-cols-1 lg:grid-cols-3 gap-8;
}

.main-content {
  @apply lg:col-span-2;
}

.sidebar {
  @apply space-y-8;
}

.section-title {
  color: var(--color-text-primary);
  @apply text-3xl font-bold mb-6;
}

/* News Carousel */
.news-carousel {
  background-color: var(--color-bg-panels);
  @apply rounded-xl shadow-lg overflow-hidden border border-transparent;
  border-color: var(--color-accent-light);
}

.carousel-image {
  @apply w-full h-64 md:h-80 object-cover transition-transform duration-500 ease-in-out;
}

.news-carousel:hover .carousel-image {
  @apply transform scale-105;
}

.carousel-overlay {
  @apply absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent;
}

.carousel-controls {
  @apply absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2;
}

.control-button {
  background-color: var(--color-bg-base);
  color: var(--color-text-primary);
  @apply p-2 rounded-full shadow-md opacity-75 hover:opacity-100 transition-opacity;
}

.carousel-content {
  @apply p-6 flex flex-col md:flex-row justify-between md:items-end gap-4;
}

.news-category {
  color: var(--color-text-secondary);
  @apply font-bold text-sm uppercase tracking-wider;
}

.news-title {
  color: var(--color-text-primary);
  @apply text-2xl font-bold mt-1 mb-2;
}

.news-excerpt {
  color: var(--color-text-primary);
  @apply text-base opacity-90;
}

.read-more-link {
  color: var(--color-accent);
  @apply font-semibold mt-4 inline-block hover:underline;
}

.carousel-dots {
  @apply flex justify-center items-center space-x-2 mt-4 md:mt-0;
}

.dot {
  background-color: var(--color-text-primary);
  @apply w-2 h-2 rounded-full opacity-40 hover:opacity-70 transition-opacity;
}

.dot-active {
  background-color: var(--color-accent);
  @apply opacity-100 w-3 h-3;
}

/* Sidebar Panels */
.info-panel {
  background-color: var(--color-bg-panels);
  color: var(--color-text-primary);
  @apply rounded-xl shadow-md p-6 border border-transparent;
  border-color: var(--color-accent-light);
}

.panel-title {
  border-bottom: 2px solid var(--color-accent);
  @apply text-xl font-bold pb-3 mb-4;
}

.panel-list {
  @apply space-y-3;
}

.panel-link {
  color: var(--color-text-primary);
  @apply flex items-center p-2 rounded-md transition-colors;
}

.panel-link:hover {
  background-color: var(--color-accent-light);
  color: var(--color-accent);
}

.link-icon {
  @apply h-5 w-5 mr-3 opacity-80;
}

.update-item {
  @apply border-l-4 pl-4 py-1;
  border-color: var(--color-accent-light);
}

.update-text {
  @apply font-semibold;
}

.update-date {
  color: var(--color-text-secondary);
  @apply text-sm font-bold;
}
</style>
