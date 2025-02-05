window.addEventListener("DOMContentLoaded", () => {
  const audio = document.querySelector("audio");
  audio.volume = 1; // Ajusta el volumen si es necesario
  audio.play().catch((error) => console.log("Autoplay bloqueado:", error));
});

$(document).ready(function () {
  let isOpen = false;

  $(".container").click(function () {
    if (!isOpen) {
      $(".card").stop().animate(
        {
          top: "-90px",
        },
        "slow"
      );
      $(".buttons").fadeIn("slow");
    } else {
      $(".card").stop().animate(
        {
          top: 0,
        },
        "slow"
      );
      $(".buttons").fadeOut("slow");
    }
    isOpen = !isOpen;
  });
});

$(document).ready(function () {
  let isOpen = false;
  let clickCount = 0;
  const noButton = $(".no");
  const yesButton = $(".yes");
  const noTexts = [
    "No",
    "¿Segura?",
    "¿De verdad?",
    "🥺",
    "Ultima Oportunidad",
    "",
  ];

  $(".container").click(function () {
    if (!isOpen) {
      $(".card").stop().animate({ top: "-90px" }, "slow");
      $(".buttons").fadeIn("slow");
    } else {
      $(".card").stop().animate({ top: 0 }, "slow");
      $(".buttons").fadeOut("slow");
    }
    isOpen = !isOpen;
  });

  noButton.click(function () {
    if (clickCount < 6) {
      let newSize = Math.max(10, 16 - clickCount * 2) + "px";
      let yesSize = Math.min(30, 16 + clickCount * 3) + "px";

      noButton
        .css({
          padding: "5px " + (30 - clickCount * 5) + "px",
          fontSize: newSize,
        })
        .text(noTexts[clickCount]);

      yesButton.css({
        padding: "10px " + (50 + clickCount * 10) + "px",
        fontSize: yesSize,
      });

      clickCount++;
      if (clickCount === 6) {
        noButton.fadeOut("slow");
      }
    }
  });
});

/* Particulas */

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("particles-canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particlesArray = [];

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 5 + 1;
      this.speedX = Math.random() * 3 - 1.5;
      this.speedY = Math.random() * 3 - 1.5;
      this.opacity = Math.random() * 0.5 + 0.3;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
      ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }
  }

  function initParticles() {
    particlesArray = [];
    for (let i = 0; i < 100; i++) {
      particlesArray.push(new Particle());
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach((particle) => {
      particle.update();
      particle.draw();
    });
    requestAnimationFrame(animateParticles);
  }

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
  });

  initParticles();
  animateParticles();
});
