# Cómo subir tu web a tu VPS (usando Easypanel)

¡Buenas noticias! **Un VPS es mucho mejor y más potente** que un hosting normal. No necesitas contratar nada más.

Como veo que tu webhook es de **Easypanel** (`easypanel.host`), asumo que tienes Easypanel instalado en tu VPS para gestionar tus aplicaciones. ¡Es la forma más fácil de subir tu web!

## Opción A: Usar Easypanel (Recomendada y más fácil)

Si ya tienes Easypanel instalado (donde tienes tu n8n):

1.  **Entra a tu Easypanel** (normalmente tu IP o dominio:3000).
2.  Crea un **Nuevo Proyecto** (o usa uno existente).
3.  Haz clic en **"Service"** y elige **"Static Website"** (Sitio Web Estático).
    *   Si no ves esa opción específica, puedes elegir "App" y configurar una imagen de Docker simple como `nginx:alpine`.
4.  **Subir código:**
    *   La forma más fácil con Easypanel suele ser conectar tu cuenta de **GitHub**.
    *   Sube esta carpeta `Contenedor de ideas` a un repositorio de GitHub (puedo ayudarte si no sabes cómo).
    *   En Easypanel, selecciona ese repositorio. ¡Easypanel detectará que es un HTML static y lo desplegará solo!

## Opción B: Subir archivos manualmente (SFTP) + Nginx/Apache

Si prefieres no usar Easypanel para la web o quieres hacerlo "a mano":

1.  **Conéctate por SFTP** (usando FileZilla o WinSCP):
    *   **Host:** La IP de tu VPS.
    *   **Usuario:** `root` (o el que te diera Hostinger).
    *   **Contraseña:** La de tu VPS.
    *   **Puerto:** 22.
2.  **Ve a la carpeta de la web:**
    *   Normalmente `/var/www/html`.
3.  **Sube tus archivos:**
    *   Arrastra `index.html`, `styles.css`, `script.js` y la carpeta `images` ahí.
4.  **Verifica permisos:**
    *   Asegúrate de que los archivos tengan permisos de lectura (normalmente 644 para archivos y 755 para carpetas).

---

### ¿Cuál prefieres?
- **Easypanel:** Es automático y moderno. Si haces cambios en GitHub, se actualiza solo.
- **Manual (SFTP):** Es clásico. Subes archivos y listo, pero si quieres cambiar algo tienes que volver a subir.

Si necesitas ayuda para crear el repositorio en GitHub para la Opción A, dímelo y te explico paso a paso.
