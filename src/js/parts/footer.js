export function footer() {
    console.log('footer');

    const footer = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#footer",
        scrub: 2,
        pin: true,
      },
    })
    .to (
        "#footer-background", 
        {
            opacity: "1",
        }, 0
    )
    .to (
        "#footer-image",
        {
            opacity: "0",
        }, 0
    )
    // .to (
    //     ".logo-container-footer",
    //     {
    //         opacity: 1,
    //         y:"+=500",
    //         filter: "blur(5px)",
    //     },0
    // ) 
    .to(
        "#footer .logo-building-footer", 
        {
            y: 0,
            opacity: 1,
            ease: "power4.out",
            duration: 0.15,
            stagger: 0.08,
        }, 0
    )   
    .to(
        ".button", 
        {
            y: 0,
            opacity: 1,
            ease: "power4.out",
            filter: "blur(0px)",
            duration: 1,
        }, 0
    )
    .to (
        "#cover-background", 
        {
            opacity: "1",
        }, 0
    );         
}