# 🚀 Contenedor de Ideas - Landing Page Premium

Landing page profesional en modo oscuro para **Contenedor de Ideas**, agencia especializada en Marketing Digital 360º.

## 📋 Descripción

Web corporativa premium con diseño dark mode, efectos glassmorphism, animaciones fluidas y flip cards interactivas para mostrar servicios.

## 🎨 Características de Diseño

### Paleta de Colores

**Fondos:**
- Primary: `#000000` (Negro puro)
- Secondary: `#09090B` (Gris ultra oscuro)
- Tertiary: `#18181B` (Gris oscuro para cards)

**Color de Acento (Amarillo Corporativo):**
- Primary-500: `#F8D800` (Color base)
- Primary-400: `#FFDF33` (Hover states)
- Primary-600: `#C5AD00` (Botones activos)

**Textos:**
- Primary: `#FFFFFF` (Blanco puro)
- Secondary: `#E4E4E7` (Gris muy claro)
- Tertiary: `#A1A1AA` (Gris medio)

### Tipografía

- **Display/Títulos:** Plus Jakarta Sans (700-800)
- **Body/Cuerpo:** Inter (400-500)

### Efectos Visuales

- ✨ **Glassmorphism** en todas las cards
- 🎯 **Flip Cards 3D** para servicios (hover en desktop, tap en mobile)
- 💫 **Partículas flotantes** en el fondo (50 en desktop, 20 en mobile)
- 🌊 **Animaciones suaves** con cubic-bezier personalizado
- 🎨 **Gradientes animados** en botones CTA
- ⚡ **Glow effects** con el color corporativo

## 📁 Estructura de Archivos

```
Contenedor de ideas/
├── index.html          # Estructura HTML completa
├── styles.css          # Estilos CSS con sistema de diseño
├── script.js           # JavaScript para interacciones
└── README.md           # Este archivo
```

## 🖼️ Imágenes (Placeholders CSS)

Debido a limitaciones de cuota, las imágenes están implementadas como **placeholders visuales con CSS**:

- **Logo:** SVG inline con gradiente amarillo
- **Hero Visual:** Esfera 3D animada con CSS
- **Servicios (6):** Placeholders con gradientes y iconos SVG personalizados:
  - SEO (gradiente azul oscuro)
  - Google Ads / SEM (gradiente azul medio)
  - Redes Sociales (gradiente azul claro)
  - Diseño y Desarrollo Web (gradiente oscuro)
  - Business Intelligence (gradiente medio)
  - Formación (gradiente claro)

### 🔄 Cómo Reemplazar Placeholders por Imágenes Reales

1. **Crear carpeta de imágenes:**
   ```bash
   mkdir images
   ```

2. **Añadir tus imágenes:**
   - `images/logo.png` (512x512px, fondo transparente)
   - `images/hero_visual.png` (1200x1200px)
   - `images/service_1.png` a `service_6.png` (800x600px)

3. **Actualizar el HTML:**
   - Reemplazar el SVG del logo con: `<img src="images/logo.png" alt="Contenedor de Ideas">`
   - Reemplazar `.sphere` con: `<img src="images/hero_visual.png" alt="Hero">`
   - En cada `.service-image-placeholder`, añadir: `<img src="images/service_X.png" alt="Servicio">`

## 🎯 Secciones de la Web

1. **Hero Section** - Título principal con esfera 3D animada
2. **Social Proof** - Logos de clientes/partners
3. **Servicios** - 6 flip cards interactivas con servicios
4. **Casos de Éxito** - 3 casos con métricas destacadas
5. **Testimonios** - 3 testimonios de clientes
6. **Sobre Nosotros** - Historia y valores de la agencia
7. **CTA Final** - Llamada a la acción con contacto
8. **Footer** - Links, redes sociales y legal

## ⚡ Funcionalidades JavaScript

- ✅ Sistema de partículas flotantes (50 partículas)
- ✅ Navbar sticky con blur al hacer scroll
- ✅ Menú hamburguesa para mobile
- ✅ Contador animado para estadísticas
- ✅ Scroll animations con Intersection Observer
- ✅ Flip cards con tap/click en mobile
- ✅ Smooth scroll para navegación
- ✅ Debounce para optimización de performance

## 📱 Responsive Design

### Breakpoints:

