export function roundtable() {
    console.log('roundtable');


    const rtCards = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#roundtable-highlights",
        start: "top 60%", 
        toggleActions: "play reverse play reverse",
      },
    })
    .from (
      ".large-card-screen",
      {
        opacity: 0,
        duration: 3,
        ease: "power4.out",
        stagger: {
          amount: 1,
        }
      }
    )
    .from (
      ".highlights-title",
      {
        opacity: 0,
        y: -300,
        duration: 0.5,
        ease: "power4.out",
        stagger: {
          amount: 1,
        }
      }, 1
    )
    .from (
      ".large-card-text p",
      {
        opacity: 0,
        duration: 3,
        ease: "power4.out",
      }, 1
    )    

    const rtLogos = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#all-logos",
        start: "top 50%", // when top of div hits center of viewport
        toggleActions: "play reverse play reverse",
      },
    })
    .add("f2")
    .from(
      ".logo",
      {
        scaleX: 0,
        scaleY: 0,
        duration: 1,
        ease: Bounce.easeOut,
        stagger: {
          amount: 1,
        },
      },
      "f2"
    );    


    const rtTitle = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#roundtable-title",
        start: "top 60%", 
        toggleActions: "play reverse play reverse",
      },
    })
    .from(
        "#roundtable-title",
        {
            x: -300,
            opacity:0,
            duration: 1.5,
            ease: "power4.out",
        }, 0
    )
    .from(
        ".roundtable-text", 
        {
          opacity:0,
          delay: 0.5,
          duration: 1.5,
        }, 0
    )
    .to(
      ".line-mask-5",
      {
          width: "305px",
          duration: 0.5,
          delay: 1,
          ease: "power1.in",
      }, 0
    );


    const rtStayTuned = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#stay-tuned",
        start: "top bottom", 
        toggleActions: "play reverse play reverse",
      },
    })
    .from(
        "#stay-tuned",
        {
            y: 300,
            opacity:0,
            duration: 1.5,
            ease: "power4.out",
        }, 0
    );


    const rtIcon = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#roundtable-content-icon",
        start: "top 100%", 
        scrub: 1.5,
      },
    })
    .from(
        ".roundtable-icon:nth-of-type(1)",
        {
            y: -50,
        }, 0
    )
    .from(
        ".roundtable-icon:nth-of-type(2)",
        {
            y: -75,
            x: -75,
        }, 0
    )
    .from(
        ".roundtable-icon:nth-of-type(3)",
        {
            y: -100,
            x: 75,
        }, 0
    );


}