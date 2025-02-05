window.addEventListener("DOMContentLoaded", () => {
  const audio = document.querySelector("audio");
  audio.volume = 0.5; // Ajusta el volumen si es necesario
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
    "¿Estás segura?",
    "Piensa bien",
    "Última oportunidad",
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

document.addEventListener("DOMContentLoaded", function () {
  const heartsContainer = document.querySelector(".hearts-container");
  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
  setInterval(createHeart, 500);
});
