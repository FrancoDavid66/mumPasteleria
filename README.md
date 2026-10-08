# MUM Baking House — web

Vite + React + Tailwind + Framer Motion + Lenis.

## Arrancar

```bash
npm install
npm run dev
```

## Dónde se edita todo

- **`src/data/mum.js`** → WhatsApp, Instagram, link del catálogo PDF, anticipación, sabores de cada categoría (cookies, alfajores, tortas, budines, mermeladas, fechas especiales), temáticas de cookies decoradas, ferias y preguntas frecuentes.
- **Fotos** → `src/assets/fotos/` (se importan arriba de `mum.js`). Para cambiar una foto, reemplazá el archivo con el mismo nombre.
- **Colores y tipografías** → `tailwind.config.js` (rosa, chicle, choco, lavanda, caramelo, papel) y `src/index.css` (Antonio + Shantell Sans, autoalojadas).

## Funciones

- Loader con el logo de MUM que se dibuja solo (es una sola línea, `src/components/Logo.jsx`).
- Línea continua con corazón en el hero (como las destacadas de IG).
- Catálogo con pestañas y **armado de box de 6**: la caja se va llenando, se suman tortas/budines/etc. y se manda el pedido por WhatsApp con fecha, retiro y nota. La fecha mínima se calcula sola (10 días, o 2 semanas si hay cookies/alfajores).
- **Próxima fecha especial automática** (Pascuas, Día del Padre, Día del Niño, Día de la Madre, Navidad) con el último día para encargar.

## Builds

```bash
npm run build          # dist/ para subir a Vercel
npm run build:single   # dist-single/index.html (todo en un archivo, abre con doble clic)
```

## Dominio

Hoy está como `mum-pasteleria.vercel.app` en `index.html`, `public/robots.txt`, `public/sitemap.xml` y `src/data/mum.js`. Cambiarlo ahí cuando haya dominio propio.
