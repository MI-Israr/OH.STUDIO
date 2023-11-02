let tl = gsap.timeline();

tl.from(".main .main-header, .main .tags, .grid-container", {
  y: 100,
  delay: 0.1,
  opacity: 0,
  duration: 1.5,
  stagger: 0.3,
});

gsap.from(".bottom-heading h1", {
  y: 100,
  opacity: 0,
  delay: 0.3,
  stagger: 0.5,
  duration: 1,
  scrollTrigger: {
    scroller: "body",
    trigger: ".bottom-heading h1",
    start: "top 90%",
    end: "top 70%",
  },
});

gsap.from(".about .heading-tag, .about .rep-heading", {
  y: 100,
  delay: 0.1,
  opacity: 0,
  duration: 1.5,
  stagger: 0.2,
  scrollTrigger: {
    scroller: "body",
    trigger: ".about div",
    start: "-400% center",
    end: "400% center",
    markers: false,
  },
});
