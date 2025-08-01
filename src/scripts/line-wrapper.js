gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".parallex-line-wrapper",
    start: "top 75%",
    toggleActions: "play none none none",
  },
});

tl.from(".parallex-line", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  ease: "power2.out",
});

tl.fromTo(
  ".line-wrapper",
  { gap: "44px" },
  { gap: "14px", duration: 1, ease: "none" },
  "<"
);
