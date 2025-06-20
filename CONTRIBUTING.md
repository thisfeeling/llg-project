# 🤝 Guía de Contribución – llg-project

¡Gracias por tu interés en mejorar **llg-project**! Todas las sugerencias son bienvenidas, siempre que sigan una estructura clara y respetuosa.

---

## 📌 Reglas Básicas

1. **Respeto ante todo**. Sigue el [Código de Conducta](CODE_OF_CONDUCT.md) y mantén un ambiente cordial.
2. **Orden y claridad**. Expón tu idea con argumentos sencillos y, cuando puedas, añade capturas, bocetos, diagramas o ejemplos visuales.
3. **Buena justificación**. Explica *por qué* tu propuesta mejora el proyecto.

---

## 🗂️ Cómo contribuir

| Acción | Pasos recomendados |
|--------|-------------------|
| **Compartir idea / contenido** | 1. Usa *Discussions* o abre un *Issue* tipo **Idea**.<br>2. Sube imágenes, bocetos, videos o describe tu propuesta en texto sencillo.<br>3. Explica qué te gustaría cambiar/mejorar y por qué beneficia al proyecto. |
| **Reportar un problema** | 1. Abre un *Issue*.<br>2. Llena el template "Bug report".<br>3. Agrega capturas de pantalla, logs y pasos para reproducir. |
| **Sugerir una mejora técnica** | 1. Abre un *Issue* con el tipo **Enhancement**.<br>2. Describe la funcionalidad deseada, razón y beneficios.<br>3. Incluye mockups o imágenes si aplica. |
| **Enviar un Pull Request** | 1. Haz *fork* y crea una rama `feature/<nombre>`.<br>2. Sigue la guía de estilos (PSR-12, ESLint/Tailwind).<br>3. Verifica que *php artisan test* y *npm run build* pasen.<br>4. Actualiza la documentación correspondiente.<br>5. Redacta un PR descriptivo con imágenes/GIFs si es UI. |

---

## 📝 Estructura recomendada para Issues

```markdown
### Descripción breve
Una frase concisa del problema o mejora.

### Comportamiento esperado
¿Qué debería suceder?

### Comportamiento actual
¿Qué sucede actualmente?

### Pasos para reproducir (si aplica)
1. …
2. …

### Capturas / Imágenes
_Agrega aquí screenshots, mockups o diagramas que ilustren tu punto._

### Razón / Beneficio
Explica por qué tu propuesta es valiosa para estudiantes, docentes o usuarios finales.
```

---

## 💻 Estándares de Código

* **PHP** → PSR-12 + *Laravel Pint* (`./vendor/bin/pint`).
* **JavaScript/Vue** → ESLint + Prettier (`npm run lint`).
* **CSS** → Tailwind; usa clases utilitarias y sigue la guía de estilos en `docs/guia-estilos.md`.

Ejecuta los *linters* antes de abrir tu PR:
```bash
./vendor/bin/pint
npm run lint
```

---

## ✅ Checklist antes de enviar un PR

- [ ] Compilé y probé localmente sin errores (`npm run dev` y `php artisan serve`).
- [ ] Ejecuté pruebas unitarias (`php artisan test`).
- [ ] Agregué/actualicé documentación.
- [ ] Mi PR describe claramente *qué* cambia y *por qué*.

---

<p align="center">¡Gracias por hacer de llg-project un mejor proyecto educativo! 🙌</p>
