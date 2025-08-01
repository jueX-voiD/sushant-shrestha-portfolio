document.querySelectorAll(".text-reveal").forEach((section) => {
  const textElement = section.querySelector(".split");

  if (!textElement) return;

  const split = new SplitType(textElement, { types: "lines" });

  split.lines.forEach((line) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("line-wrapper");
    line.parentNode.insertBefore(wrapper, line);
    wrapper.appendChild(line);
  });

  gsap.from(split.lines, {
    yPercent: 100,
    ease: "power1.out",
    stagger: 0.1,
    scrollTrigger: {
      trigger: section, // This ensures it's scoped to each section
      start: "top 70%",
      end: "top 70%",
      toggleActions: "play none none none",
      markers: false,
    },
  });
});
