gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: document.body,
    start: "1px top",
    toggleActions: "play none none reverse",
  },
});

tl.to("header", {
  height: "100px",
  duration: 0.3,
  ease: "power1.out",
})
  .to(
    ".nav-bar",
    {
      marginTop: "18px",
      duration: 0.3,
      ease: "power1.out",
    },
    "<"
  )
  .to(
    ".header-logo",
    {
      width: "44px",
      height: "50px",
      duration: 0.3,
      ease: "power1.out",
    },
    "<"
  )
  .to(
    ".header-text",
    {
      y: -20,
      opacity: 0,
      duration: 0.3,
      ease: "power1.out",
    },
    "<"
  );
