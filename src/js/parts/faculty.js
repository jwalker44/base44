export function faculty() {
    console.log('faculty');

    const faLine = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".line-mask-3",
        start: "top 60%", 
        toggleActions: "play reverse play reverse",
      },
    })
    .to(
        ".line-mask-3",
        {
            width: "305px",
            duration: 0.5,
            delay: 0.5,
            ease: "power1.in",
        }, 0
    )

    const faFaculty = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#faculty",
        start: "top 20%", // when top of div hits center of viewport
        toggleActions: "play reverse play reverse",
      },
    })
    .add("fl")
    .from(
      ".people-row h3",
      {
        opacity: 0,
        //x: 200,
        duration: 3,
        delay: 1,
        ease: "Expo.easeOut",
      },
      "fl"
    )
    .from(
      ".people-row p",
      {
        opacity: 0,
        //x: 200,
        duration: 3,
        delay: 1.25,
        ease: "Expo.easeOut",
      },
      "fl"
    )
    .from(
      ".people-row img",
      {
        opacity: 0,
        scaleX: 0.5,
        scaleY: 0.5,
        duration: 1,
        delay: 1,
        ease: Bounce.easeOut,
        stagger: {
          amount: 1,
        },
      },
      "fl"
    );    

    const faTitle = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#faculty",
        start: "top 60%", 
        toggleActions: "play reverse play reverse",
      },
    })
    .to(
        "#faculty-title",
        {
            y: 0,
            opacity:1,
            duration: 1.5,
            ease: "power4.out",
        }, 0
    )
    .to(
      "#faculty-subtitle",
      {
          opacity:1,
          duration: 2,
          ease: "power4.out",
      }, 0.5
  )
  .to(
      "#faculty-text",
      {
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
      }
  );




    const faIcon = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#content-faculty-icon",
        start: "top 90%", 
        scrub: 1,
      },
    })
    .from(
        ".faculty-icon:nth-of-type(1)",
        {
            y: -50,
        }, 0
    )
    .from(
        ".faculty-icon:nth-of-type(2)",
        {
            y: -75,
            x: -75,
        }, 0
    )
    .from(
        ".faculty-icon:nth-of-type(3)",
        {
            y: -75,
            x: +75,
        }, 0
    );



}