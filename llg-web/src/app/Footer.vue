<template>
  <footer class="footer-main">
    <div class="container">
      <div class="footer-grid">
        <!-- Institution Info -->
        <div class="footer-section">
          <h3 class="footer-title">Liceo León de Greiff</h3>
          <p class="footer-text">{{ contactInfo.address }}</p>
          <p class="footer-text">
            <span class="block">Horario de atención: </span>
            <span class="block">7:00 am - 6:00 pm de Lunes a Viernes</span>
          </p>
        </div>

        <!-- Contact Info -->
        <div class="footer-section">
          <h3 class="footer-title">Contacto</h3>
          <ul class="footer-list">
            <li><Phone class="footer-icon" /><span>Teléfono: {{ contactInfo.phone }}</span></li>
            <li><Mail class="footer-icon" /><span>Email: {{ contactInfo.email }}</span></li>
            <li><ShieldCheck class="footer-icon" /><span>Línea anticorrupción: {{ contactInfo.antiCorruption }}</span></li>
          </ul>
        </div>

        <!-- Quick Links -->
        <div class="footer-section">
          <h3 class="footer-title">Enlaces Rápidos</h3>
          <ul class="footer-list">
            <li v-for="link in quickLinks" :key="link.name">
              <router-link :to="link.path" class="footer-link">{{ link.name }}</router-link>
            </li>
          </ul>
        </div>

        <!-- Location and Social -->
        <div class="footer-section">
          <h3 class="footer-title">Ubicación y Redes</h3>
          <a :href="contactInfo.mapLink" target="_blank" rel="noopener noreferrer" class="footer-map-link">
            <MapPin class="footer-icon" />
            <span>Ver en Google Maps</span>
          </a>
          <div class="map-container">
            <iframe
              :src="contactInfo.mapEmbed"
              width="100%"
              height="150"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="social-links">
            <a v-for="social in socialLinks" :key="social.name" :href="social.url" :class="['social-icon', social.style]" :aria-label="social.name">
              <component :is="social.icon" class="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="footer-copyright">
        <p> 2025 Liceo León de Greiff. Todos los derechos reservados.</p>
        <p class="mt-2">Diseñado y desarrollado con <span class="text-yellow-400">❤️</span> por el equipo de desarrollo del Liceo León de Greiff</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import { MapPin, Phone, Mail, ShieldCheck, Facebook, Instagram } from 'lucide-vue-next';

const currentYear = new Date().getFullYear();

const contactInfo = {
  address: 'Carrera 24 # 16-02, Barrio San Antonio, Manizales',
  phone: '3245795652',
  email: 'ieleondegreiff@semmanizales.edu.co',
  antiCorruption: '*175',
  instagram: 'https://www.instagram.com/leondegreiff_manizales/',
  facebook: 'https://www.facebook.com/profile.php?id=100079610591006',
  mapLink: 'https://maps.app.goo.gl/2qXpEELBSpzUcZKH6',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15896.923835222215!2d-75.52120888727222!3d5.066276251718729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e476ff950e9a6c7%3A0x5fd5478796b3f676!2sLiceo%20Le%C3%B3n%20De%20Greiff!5e0!3m2!1ses-419!2sco!4v1750281113480!5m2!1ses-419!2sco',
};

const quickLinks = [
  { name: 'Horizonte Institucional', path: '/horizonte' },
  { name: 'Misión y Visión', path: '/mision-vision' },
  { name: 'Gobierno Escolar', path: '/gobierno-escolar' },
  { name: 'Admisiones', path: '/admisiones' },
  { name: 'Noticias', path: '/noticias' },
  { name: 'Contáctenos', path: '/contacto' },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, url: contactInfo.facebook, style: 'bg-blue-600 hover:bg-blue-700' },
  { name: 'Instagram', icon: Instagram, url: contactInfo.instagram, style: 'bg-pink-500 hover:bg-pink-600' },
  { name: 'Correo', icon: Mail, url: `mailto:${contactInfo.email}`, style: 'bg-red-600 hover:bg-red-700' },
];
</script>

<style scoped>
.footer-main {
  background-color: var(--color-bg-panels, #1e2939);
  color: var(--color-text-primary, #fff);
  padding-top: 3rem;
  padding-bottom: 1.5rem;
}

.container {
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
}

@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.footer-section {
  margin-bottom: 1.5rem;
}

.footer-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-text-secondary, #fdc700);
}

.footer-text {
  margin-bottom: 1rem;
  color: var(--color-text-primary, #fff);
}

.footer-list {
  list-style: none;
  padding: 0;
  space-y: 0.5rem; 
}

.footer-list li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.footer-icon {
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
  margin-top: 0.125rem;
  flex-shrink: 0;
  color: var(--color-text-secondary, #fdc700);
}

.footer-link {
  color: var(--color-text-primary, #fff);
  transition: color 0.2s ease-in-out;
}

.footer-link:hover, .router-link-active {
  color: var(--color-text-secondary, #fdc700);
}

.footer-map-link {
  display: inline-flex;
  align-items: center;
  margin-bottom: 1rem;
  color: var(--color-text-primary, #fff);
  transition: color 0.2s ease-in-out;
}

.footer-map-link:hover {
  color: var(--color-text-secondary, #fdc700);
}

.map-container {
  border-radius: 0.5rem;
  overflow: hidden;
  margin-bottom: 1.5rem;
  border: 1px solid var(--color-accent-light, rgba(21, 93, 252, 0.2));
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: transform 0.2s ease-in-out;
}

.social-icon:hover {
  transform: scale(1.1);
}

.footer-copyright {
  border-top: 1px solid var(--color-bg-base, #101828);
  margin-top: 2rem;
  padding-top: 1.5rem;
  text-align: center;
  font-size: 0.875rem;
  color: var(--color-text-primary, #fff);
}
</style>
