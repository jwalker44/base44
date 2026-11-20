export function participants() {
    console.log('participants');

    const paLine = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".line-mask-4",
        start: "top 60%", 
        toggleActions: "play reverse play reverse",
      },
    })
    .to(
        ".line-mask-4",
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
        trigger: "#participants",
        start: "top 20%", // when top of div hits center of viewport
        toggleActions: "play reverse play reverse",
      },
    })
    .add("fl")
    .from(
      ".participants-row h3",
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
      ".participants-row p",
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
      ".participants-row img",
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
        trigger: "#participants",
        start: "top 60%", 
        toggleActions: "play reverse play reverse",
      },
    })
    .to(
        "#participants-title",
        {
            y: 0,
            opacity:1,
            duration: 1.5,
            ease: "power4.out",
        }, 0
    )
    .to(
      "#participants-text",
      {
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
      }
  );




    const faIcon = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#content-participants-icon",
        start: "top 90%", 
        scrub: 1,
      },
    })
    .from(
        ".participants-icon:nth-of-type(1)",
        {
            y: -150,
        }, 0
    );
    // .from(
    //     ".participants-icon:nth-of-type(2)",
    //     {
    //         y: -75,
    //         x: -75,
    //     }, 0
    // )
    // .from(
    //     ".participants-icon:nth-of-type(3)",
    //     {
    //         y: -100,
    //         x: 75,
    //     }, 0
    // );



}