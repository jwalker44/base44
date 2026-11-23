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
    .to("#sample-1-container .sample-arrow-cover", {
      x: 800,
      duration: 6,
      ease: "expo.out",
    })
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
    .to("#sample-2-container .sample-arrow-cover", {
      x: 800,
      duration: 6,
      ease: "expo.out",
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

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#sample-5",
        start: "top top",
        scrub: true,
        end: "+=300%",
        pin: true,
      },
    })
    .to("#sample-5-container .sample-arrow-cover", {
      x: 800,
      duration: 6,
      ease: "expo.out",
    })
    .to(
      "#sample-5-container .sample-header",
      {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: "expo.out",
        stagger: 0.5,
      },
      1,
    )
    .to("#sample-5-container .sample-image img:nth-child(odd)", {
      rotation: 5,
      x: 0,
      scale: 1,
      opacity: 1,
      duration: 2,
      ease: "expo.out",
      stagger: 3,
    })
    .to("#sample-5-container .sample-image img:nth-child(even)", {
      rotation: -5,
      x: 0,
      scale: 1,
      opacity: 1,
      duration: 2,
      ease: "expo.out",
      stagger: 3,
    });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#sample-3",
        start: "top top",
        scrub: true,
        end: "+=400%",
        pin: true,
      },
    })
    .to("#sample-3-container .sample-arrow-cover", {
      x: 800,
      duration: 6,
      ease: "expo.out",
    })
    .to(
      "#sample-3-container .sample-header",
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
      "#sample-3-container .sample-image img",
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
        trigger: "#sample-4",
        start: "top top",
        scrub: true,
        end: "+=200%",
        pin: true,
      },
    })
    .to("#sample-4-container .sample-arrow-cover", {
      x: 800,
      duration: 6,
      ease: "expo.out",
    })
    .to(
      "#sample-4-container .sample-header",
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
      "#sample-4-container .sample-image img:nth-child(odd)",
      {
        rotation: 5,
        x: 0,
        scale: 1,
        opacity: 1,
        duration: 3,
        ease: "expo.out",
        stagger: 6,
      },
      1,
    )
    .to(
      "#sample-4-container .sample-image img:nth-child(even)",
      {
        rotation: -5,
        x: 0,
        scale: 1,
        opacity: 1,
        duration: 3,
        ease: "expo.out",
        stagger: 6,
      },
      1.15,
    );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#sample-6",
        start: "top top",
        scrub: true,
        end: "+=300%",
        pin: true,
      },
    })
    .to("#sample-6-container .sample-arrow-cover", {
      x: 800,
      duration: 6,
      ease: "expo.out",
    })
    .to(
      "#sample-6-container .sample-header",
      {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: "expo.out",
        stagger: 0.5,
      },
      1,
    )
    .to("#sample-6-container .sample-image img", {
      rotation: 0,
      x: 0,
      scale: 1,
      opacity: 1,
      duration: 2,
      ease: "expo.out",
      stagger: 3,
    });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#sample-7",
        start: "top top",
        scrub: true,
        end: "+=300%",
        pin: true,
      },
    })
    .to("#sample-7-container .sample-arrow-cover", {
      x: 800,
      duration: 6,
      ease: "expo.out",
    })
    .to(
      "#sample-7-container .sample-header",
      {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: "expo.out",
        stagger: 0.5,
      },
      1,
    )
    .to("#sample-7-container .sample-image img", {
      rotation: 0,
      x: 0,
      scale: 1,
      opacity: 1,
      duration: 2,
      ease: "expo.out",
      stagger: 3,
    });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#sample-8",
        start: "top top",
        scrub: true,
        end: "+=400%",
        pin: true,
      },
    })
    .to("#sample-8-container .sample-arrow-cover", {
      x: 800,
      duration: 6,
      ease: "expo.out",
    })
    .to(
      "#sample-8-container .sample-header",
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
      "#sample-8-container .sample-image img",
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
