//   animation when user moves to another page
pageTransition = () => {
  const timeline = gsap.timeline();
  let main = document.querySelector("main");
  if (main.classList.contains("main-main")) {
    timeline.to("h1 a:focus", {
      duration: 0.2,
      transform: "rotateY(-0deg) scale(1) translateZ(0)",
    });
  }
  timeline.to("main > *", {
    duration: 0.5,
    opacity: 0,
  });
};

projectAnimation = () => {
  let mainProject = document.querySelector("main");
  const timeline = gsap.timeline();
  if (mainProject.classList.contains("main-main")) {
    gsap.to(".project-heading", {
      duration: 1,
      y: "-50%",
    });
    gsap.to(".img-wrapper", {
      duration: 1,
      scaleY: 1,
      ease: "power4.inOut",
    });
  }
};
//   animation when user refreshes the page
onceAnimation = () => {
  const timeline = gsap.timeline();
};

barba.init({
  transitions: [
    {
      async leave(data) {
        const done = this.async();
        pageTransition();
        await delay(700);
        done();
      },

      async enter(data) {
        window.scrollTo(0, 0);
        projectAnimation();
      },

      async once(data) {
        onceAnimation();
      },
    },
  ],
});

delay = (n) => {
  n = n;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
};
