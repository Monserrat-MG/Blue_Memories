BLUE MEMORIES — SITIO WEB VINTAGE
=================================

CONTENIDO
---------
- index.html: portada/caja del álbum.
- disco.html: tocadiscos y playlist de Spotify.
- css/: estilos para cada pantalla.
- js/: animaciones e integración con Spotify.
- assets/img/portada-caja.jpg: imagen frontal de la caja (proporcionada por ti).
- assets/img/etiqueta-vinilo.jpg: imagen central del vinilo (proporcionada por ti).

CÓMO ABRIR
----------
1. Descomprime la carpeta BLUE-MEMORIES.
2. Abre index.html en tu navegador para una vista local.
3. Para publicarla, sube TODO el contenido de BLUE-MEMORIES al directorio público de tu hosting
   (por ejemplo, public_html). Mantén la estructura de carpetas.
4. Abre tu dominio. La página inicial será index.html.

IMÁGENES
--------
Las dos imágenes que compartiste ya están integradas.
Puedes reemplazarlas conservando exactamente estos nombres:
- assets/img/portada-caja.jpg
- assets/img/etiqueta-vinilo.jpg

La portada está preparada en formato vertical. La imagen del automóvil se muestra recortada
en círculo como etiqueta central del vinilo. No se modifica el archivo original.

SPOTIFY
-------
La playlist integrada es:
https://open.spotify.com/playlist/5lEkXYvgZngoYz2B4R0wLY

El reproductor utiliza el Embed oficial y la iFrame API de Spotify para escuchar la playlist
y sincronizar el giro del vinilo con los eventos de reproducción cuando Spotify los proporciona.

IMPORTANTE:
- Se necesita conexión a internet para cargar Spotify y las fuentes web.
- Spotify puede solicitar iniciar sesión, limitar la reproducción según la cuenta o región,
  o abrir la aplicación. Eso lo controla Spotify, no este sitio.
- El audio no se reproduce automáticamente al entrar: el visitante debe iniciar la canción
  desde los controles oficiales de Spotify.
- El sitio no descarga ni almacena canciones.
- La animación depende de los eventos que Spotify permita comunicar al navegador.

RESPONSIVE
----------
El diseño incluye adaptaciones para escritorio, tablet y celular.
La lista de Spotify usa un reproductor de 352 px de alto, que permite mostrar la playlist.

ARCHIVOS EDITABLES
------------------
- Colores y diseño de portada: css/inicio.css
- Tocadiscos y versión móvil: css/reproductor.css
- Comportamiento de la portada: js/inicio.js
- Eventos de Spotify y giro del vinilo: js/reproductor.js

NOTA
----
Este proyecto es una primera versión funcional de la interfaz. Comprueba la reproducción
desde tu hosting con HTTPS y una cuenta/dispositivo de Spotify compatible antes de compartirlo.
