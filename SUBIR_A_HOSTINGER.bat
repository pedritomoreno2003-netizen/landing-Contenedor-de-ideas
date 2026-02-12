@echo off
title 2. SUBIR WEB A INTERNET
color 0A
chcp 65001 >nul

echo ========================================================
echo   PASO 2: PUBLICAR TU WEB EN INTERNET
echo ========================================================
echo.
echo   Este programa subirá tus archivos al servidor.
echo   Úsalo cada vez que hagas cambios en tu página.
echo.
echo   TUS DATOS:
echo   - Servidor: 72.62.189.238
echo   - Archivos: index.html, estilos, scripts e imágenes.
echo.
echo   INSTRUCCIONES:
echo   1. Escribe tu contraseña de VPS cuando te la pida (a ciegas).
echo   2. Espera a que termine de copiar los archivos.
echo.
echo ========================================================
echo   Subiendo archivos...
echo ========================================================
echo.

scp -r index.html script.js styles.css images root@72.62.189.238:/var/www/html

echo.
echo.
echo ========================================================
echo   ¡WEB PUBLICADA CON ÉXITO!
echo ========================================================
echo.
echo   Ahora entra en tu navegador y visita:
echo   http://72.62.189.238
echo.
pause
