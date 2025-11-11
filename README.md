# Tierra de Nadie — Web (GitHub Pages)

Sitio estático para la comunidad **Tierra de Nadie (DayZ)**.

## Estructura
```
.
├─ index.html          # Inicio (conectar al servidor, widgets)
├─ news.html           # Noticias
├─ shop.html           # Tienda (PayPal)
├─ gallery.html        # Galería (imágenes/videos)
├─ staff.html          # Staff & Contacto
└─ assets/
   ├─ css/style.css
   ├─ js/main.js
   └─ img/logo.png
```

## Enlaces
- Discord: https://discord.com/servers/tierra-de-nadie-1095673299515748462
- PayPal: https://www.paypal.com/paypalme/bola8pr
- Conexión rápida (Steam): `steam://connect/5.9.151.150:2402`

## Cómo desplegar en GitHub Pages
1. Crea un repositorio (público) en GitHub, por ejemplo `tdn-web`.
2. Sube **todos** los archivos a la **raíz** del repo (donde va `index.html`).
3. Ve a **Settings → Pages**.
4. En **Build and deployment**, elige **Source: Deploy from a branch**.
5. Selecciona **Branch: main** y **Folder: / (root)**. Guarda.
6. GitHub tardará 1–2 minutos y publicará la web en:
   - `https://TU_USUARIO.github.io/tdn-web/`

### Dominio personalizado (opcional)
- En **Settings → Pages**, añade tu dominio (ej: `tierradenadie.es`) en **Custom domain**.
- Crea un **registro CNAME** en tu DNS apuntando a `TU_USUARIO.github.io`.
- Opcional: añade un archivo `CNAME` en la raíz del repo con el nombre del dominio.

## Editar contenido
- Noticias: edita `news.html`.
- Colores/estilo: `assets/css/style.css`.
- Logo: reemplaza `assets/img/logo.png` por tu imagen (mismo nombre).
