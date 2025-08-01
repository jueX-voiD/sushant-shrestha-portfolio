const eyeGroup = document.getElementById("eye-group");

const center = {
  x: 161.375,
  y: 114.736,
};

const maxOffset = 8;

document.addEventListener("mousemove", (e) => {
  const svg = eyeGroup.closest("svg");
  const rect = svg.getBoundingClientRect();

  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const dx = mouseX - center.x;
  const dy = mouseY - center.y;
  const angle = Math.atan2(dy, dx);
  const dist = Math.min(Math.hypot(dx, dy), maxOffset);

  const offsetX = Math.cos(angle) * dist;
  const offsetY = Math.sin(angle) * dist;

  eyeGroup.setAttribute("transform", `translate(${offsetX}, ${offsetY})`);
});

const changeBg = document.getElementById("chg-bg");
const turnerLine = document.getElementById("tuner-line");
const clickChg = document.getElementById("click-chg");

const colors = ["#96BAE4", "#FF9596", "#7EC89E", "#35A3BB"];
const rotations = [37, 74, 111, 0];

let colorIndex = parseInt(localStorage.getItem("colorIndex")) || 0;

changeBg.setAttribute("fill", colors[colorIndex]);
turnerLine.style.transform = `rotate(${rotations[colorIndex]}deg)`;

const clickSound = new Audio("./assets/mixkit-clear-mouse-clicks-2997.wav");

function cycleFillColor() {
  colorIndex = (colorIndex + 1) % colors.length;

  const currentColor = colors[colorIndex];

  changeBg.setAttribute("fill", currentColor);
  turnerLine.style.transform = `rotate(${rotations[colorIndex]}deg)`;

  localStorage.setItem("colorIndex", colorIndex);

  clickSound.currentTime = 0;
  clickSound.play();

  if (navigator.vibrate) {
    navigator.vibrate(50);
  }

  // 🌈 Update all span elements' text color
  const allSpans = document.querySelectorAll("span");
  allSpans.forEach((span) => {
    span.style.color = currentColor;
  });
}

clickChg.addEventListener("click", cycleFillColor);
turnerLine.addEventListener("click", cycleFillColor);
