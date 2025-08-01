gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
  "(min-width: 641px)": function () {
    gsap.from(".open-to-work", {
      y: 400,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".open-to-work",
        start: "top 92%",
        toggleActions: "play none none none",
      },
    });
  },

  "(max-width: 640px)": function () {
    gsap.from(".open-to-work", {
      y: 400,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".mobile-open-to-work-trigger",
        start: "top 60%",
        toggleActions: "play none none none",
      },
    });
  },
});