- **Desktop XL:** ≥1440px (Layout completo)
- **Desktop:** 1024px - 1439px (Ajustes menores)
- **Tablet:** 768px - 1023px (2 columnas en grids)
- **Mobile:** ≤767px (1 columna, menú hamburguesa)
- **Small Mobile:** ≤480px (Ajustes adicionales)

### Adaptaciones Mobile:

- Menú hamburguesa animado
- Flip cards con tap en lugar de hover
- Esfera 3D reducida a 200px
- Grids de 1 columna
- Botones full-width
- Reducción de partículas (20 en lugar de 50)

## 🚀 Cómo Usar

### Opción 1: Abrir directamente
1. Abre `index.html` en tu navegador
2. ¡Listo! La web funciona sin servidor

### Opción 2: Con servidor local (recomendado)
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (npx)
npx serve

# Con PHP
php -S localhost:8000
```

Luego abre: `http://localhost:8000`

## 🎨 Personalización

### Cambiar el Color de Acento

En `styles.css`, busca la sección `:root` y modifica las variables `--primary-XXX`:

```css
:root {
    /* Cambia estos valores por tu color corporativo */
    --primary-500: #F8D800; /* Color base */
    --primary-400: #FFDF33; /* Hover */
    --primary-600: #C5AD00; /* Activo */
    --primary-rgb: 248, 216, 0; /* RGB para opacidades */
}
```

### Cambiar Textos

Edita `index.html` y busca:
- **Nombre del negocio:** "Contenedor de Ideas"
- **Tagline:** "Marketing que funciona"
- **Servicios:** Sección `.services-grid`
- **Testimonios:** Sección `.testimonials-grid`
- **Contacto:** Sección `.cta-final`

### Añadir Más Servicios

1. Duplica un `.service-card-flip` en el HTML
2. Cambia el gradiente en CSS (ej: `.new-service-gradient`)
3. Actualiza el icono SVG y textos

## 🔧 Optimización

### Performance:

- ✅ Fuentes preconnect para Google Fonts
- ✅ Animaciones con `will-change` optimizado
- ✅ Debounce en scroll events
- ✅ Lazy load de elementos 3D
- ✅ Reducción de partículas en mobile

### SEO:

- ✅ Meta description incluida
- ✅ Títulos semánticos (H1, H2, H3)
- ✅ Alt text en imágenes (cuando se añadan)
- ✅ Estructura HTML5 semántica
- ✅ IDs únicos para elementos interactivos

## 📊 Métricas Actuales (Placeholder)

- **200+** Clientes Satisfechos
- **10** Años de Experiencia
- **98%** Tasa de Éxito

*(Actualiza estos valores en `.hero-stats` según tus datos reales)*

## 🌐 Navegadores Soportados

- ✅ Chrome/Edge (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Notas Técnicas

### Glassmorphism:
- Usa `backdrop-filter: blur(24px)` con fallback
- Compatible con navegadores modernos
- En navegadores antiguos se muestra sin blur

### Flip Cards:
- Implementadas con CSS 3D transforms
- En mobile se activan con tap/click (JavaScript)
- Accesibles con teclado (focus states)

### Animaciones:
- Todas las animaciones respetan `prefers-reduced-motion`
- Smooth scroll nativo del navegador
- Intersection Observer para scroll animations

## 🎯 Próximos Pasos Recomendados

1. **Añadir imágenes reales** (logo, hero, servicios)
2. **Actualizar textos** con información real de la empresa
3. **Configurar formulario de contacto** (backend necesario)
4. **Añadir Google Analytics** para tracking
5. **Optimizar imágenes** con WebP cuando se añadan
6. **Configurar dominio** y hosting
7. **Implementar SSL** (HTTPS)
8. **Añadir sitemap.xml** para SEO

## 📧 Contacto

Para personalización o soporte:
- **Email:** info@contenedordeideas.com
- **Web:** [Añadir URL cuando esté publicada]

---

## 🎨 Créditos de Diseño

- **Inspiración:** Cryptolink (diseño premium dark mode)
- **Fuentes:** Google Fonts (Plus Jakarta Sans, Inter)
- **Iconos:** SVG inline personalizados
- **Efectos:** Glassmorphism, 3D transforms, gradientes animados

---

**© 2026 Contenedor de Ideas. Todos los derechos reservados.**

Hecho con ❤️ en España
