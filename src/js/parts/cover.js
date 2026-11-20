export function cover() {
    console.log('cover');


    const logo = gsap.timeline({
        scrollTrigger: {
        trigger: "#hero", // Use the current element in the loop
        start: "top 10px", // when top of the element hits 20% of viewport
        toggleActions: "play reverse play reverse", // Customize as needed
        },
    })
    .to(
        "#hero .logo-building", 
        {
            y: 0,
            opacity: 1,
            ease: "power4.out",
            delay: 1,
            duration: 0.15,
            stagger: 0.08,
        }, 0
    );


    const cover2 = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#landing-tiers-contents",
        scrub: 2,
      },
    })
    .to (
        "#cover-background", 
        {
            opacity: "0",
        }, 0
    )


    const cover = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#hero",
        scrub: 2,
        pin: true,
      },
    })
    // .to(
    //     "#cover-image",
    //     {
    //         clipPath: "polygon(0% 0%, 100% 0%, 100% 90%, 0% 90%)",
    //     }, 0
    // )
    // .to(
    //     "#cover-image",
    //     {
    //         clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    //     }
    // )
    // .to (
    //     ".cover-annual",
    //     {
    //         // y:"+=800",
    //         color: "#ffffff",
    //     },0
    // )
    .to (
        ".logo-container",
        {
            opacity: 0,
            y:"+=500",
            filter: "blur(5px)",
        },0
    )
    .to (
        "#mouse-container",
        {
            opacity:0,
            y:"+=650",
            color: "#ffffff",
            filter: "blur(5px)",
        },0
    )


    const theMouse = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top 5", 
        toggleActions: "play reverse play reverse",
      },
      repeat: -1, 
      repeatDelay: 1
  })
    .from ("#mouse-ball",
    {
        opacity: 0,
        y: "-=28px",
        ease: "bounce.out",
    });
    

}