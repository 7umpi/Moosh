function yes() {
  document.body.innerHTML = "<h1>YAY!!! ❤️</h1>";
}

const noBtn = document.getElementById("noBtn");

// create trail
function createTrail(x, y) {
  const dot = document.createElement("div");
  dot.className = "trail";
  dot.style.left = x + "px";
  dot.style.top = y + "px";
  document.body.appendChild(dot);

  setTimeout(() => dot.remove(), 500);
}

// move NO button
noBtn.addEventListener("mouseover", () => {
  const rect = noBtn.getBoundingClientRect();
  createTrail(rect.left, rect.top);

  const x = Math.random() * window.innerWidth * 0.8;
  const y = Math.random() * window.innerHeight * 0.8;

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// falling hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";

  heart.style.left = Math.random() * window.innerWidth + "px";

  const duration = 3 + Math.random() * 3;
  heart.style.animationDuration = duration + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), duration * 1000);
}

setInterval(createHeart, 300);
