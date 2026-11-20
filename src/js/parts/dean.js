export function dean() {
    console.log('DEAN SPEAKER SERIES');

    const deancontainer = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#dean-container",
        scrub: 2,
        pin: true,
        start: "top top",
        // start: "top 10px", // when top of the element hits 20% of viewport
        // toggleActions: "play reverse play reverse", // Customize as needed
      },
    })
    .to (
        "#dean-background",
        {
            opacity: '1',
            filter: 'blur(0px)',
        }, 0
    )
    .to (
        "#dean-image img",
        {
            clipPath: "polygon(100% 0%, 0% 20%, 0% 90%, 100% 70%)",
            delay: 2,
        },0
    )
    .to(
        "#dean-title h1",
        {
            y: '0',
            opacity: '1',
            filter: 'blur(0px)',
            delay: 0.25,
            ease: 'power4.out',
        },0
    )
    .to(
        "#dean-title p",
        {
            y: '0',
            opacity: '1',
            filter: 'blur(0px)',
            delay: 0.45,
            stagger: 0.5,
            ease: 'power4.out',
        },0
    )    
    .to (
        "#dean-image img",
        {
            clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
            duration: 5,
        }
    )  
    .to(
        "#dean-title p",
        {
            opacity: '0',
            filter: 'blur(5px)',
            duration: 4,
            ease: 'power4.out',
            y: '-200',
        },4
    )    
    
    const deancontainer2 = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#dean-content",
        start: "top 40%", // when top of the element hits 20% of viewport
        toggleActions: "play reverse play reverse", // Customize as needed
      },
    })    
    .to (
        "#dean-content img",
        {
            y: '0',
            opacity: '1',
            filter: 'blur(0px)',
            ease: 'power4.out',  
            stagger: 0.25,
        }
    )
    .to (
        "#dean-content .name",
        {
            y: '0',
            opacity: '1',
            filter: 'blur(0px)',
            ease: 'power4.out',  
            stagger: 0.25,
        }, 0
    )
    .to (
        "#dean-content .title",
        {
            y: '0',
            opacity: '1',
            filter: 'blur(0px)',
            ease: 'power4.out',  
            stagger: 0.25,
        }, 0
    )




}
