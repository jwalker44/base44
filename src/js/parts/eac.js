export function eac() {
    console.log('EAC');

    const eaccontainer = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#eac-container",
        scrub: 2,
        pin: true,
        start: "top top",
        // start: "top 10px", // when top of the element hits 20% of viewport
        // toggleActions: "play reverse play reverse", // Customize as needed
      },
    })
    .to (
        "#eac-background",
        {
            opacity: '1',
            filter: 'blur(0px)',
            duration: 4,
        }, 0
    )
    .to (
        "#eac-image img",
        {
            clipPath: "polygon(100% 0%, 0% 20%, 0% 90%, 100% 70%)",
            delay: 2,
            duration: 2,
        },0
    )
    .to(
        "#eac-title h1",
        {
            y: '0',
            opacity: '1',
            filter: 'blur(0px)',
            duration: 0.15,
            delay: 0.25,
            ease: 'power4.out',
        },0
    )
    .to(
        "#eac-title p",
        {
            y: '0',
            opacity: '1',
            filter: 'blur(0px)',
            duration: 0.5,
            delay: 0.45,
            ease: 'power4.out',
        },0
    )    
    // .to(
    //     "#grandchallenge-title h3",
    //     {
    //         y: '0',
    //         opacity: '1',
    //         filter: 'blur(0px)',
    //         duration: 0.35,
    //         ease: 'power4.out',
    //     },0
    // )
    // .to(
    //     "#grandchallenge-title h2",
    //     {
    //         y: '0',
    //         opacity: '1',
    //         filter: 'blur(0px)',
    //         delay: 0.25,
    //         duration: 0.5,
    //         ease: 'power4.out',
    //     },0
    // )
    .to (
        "#eac-image img",
        {
            clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
            duration: 5,
        }
    )  
    .to(
        "#eac-title p",
        {
            opacity: '0',
            filter: 'blur(5px)',
            duration: 4,
            ease: 'power4.out',
            y: '-200',
        },4
    )
    const eaccontainer2 = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#eac-content",
        // scrub: 2,
        // pin: true,
        // markers: true,
        start: "top 40%",
        // start: "top 10px", // when top of the element hits 20% of viewport
        toggleActions: "play reverse play reverse", // Customize as needed
      },
    })
    .to (
        '#eac-content p',
        {
            y: '0',
            opacity: '1',
            filter: 'blur(0px)',            
            stagger: 0.25,
        }
    )


    const eaccontainer3 = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".eac-vid-container",
        scrub: 2,
        pin: true,
        // markers: true,
        start: "top 20%",
        // start: "top 10px", // when top of the element hits 20% of viewport
        // toggleActions: "play reverse play reverse", // Customize as needed
      },
    })    
    .to (
        '.eac-content-vid',
        {
            y: '0',
            opacity: '1',
            filter: 'blur(0px)',            
            stagger: 0.25,
        }
    )


    const eaccontainer4 = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#visit-eac-container",
        // scrub: 2,
        // pin: true,
        // markers: true,
        start: "top 80%",
        // start: "top 10px", // when top of the element hits 20% of viewport
        toggleActions: "play reverse play reverse", // Customize as needed
      },
    })    
    .to (
        '#visit-eac',
        {
            y: '0',
            opacity: '1',
            filter: 'blur(0px)',            
        }
    )

}
