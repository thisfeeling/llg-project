# 🛠️ Guía de Desarrollo – llg-project

> Documentación específica para el mantenimiento y ampliación de **llg-project**. Sigue estas instrucciones para entender, desplegar y extender el proyecto. Todo el stack vive detrás de **Nginx** y usa Laravel 12 + Vue 3 + Vite + Inertia.

---

## 📑 Índice
1. [Requisitos](#requisitos)
2. [Objetivo del Proyecto](#objetivo-del-proyecto)
3. [Tareas del Proyecto](#tareas-del-proyecto)
4. [Bases de Instalación](#bases-de-instalación)
5. [Comandos Esenciales](#comandos-esenciales)
6. [Permisos del Sistema](#permisos-del-sistema)
7. [Servidor Nginx](#servidor-nginx)
8. [Variables de Entorno](#variables-de-entorno)
9. [Apartados en Laravel y Vue](#apartados-en-laravel-y-vue)
10. [Roles y Permisos (Spatie)](#roles-y-permisos-spatie)
11. [CRUD de Usuarios](#crud-de-usuarios)
12. [Estructura del Proyecto](#estructura-del-proyecto)
13. [Recursos Útiles](#recursos-útiles)

---

## 🖥️ Requisitos

### 🧑‍💻 Para desarrolladores

| Herramienta | Versión mínima |
|-------------|---------------|
| Git | v2.42 |
| VSCode | v1.100 |
| NodeJS | v20 |
| npm | v11 |
| PHP | v8.4 |
| Composer | v2.8 |

### 🎲 Para el servidor

| Herramienta | Versión mínima |
|-------------|---------------|
| Ubuntu Server | 22.04 |
| Nginx | 1.18 |
| MySQL | 10 |
| phpMyAdmin | 5.2 |
| Certbot | 2.42 |
| SSH | 10 |

### 👤 Para usuarios finales

```
CPU: Intel Core i3-7300 / AMD Ryzen 3 1300X o superior
RAM: 4 GB+
Disco: 32 GB+
OS: Windows 10 x64 / Ubuntu 22.04 x64 o superior
Navegador: Chrome 137 / Firefox 137 o superior
```

---

## 🎯 Objetivo del Proyecto

> Proveer una plataforma integral (backend Laravel + frontend Vue) para la gestión del sitio web institucional del **Liceo León de Greiff**. Este proyecto piloto respalda la tesis técnica, fomenta el uso ético de las TIC y sirve de guía educativa.

---

## 🗂️ Tareas del Proyecto

- [ ] Configurar base de datos MySQL
- [ ] Desplegar servidor Linux + Nginx + dominio
- [ ] Implementar backend Laravel 12
- [ ] Implementar frontend Vue 3 + Vite
- [ ] Autenticación de usuarios
- [ ] Roles y permisos
- [ ] Página principal y módulos (Transparencia, Gestión Académica, Admisiones, Servicios, Proyecto de Vida, Cultura y Deportes…)

---

## 🧊 Bases de Instalación

```bash
# Actualizar sistema
sudo apt update && sudo apt upgrade -y

# Paquetes base
sudo apt install -y git curl wget zip unzip tar nano tree ufw \
  nginx mariadb-server php8.4 php8.4-{mysql,curl,gd,mbstring,xml,zip} \
  certbot python3-certbot-nginx composer nodejs npm

# Instalar PHP 8.4 script alternativo (opcional)
/bin/bash -c "$(curl -fsSL https://php.new/install/linux/8.4)"
```

Configurar **phpMyAdmin** (opcional):
```bash
cd /usr/share
wget https://files.phpmyadmin.net/phpMyAdmin/5.2.2/phpMyAdmin-5.2.2-all-languages.zip
unzip phpMyAdmin-5.2.2-all-languages.zip
mv phpMyAdmin-5.2.2-all-languages phpmyadmin
```

Configurar **Certbot**:
```bash
sudo certbot --nginx -d <tu_dominio>
```

---

## 🚀 Bases del Proyecto

Pasos rápidos para instalar **llg-project** en `/var/www/llg`:

```bash
# 1. Crear proyecto Laravel (si parte de cero)
cd /var/www
sudo composer create-project laravel/laravel llg
cd /var/www/llg

# 2. Instalar Breeze + Inertia + Vue
composer require laravel/breeze --dev
php artisan breeze:install vue

# 3. Dependencias frontend
npm install                       # node_modules generales
npm install @inertiajs/vue3 @inertiajs/progress
npm install -D daisyui flowbite   # Plugins Tailwind opcionales

# 4. Compilar assets
a npm run dev     # o npm run build para producción

# 5. Migrar base de datos
php artisan migrate
```

> Finaliza con `php artisan optimize` y `php artisan event:cache` en producción.

---

## 🧷 Comandos Esenciales

### ⚙️ Laravel
```bash
# Limpieza y caché
php artisan optimize:clear    # Limpia TODA la caché
php artisan migrate:fresh     # Recrea tablas (⚠️ borra datos)
php artisan db:seed           # Ejecuta seeders
php artisan optimize          # Optimización (producción)
```

### 🔧 Vue 3
```bash
npm run dev      # Servidor Vite + HMR
npm run build    # Build producción optimizado
npm run preview  # Previsualiza build
```

### 🔀 Combinados
```bash
php artisan optimize:clear && npm run dev   # Reset backend + frontend dev
php artisan optimize && npm run build       # Producción completa
```

---

## 🚩 Permisos del Sistema

```bash
# Establecer propietario
sudo chown -R <user>:www-data /var/www/llg
# Directorios 775 / Archivos 664
sudo find /var/www/llg -type d -exec chmod 775 {} \;
sudo find /var/www/llg -type f -exec chmod 664 {} \;
# ACL para herencia permanente
sudo setfacl -R -d -m u:<user>:rwx,g:www-data:rwx,o:rx /var/www/llg
# Directorios críticos de Laravel
sudo chmod -R ug+rwx /var/www/llg/storage /var/www/llg/bootstrap/cache
```

---

## 💻 Servidor Nginx

Ejemplo de *server block* con placeholders (rellena los valores entre <>):

```nginx
server {
    listen 80;
    server_name <tu_dominio>;
    root /var/www/llg/public;

    add_header X-Frame-Options "SAMEORIGIN";

    index index.php index.html;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.(php)$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/run/php/<versión>-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    }

    location ~* \.(jpg|jpeg|png|gif|css|js|woff2?|ttf|svg)$ {
        expires 7d;
        add_header Cache-Control "public";
    }
}
```

> Recarga Nginx después de modificar:
> ```bash
> sudo nginx -t && sudo systemctl reload nginx
> ```

---

## 🎯 Variables de Entorno

```dotenv
APP_NAME="llg-project"
APP_URL=https://<tu_dominio>

DB_CONNECTION=mysql
DB_HOST=<db_host>
DB_PORT=<db_port>
DB_DATABASE=<db_name>
DB_USERNAME=<db_user>
DB_PASSWORD=<db_pass>
```

---

## ⚓ Apartados en Laravel y Vue

```
resources/js/Pages
├── Admin
│   └── Dashboard.vue
├── Teacher
│   └── Schedule.vue
└── Student
    └── Grades.vue
```

Genera controladores equivalentes con:
```bash
php artisan make:controller Admin/DashboardController
php artisan make:controller Teacher/ScheduleController
php artisan make:controller Student/GradesController
```

---

## 📇 Roles y Permisos (Spatie)

<!-- tabs:start -->

#### **Pasos**

1. **Instalar y publicar migraciones**
   ```bash
   composer require spatie/laravel-permission
   php artisan vendor:publish --provider="Spatie\Permission\PermissionServiceProvider"
   ```
2. **Migrar**
   ```bash
   php artisan migrate
   ```
3. **Configurar `User`**
   ```php
   use Spatie\Permission\Traits\HasRoles;

   class User extends Authenticatable {
       use HasRoles;
   }
   ```
4. **Seeder de Roles y Permisos** – crea `RolesAndPermissionsSeeder` con los roles *Administrador, Docente, Coordinador* y sus permisos. Luego:
   ```bash
   php artisan db:seed --class=RolesAndPermissionsSeeder
   ```
5. **Asignar roles**
   ```php
   $user->assignRole('administrador');
   ```
6. **Proteger rutas**
   ```php
   Route::middleware(['permission:eliminar usuarios'])->delete('/users/{user}', ...);
   ```
7. **CRUD de roles/permisos** (opcional):
   ```bash
   php artisan make:controller RoleController --resource
   php artisan make:controller PermissionController --resource
   ```

<!-- tabs:end -->

---

## ⚒️ CRUD de Usuarios (Laravel + Inertia + Vue)

<!-- tabs:start -->

#### **Pasos**

1. **Modelo y migración** – `User` ya existe.
2. **Controlador**
   ```bash
   php artisan make:controller UserController --resource
   ```
3. **Rutas**
   ```php
   Route::resource('users', UserController::class)->middleware(['auth','verified']);
   ```
4. **Vistas Vue** – crea `Users/Index.vue`, `Create.vue`, `Edit.vue` con Inertia (ver ejemplos en la sección anterior).
5. **Validaciones** – utiliza `$request->validate([...])` y notificaciones *flash*.
6. **Protección de permisos** – usa `middleware('permission:crear usuarios')` donde aplique.

<!-- tabs:end -->

---

## 🏗️ Estructura del Proyecto

```text
/llg/
├── public
├── resources
│   └── js
└── docs  # Documentación Docsify
```

---

## ⛵ Recursos Útiles

- 🌐 Laravel 12: https://laravel.com/docs/12.x
- 🖥️ Vue 3: https://vuejs.org/guide/introduction.html
- 🔐 Spatie Permission: https://spatie.be/docs/laravel-permission
- 📦 Vite: https://vite.dev/

---