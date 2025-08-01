const cursor = document.querySelector(".custom-cursor");
const cursorSvg = document.querySelector(".cursor-svg");
const cursorText = document.querySelector(".cursor-text");
const projectContainers = document.querySelectorAll(".project-cursor");

// Mouse move event to follow cursor
document.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.1,
    ease: "power2.out",
  });
});

// Continuous rotation for SVG from center
gsap.to(cursorSvg, {
  rotation: 360,
  duration: 8,
  ease: "none",
  repeat: -1,
  transformOrigin: "center center",
});

// Hover events for project containers
projectContainers.forEach((container) => {
  container.addEventListener("mouseenter", () => {
    gsap.to([cursorSvg, cursorText], {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "back.out(1.7)",
    });
  });

  container.addEventListener("mouseleave", () => {
    gsap.to([cursorSvg, cursorText], {
      opacity: 0,
      scale: 0,
      duration: 0.3,
      ease: "back.in(1.7)",
    });
  });
});
