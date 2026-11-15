document.addEventListener("DOMContentLoaded", () => {
  const record = document.getElementById("record");
  const tonearm = document.getElementById("tonearm");
  const powerLight = document.getElementById("powerLight");
  const playState = document.getElementById("playState");
  const nowTitle = document.getElementById("nowTitle");
  const nowSubtitle = document.getElementById("nowSubtitle");
  const equalizer = document.getElementById("equalizer");
  const helpToggle = document.getElementById("helpToggle");
  const extraHelp = document.getElementById("extraHelp");

  function setPlaying(isPlaying) {
    record.classList.toggle("is-playing", isPlaying);
    tonearm.classList.toggle("is-playing", isPlaying);
    powerLight.classList.toggle("active", isPlaying);
    equalizer.classList.toggle("active", isPlaying);
    playState.textContent = isPlaying ? "REPRODUCIENDO" : "EN PAUSA";
  }

  helpToggle.addEventListener("click", () => {
    const isOpen = helpToggle.getAttribute("aria-expanded") === "true";
    helpToggle.setAttribute("aria-expanded", String(!isOpen));
    helpToggle.textContent = isOpen ? "AYUDA +" : "AYUDA −";
    extraHelp.hidden = isOpen;
  });

  // Spotify Embed iFrame API: primero registramos el callback y después cargamos la API
  // para evitar una carrera entre el script externo y este archivo.
  window.onSpotifyIframeApiReady = (IFrameAPI) => {
    const mount = document.getElementById("spotifyEmbed");
    const options = {
      width: "100%",
      height: "352",
      uri: "spotify:playlist:5lEkXYvgZngoYz2B4R0wLY"
    };

    IFrameAPI.createController(mount, options, (controller) => {
      controller.addListener("ready", () => {
        playState.textContent = "LISTO PARA REPRODUCIR";
      });

      controller.addListener("playback_started", (event) => {
        setPlaying(true);
        nowTitle.textContent = "Reproducción iniciada";
        nowSubtitle.textContent = "Tu selección está sonando en Spotify";
      });

      controller.addListener("playback_update", (event) => {
        const data = event.data || {};
        if (typeof data.isPaused === "boolean") setPlaying(!data.isPaused);
        if (data.isBuffering) playState.textContent = "CARGANDO…";
      });
    });
  };

  // Estado inicial: el vinilo permanece quieto hasta que Spotify confirme reproducción.
  setPlaying(false);

  const spotifyApi = document.createElement("script");
  spotifyApi.src = "https://open.spotify.com/embed/iframe-api/v1";
  spotifyApi.async = true;
  spotifyApi.onerror = () => {
    playState.textContent = "SPOTIFY NO DISPONIBLE";
  };
  document.body.appendChild(spotifyApi);
});
