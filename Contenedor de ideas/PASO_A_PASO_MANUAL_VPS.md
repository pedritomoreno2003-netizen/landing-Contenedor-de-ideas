# Guía Paso a Paso: Subir tu web al VPS manualmente ("A mano")

Esta es la forma clásica y universal de subir archivos a un servidor. Te servirá para cualquier VPS (Hostinger, DigitalOcean, Hetzner, etc.).

## 1. Lo que necesitas
- **Un programa de FTP/SFTP:** Te recomiendo **FileZilla** (es gratis y el más usado) o **WinSCP** (muy bueno para Windows). Descarga e instala uno si no lo tienes.
- **Datos de acceso al VPS:**
  - **IP del servidor:** (Ej. `192.168.1.50`)
  - **Usuario:** Normalmente `root` (a menos que hayas creado otro usuario).
  - **Contraseña:** La contraseña de tu VPS (la que usas para SSH).
  - **Puerto:** `22` (SFTP usa el puerto SSH por defecto).

## 2. Conectarse al VPS
1. Abre **FileZilla**.
2. Arriba a la izquierda, llena los campos:
   - **Servidor:** Tu IP (ej. `85.20.10.150`).
   - **Nombre de usuario:** `root`.
   - **Contraseña:** Tu contraseña del VPS.
   - **Puerto:** `22`.
3. Dale a **"Conexión rápida"**.
   - *Nota:* La primera vez te preguntará si confías en el servidor. Dile que "Sí" o "Aceptar".

## 3. Buscar la carpeta de la web
Una vez conectado, verás dos paneles:
- **Izquierda:** Tus archivos locales (Tu PC).
- **Derecha:** Los archivos del VPS (El servidor).

1. En el panel de la **DERECHA** (Servidor), navega hasta la carpeta donde tu servidor web busca los archivos.
2. La ruta estándar suele ser:
   - **Nginx/Apache:** `/var/www/html`
   - Si tienes **Easypanel** u otro panel, la ruta podría variar. Si usas Nginx "pelado", es segura `/var/www/html`. 
   
   *Si no estás seguro de la carpeta, puedes probar subiendo un archivo `test.html` a `/var/www/html` y viendo si carga en tu navegador.*

## 4. Subir los archivos
1. En el panel de la **IZQUIERDA** (Tu PC), busca la carpeta de tu proyecto:
   - `C:\Users\Pedro\Contenedor de ideas\`
2. Selecciona estos archivos y carpetas:
   - `index.html`
   - `styles.css`
   - `script.js`
   - La carpeta `images` (asegúrate de subir la carpeta entera, no solo los archivos sueltos).
3. Haz clic derecho sobre ellos y elige **"Subir"** (o arrástralos al panel de la derecha).
4. Espera a que termine la transferencia.

## 5. Verificar permisos (Importante)
A veces los archivos se suben pero no se ven porque están "protegidos".
1. En el panel de la **DERECHA**, selecciona todos los archivos que acabas de subir.
2. Haz clic derecho > **Permisos de archivo...**
3. En "Valor numérico", escribe **755** (o 644 para archivos y 755 para carpetas). 
   - Lo importante es que "Permisos públicos" tenga marcada la casilla "Leer".
4. Dale a aceptar.

## 6. Probar
1. Abre tu navegador.
2. Escribe la IP de tu VPS (ej. `http://85.20.10.150`) o tu dominio si ya lo tienes configurado.
3. ¡Debería aparecer tu web!

## Solución de problemas
- **¿No carga la web?** Es posible que necesites reiniciar tu servidor web. Si tienes acceso a la terminal (SSH o consola de comandos en Hostinger), ejecuta:
  - `systemctl restart nginx` (si usas Nginx)
  - `systemctl restart apache2` (si usas Apache)
- **¿Error 404?** Verifica que el archivo se llame `index.html` (todo minúsculas) y esté en la carpeta raíz (`/var/www/html`).
