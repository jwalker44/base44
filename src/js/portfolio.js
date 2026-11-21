window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to("#cover-image", {
    y: 100,
    duration: 1,
    ease: "expo.out",
    scrollTrigger: {
      trigger: "#cover",
      start: "top top",
      toggleActions: "play reverse play reverse",
    },
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#sample-1",
        start: "top top",
        scrub: true,
        end: "+=400%",
        pin: true,
      },
    })
    .to(".base44", {
      opacity: 0,
      duration: 2,
      ease: "expo.out",
    })
    .to(
      "#cover-image",
      {
        opacity: 0,
        duration: 2.5,
        ease: "expo.out",
      },
      0,
    )
    .to(
      ".graphic",
      {
        opacity: 0,
        duration: 2,
        ease: "expo.out",
      },
      0.5,
    )
    .to(
      "#sample-1-container .sample-header",
      {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: "expo.out",
        stagger: 0.5,
      },
      1,
    )
    .to(
      "#sample-1-container .sample-image img",
      {
        rotation: 0,
        x: 0,
        scale: 1,
        opacity: 1,
        duration: 3,
        ease: "expo.out",
        stagger: 6,
      },
      1,
    );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#sample-2",
        start: "top top",
        scrub: true,
        end: "+=400%",
        pin: true,
      },
    })
    .to(
      "#sample-2-container .sample-header",
      {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: "expo.out",
        stagger: 0.5,
      },
      1,
    )
    .to(
      "#sample-2-container .sample-image img",
      {
        rotation: 0,
        x: 0,
        scale: 1,
        opacity: 1,
        duration: 3,
        ease: "expo.out",
        stagger: 6,
      },
      1,
    );
});
