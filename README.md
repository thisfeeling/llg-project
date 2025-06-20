<p align="center">
  <img src="https://img.shields.io/badge/Liceo%20León%20de%20Greiff-llg--project-blue?style=for-the-badge" alt="LLG Project" />
  <img src="https://img.shields.io/badge/Laravel-v12-red?style=for-the-badge&logo=laravel" alt="Laravel" />
  <img src="https://img.shields.io/badge/Vue-3-42b883?style=for-the-badge&logo=vue.js&logoColor=white" alt="Vue" />
  <img src="https://img.shields.io/badge/Vite-⚡-646cff?style=for-the-badge" alt="Vite" />
  <img src="https://img.shields.io/github/license/thisfeeling/llg-project?style=for-the-badge" alt="MIT License" />
</p>

<h1 align="center">Liceo León de Greiff – Proyecto Institucional</h1>

> Plataforma web institucional para la gestión educativa del **Liceo León de Greiff**

---

## ✨ Características principales

- **Monolito Laravel 12 + Inertia + Vue 3** para velocidad de desarrollo.
- **Panel administrativo** con control de roles y permisos (Spatie).
- **Gestión académica**: estudiantes, docentes, horarios, calificaciones.
- **Página institucional** editable por el equipo directivo.
- **Despliegue fácil** en cualquier servidor Ubuntu 22 + Nginx.

## 🚀 Demo & Documentación

| Enlace | Descripción |
|--------|-------------|
| 🌐 **Sitio en producción** | <https://roepard.ip-ddns.com> |
| 📚 **Documentación** | <https://thisfeeling.github.io/llg-project> |

## 🛠️ Tech-Stack

| Back-end | Front-end | Infra |
|----------|-----------|-------|
| Laravel 12 | Vue 3 + Vite | Nginx, MySQL, Ubuntu 22 |
| PHP 8.4 | Tailwind CSS + DaisyUI | Certbot SSL |

## ⚙️ Instalación rápida

```bash
# Clonar repositorio
git clone https://github.com/thisfeeling/llg-project.git
cd llg-project

# Backend
composer install
cp .env.example .env && php artisan key:generate
php artisan migrate --seed

# Frontend
npm install
npm run dev  # o npm run build

# Servidor local
php artisan serve
```

> Para más detalles consulta la sección **Bases del Proyecto** en la documentación.

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Abre un *issue* o envía un *pull request* siguiendo la [Guía de Contribución](CONTRIBUTING.md).

## 📄 Licencia

Distribuido bajo licencia MIT. Revisa el archivo [LICENSE](LICENSE) para más información.

---

<p align="center">Hecho con ❤️ para la IE Liceo León de Greiff</p>

> Plataforma web institucional para la gestión educativa del Liceo León de Greiff

## 📖 Documentación

La documentación completa del proyecto está disponible en [GitHub Pages](https://thisfeeling.github.io/llg-project).

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---
