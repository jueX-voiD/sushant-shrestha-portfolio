gsap.from(".process-card .card", {
  scrollTrigger: {
    trigger: ".process-card",
    start: "top 60%",
    toggleActions: "play none none none",
  },
  x: "50%",
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
  stagger: 0.15,
});
