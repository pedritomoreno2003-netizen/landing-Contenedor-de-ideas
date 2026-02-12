# 📸 CÓMO AÑADIR TU LOGO A LA LANDING PAGE

## ✅ PASO 1: Guardar el Logo

1. **Guarda la imagen del logo** que me enviaste en:
   ```
   c:\Users\Pedro\Contenedor de ideas\images\logo.png
   ```

2. Si prefieres otro nombre, usa: `logo-contenedor-ideas.png`

---

## ✅ PASO 2: Actualizar el HTML

Abre el archivo `index.html` y busca estas dos líneas:

### En el NAVBAR (línea ~25):
```html
<img src="https://i.imgur.com/your-logo.png" alt="Contenedor de Ideas" class="logo-image" style="height: 48px; width: auto; filter: brightness(0) invert(1);">
```

**Reemplázala por:**
```html
<img src="images/logo.png" alt="Contenedor de Ideas" class="logo-image" style="height: 48px; width: auto;">
```

### En el FOOTER (línea ~372):
```html
<img src="https://i.imgur.com/your-logo.png" alt="Contenedor de Ideas" class="logo-image" style="height: 40px; width: auto; filter: brightness(0) invert(1);">
```

**Reemplázala por:**
```html
<img src="images/logo.png" alt="Contenedor de Ideas" class="logo-image" style="height: 40px; width: auto;">
```

---

## 🎨 NOTA IMPORTANTE:

He quitado el filtro `filter: brightness(0) invert(1);` porque tu logo ya tiene el diseño perfecto con:
- Fondo claro/blanco
- Texto negro
- Círculo amarillo en la "e"

Esto se verá **perfecto** sobre el fondo oscuro de la landing page.

---

## ⚡ ALTERNATIVA RÁPIDA:

Si quieres que yo lo haga automáticamente:

1. Guarda el logo que te envié como: `c:\Users\Pedro\Contenedor de ideas\images\logo.png`
2. Dime "listo" y yo actualizaré el HTML automáticamente

---

## 🎯 RESULTADO ESPERADO:

Una vez guardado, tu logo aparecerá en:
- ✅ Navbar (arriba a la izquierda, 48px de altura)
- ✅ Footer (abajo a la izquierda, 40px de altura)
- ✅ Con el diseño original de la caja abierta y el círculo amarillo
