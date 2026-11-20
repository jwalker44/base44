export function frontiers() {
    console.log('frontiers');

    const frontierscontainerX = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#frontiers-container",
        scrub: 2,
        pin: true,
        start: "top top", // Start when the container's top reaches the top of the viewport
      },
    })
    .to (
        "#frontiers-background",
        {
            opacity: '1',
            filter: 'blur(0px)',
            duration: 4,
        }, 0
    )
    .to (
        "#frontiers-image img",
        {
            clipPath: "polygon(100% 0%, 0% 20%, 0% 90%, 100% 70%)",
            delay: 2,
            duration: 2,
        },0
    )
    .to(
        "#frontiers-title h1",
        {
            y: '0',
            opacity: '1',
            filter: 'blur(0px)',
            duration: 2,
            ease: 'power4.out',
        },0
    )
    .to(
        "#frontiers-title p",
        {
            y: '0',
            opacity: '1',
            filter: 'blur(0px)',
            delay: 0.25,
            duration: 2,
            ease: 'power4.out',
        },0
    )    
    .to(
        "#frontiers-title h2",
        {
            y: '0',
            opacity: '1',
            filter: 'blur(0px)',
            delay: 0.15,
            duration: 2,
            ease: 'power4.out',
        },0
    )
    .to (
        "#frontiers-image img",
        {
            clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
            duration: 5,
        }
    )  
    .to(
        "#frontiers-title p",
        {
            opacity: '0',
            filter: 'blur(5px)',
            duration: 4,
            ease: 'power4.out',
            y: '-200',
        },4
    )    

    const gccontent = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#f-content",
        pin: true,
        scrub: 2,
      },
    })
    .from (
        "#f-content-vid",
        {
            ease: 'power4.out',
            duration: 2,
            opacity:0,
            y: '+= 800',
        }, 0.15
    )


}