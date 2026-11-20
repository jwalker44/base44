export function grandchallenge() {
    console.log('grandchallenge');

    const grandchallengecontainer = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#grandchallenge-container",
        scrub: 2,
        pin: true,
        // start: "top 10px", // when top of the element hits 20% of viewport
        // toggleActions: "play reverse play reverse", // Customize as needed
      },
    })
    .to (
        "#grandchallenge-background",
        {
            opacity: '1',
            filter: 'blur(0px)',
            duration: 4,
        }, 0
    )
    .to (
        "#grandchallenge-image img",
        {
            clipPath: "polygon(100% 0%, 0% 20%, 0% 90%, 100% 70%)",
            delay: 2,
            duration: 2,
        },0
    )
    .to(
        "#grandchallenge-title h1",
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
        "#grandchallenge-title p",
        {
            y: '0',
            opacity: '1',
            filter: 'blur(0px)',
            duration: 0.5,
            delay: 0.45,
            ease: 'power4.out',
        },0
    )    
    .to(
        "#grandchallenge-title h3",
        {
            y: '0',
            opacity: '1',
            filter: 'blur(0px)',
            duration: 0.35,
            ease: 'power4.out',
        },0
    )
    .to(
        "#grandchallenge-title h2",
        {
            y: '0',
            opacity: '1',
            filter: 'blur(0px)',
            delay: 0.25,
            duration: 0.5,
            ease: 'power4.out',
        },0
    )
    .to (
        "#grandchallenge-image img",
        {
            clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
            duration: 5,
        }
    )  
    // .to(
    //     "#grandchallenge-title h1",
    //     {
    //         opacity: '0',
    //         filter: 'blur(5px)',
    //         duration: 4,
    //         ease: 'power4.out',
    //         y: '-100',
    //     },4
    // )
    .to(
        "#grandchallenge-title h3",
        {
            opacity: '0',
            filter: 'blur(5px)',
            duration: 4,
            ease: 'power4.out',
            y: '-200',
        },4
    )
    // .to(
    //     "#grandchallenge-title h2",
    //     {
    //         opacity: '0',
    //         filter: 'blur(5px)',
    //         duration: 4,
    //         ease: 'power4.out',
    //         y: '-50',
    //     },4
    // )
    .to(
        "#grandchallenge-title p",
        {
            opacity: '0',
            filter: 'blur(5px)',
            duration: 4,
            ease: 'power4.out',
            y: '-300',
        },4
    )


    const gccontent = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#gc-content",
        pin: true,
        scrub: 2,
      },
    })
    .from(
        "#gc-content-text p", 
        {
            ease: 'power4.out',
            duration: 2,
            opacity: 0,
            filter: 'blur(5px)',
            y: '+=800',
            stagger: 0.25,
        }
    )
    .from (
        "#gc-content-vid",
        {
            ease: 'power4.out',
            duration: 2,
            opacity:0,
            y: '+= 800',
        }, 0.15
    )

}
