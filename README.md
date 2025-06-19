# Liceo León de Greiff - Proyecto Institucional

[![GitHub license](https://img.shields.io/github/license/thisfeeling/llg-project)](https://github.com/thisfeeling/llg-project)
[![Documentación](https://img.shields.io/badge/docs-gitbook-blue)](https://thisfeeling.github.io/llg-project)

> Plataforma web institucional para la gestión educativa del Liceo León de Greiff

## 📖 Documentación

La documentación completa del proyecto está disponible en [GitHub Pages](https://thisfeeling.github.io/llg-project).

## 🚀 Comenzar

### Requisitos
- PHP 8.3+
- Node.js 18+
- Composer 2.5+
- MySQL 8.0+

### Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/thisfeeling/llg-project.git
   cd llg-project
   ```

2. Instala dependencias del backend:
   ```bash
   cd llg-api
   composer install
   cp .env.example .env
   php artisan key:generate
   ```

3. Configura la base de datos en `.env`

4. Instala dependencias del frontend:
   ```bash
   cd ../llg-web
   npm install
   ```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---
