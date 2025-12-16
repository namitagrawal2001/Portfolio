const text =
  "DevOps Engineer focused on CI/CD, Docker, Kubernetes, and AWS cloud infrastructure";

let index = 0;
let isDeleting = false;
const speed = 80;
const pause = 1500;

function typeEffect() {
  const el = document.getElementById("typing-text");
  if (!el) return;

  if (!isDeleting && index <= text.length) {
    el.textContent = text.substring(0, index++);
  } else if (isDeleting && index >= 0) {
    el.textContent = text.substring(0, index--);
  }

  if (index === text.length) {
    setTimeout(() => (isDeleting = true), pause);
  } else if (index === 0) {
    isDeleting = false;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();
