const text =
  "DevOps Engineer focused on CI/CD, Docker, Kubernetes, and AWS cloud infrastructure";

let index = 0;
let isDeleting = false;
const speed = 80;
const pause = 1500;

function typeEffect() {
  const el = document.getElementById("typing-text");
  if (!el) return;

  if (!isDeleting) {
    el.textContent = text.slice(0, index + 1);
    index++;

    if (index === text.length) {
      setTimeout(() => (isDeleting = true), pause);
    }
  } else {
    el.textContent = text.slice(0, index - 1);
    index--;

    if (index === 0) {
      isDeleting = false;
    }
  }

  setTimeout(typeEffect, speed);
}

typeEffect();
