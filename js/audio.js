document.addEventListener("DOMContentLoaded", function () {
  const audio = document.querySelector("audio");

  window.addEventListener("blur", function () {
    audio.pause(); // Pausa la música cuando la pestaña pierde el foco
  });

  window.addEventListener("focus", function () {
    if (audio.paused) {
      audio.play().catch((err) => console.log("Reproducción bloqueada:", err));
    }
  });
});

window.addEventListener("load", function () {
  const audio = document.querySelector("audio");
  audio.play().catch((err) => console.log("Reproducción bloqueada:", err));
});
