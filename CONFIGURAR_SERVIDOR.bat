@echo off
title 1. PREPARAR SERVIDOR (Solo 1 vez)
color 1F
chcp 65001 >nul

echo ========================================================
echo   PASO 1: PREPARAR TU SERVIDOR VPS
echo ========================================================
echo.
echo   Este programa instalará un "Servidor Web" (Nginx) en tu VPS.
echo   Esto es necesario para que la gente pueda ver tu página.
echo.
echo   IMPORTANTE:
echo   --------------------------------------------------------
echo   1. Cuando te pida "password", escribe la contraseña de tu VPS.
echo      (NO SE VERÁN ASTERISCOS NI NADA, TÚ ESCRIBE Y PULSA ENTER).
echo.
echo   2. Tardará un minuto instalando cosas.
echo.
echo ========================================================
echo   Conectando a 72.62.189.238...
echo ========================================================
echo.

ssh root@72.62.189.238 "apt-get update && apt-get install -y nginx && systemctl enable nginx && systemctl start nginx && mkdir -p /var/www/html && chmod -R 755 /var/www/html"

echo.
echo.
echo ========================================================
echo   ¡LISTO! SERVIDOR PREPARADO
echo ========================================================
echo.
echo   Ahora ya puedes usar el otro archivo "2_SUBIR_WEB.bat"
echo   para publicar tu página siempre que quieras.
echo.
pause
