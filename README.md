# Sitio web — Gestoría ANLopez

Sitio estático de una sola página (HTML + CSS + JS, sin dependencias ni build).

## Archivos

| Archivo | Descripción |
|---|---|
| `index.html` | Estructura y contenido de la página |
| `styles.css` | Estilos y diseño responsive |
| `script.js` | Menú móvil, año del footer y validación del formulario |
| `assets/favicon.svg` | Ícono de pestaña |

## Cómo verlo

Abrí `index.html` con doble clic en el navegador. No requiere servidor.

## Datos de contacto

- **WhatsApp:** `+54 9 11 2450-7592` (`wa.me/5491124507592`). Cargado.
- **Teléfono:** `+54 9 11 6591-0832` (`tel:`). Cargado.
- **Email:** `lopeztramitesgenerales@gmail.com` (en `index.html` y `script.js`). Cargado.
- **Dirección:** figura como "A confirmar". **Pendiente** — pedir a la clienta.
- **Horario:** "Lunes a viernes de 9 a 17 h". **Pendiente** de confirmar.

## Formulario de contacto (Netlify Forms)

El formulario se envía a **Netlify Forms** por AJAX (`fetch` a `/`). Netlify guarda
cada consulta y puede reenviarla por email. No requiere backend ni servicio de
terceros.

El `<form>` lleva `name="consultas"`, `data-netlify="true"`, un input oculto
`form-name` y un honeypot `bot-field` anti-spam.

### Paso manual — activar el aviso por email (una sola vez)

1. Subí esta versión a Netlify (deploy).
2. En **app.netlify.com** → tu sitio → pestaña **Forms**. Debe aparecer el
   formulario **"consultas"** (se registra al deployar; si no aparece, hacé un
   deploy nuevo).
3. **Forms → Settings & usage → Form notifications → Add notification →
   Email notification**.
4. En *Email to notify* poné **lopeztramitesgenerales@gmail.com** y guardá.
5. Probá enviando una consulta de prueba desde el sitio publicado (en local no
   funciona: Netlify Forms solo procesa en el dominio de Netlify).

Las consultas también quedan listadas en la pestaña **Forms** del panel.

Plan gratis: hasta 100 envíos por mes.

## Servicios incluidos

1. **Jubilaciones y pensiones** — ANSES e IPS (ordinaria, edad avanzada, invalidez,
   pensión por fallecimiento, moratorias, reajustes).
2. **Trámites municipales y docentes** — habilitaciones, libre deuda municipal,
   aviso de obra, permiso de obra, reconocimiento de antigüedad, resolución de
   titularidad.
3. **Mandataria del automotor** — transferencias, denuncia de venta, multas,
   duplicados de título/cédula, cambio de radicación, informe de dominio.
4. **Turnos médicos y acompañamientos** — solicitud de turnos médicos, turnos en
   obras sociales y PAMI, acompañamiento a trámites y estudios, asistencia a
   personas mayores.

## Publicar

Cualquier hosting estático sirve: Netlify, Vercel, GitHub Pages, Cloudflare Pages,
o subir los archivos por FTP al hosting del cliente.
