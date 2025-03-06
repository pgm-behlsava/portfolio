import {
  $catchPhrase,
  $headshot,
  $greeting,
  $parallax,
  $scrollButton,
  $serviceCards,
} from "./elements.js";

import { buildUI } from "./rendering.js";

function initialize() {
  transformElement($headshot, 1, 1000);
  transformElement($greeting, 1, 2000);
  transformElement($catchPhrase, 1, 500);
  buildUI();
  registerListeners();
}

function registerListeners() {
  if ($serviceCards) {
    Array.from($serviceCards).forEach(($card) => {
      $card.addEventListener("click", function toggleDescription(event) {
        const $openCards = document.querySelectorAll(".service-card.open");

        if (!$card.classList.contains("open")) $card.classList.add("open");

        $openCards.forEach(($openCard) => {
          if ($openCard !== event.currentTarget)
            $openCard.classList.remove("open");
        });
      });
    });
  }

  addEventListener("scroll", () => {
    if (scrollY > $parallax.offsetTop) $scrollButton.classList.add("active");
    else $scrollButton.classList.remove("active");
  });
}

function transformElement($element, scale, delay) {
  setTimeout(() => {
    $element.style.transform = `scale(${scale})`;
  }, delay);
}

initialize();
