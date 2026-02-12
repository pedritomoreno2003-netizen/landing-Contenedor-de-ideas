# Cómo subir tu Landing Page a Hostinger

Sigue estos pasos sencillos para publicar tu web en tu hosting de Hostinger.

## 1. Preparar los archivos
Asegúrate de tener localizados los siguientes archivos y carpetas en tu ordenador (en la carpeta `Contenedor de ideas`):
- `index.html` (El archivo principal)
- `styles.css` (Los estilos y diseño)
- `script.js` (La funcionalidad del formulario y animaciones)
- La carpeta `images` con el logo y otras imágenes.

## 2. Acceder al Administrador de Archivos
1. Entra en tu cuenta de **Hostinger** y ve al **Panel de Control (hPanel)**.
2. Busca la sección **Archivos** y haz clic en **Administrador de Archivos**.
3. Selecciona tu dominio si te lo pide.

## 3. Subir los archivos
1. Dentro del Administrador de Archivos, entra en la carpeta **`public_html`**.
   - **Importante:** Esta es la carpeta pública. Todo lo que pongas aquí será visible en tu web.
   - Si ves un archivo llamado `default.php` o una carpeta `cgi-bin`, puedes borrarlos o dejarlos, pero asegúrate de que **no haya otro index.html o index.php** que interfiera.
2. Haz clic en el icono de **Subir** (una nube con una flecha hacia arriba) en la barra superior derecha.
3. Selecciona **Archivo** para subir `index.html`, `styles.css` y `script.js`.
4. Selecciona **Carpeta** para subir la carpeta `images` completa.
   - Alternativamente, puedes crear la carpeta `images` manualmente en Hostinger y subir los archivos de imagen dentro.

## 4. Verificar la estructura
Tu carpeta `public_html` debería verse así:
```text
/public_html
  ├── index.html
  ├── styles.css
  ├── script.js
  └── images/
       └── logo.png
```

## 5. Probar la web
1. Abre tu navegador y escribe tu nombre de dominio (ej. `tudominio.com`).
2. Deberías ver tu nueva Landing Page funcionando.
3. **Prueba el formulario:** Ahora que la web está en un servidor real (y no en un archivo local), el formulario de contacto debería funcionar perfectamente y enviar los datos a tu webhook.

## Solución de problemas comunes
- **No se ven los cambios:** Intenta abrir la web en modo incógnito o borra la caché del navegador (Ctrl + F5).
- **Error 403 Forbidden:** Asegúrate de que tu archivo principal se llame exactamente `index.html` (todo en minúsculas).
- **Las imágenes no cargan:** Verifica que la carpeta `images` se haya subido correctamente y que los nombres de archivo coincidan exactamente (respetando mayúsculas y minúsculas).
