export function tiers() {
    console.log('tiers');

    const tiers = gsap
    .timeline({
        scrollTrigger: {
            trigger: "#landing-tiers",
            start: "top 50%", // when top of the element hits 20% of viewport
            toggleActions: "play reverse play reverse", // Customize as needed           
          },
    })
    .to(
        ".focus-text", 
        {
            y:"0",
            opacity: "1",
            ease: "power4.out",
            filter: "blur(0px)",
            duration: 1,
        }
    )
    .to(
        ".wpengine", 
        {
            y:"0",
            opacity: "1",
            ease: "power4.out",
            filter: "blur(0px)",
            duration: 1.5,
        }, 0
    )
    .to(
        ".tier", 
        {
            y:"0",
            opacity: "1",
            ease: "power4.out",
            filter: "blur(0px)",
            duration: 2,
            stagger: 1,
        }, 1
    ) 



    const badges3= gsap
    .timeline({
        scrollTrigger: {
            trigger: "#logo-advanced",
            start: "top 80%", // when top of the element hits 20% of viewport
            toggleActions: "play reverse play reverse", // Customize as needed           
          },
    })    
    .from(
        ".logo-advanced.background",
        {
            x: "-100px",
            opacity: "0",
            ease: "power4.out",
            filter: "blur(5px)",
            duration: 1,
            delay: 1,
        }
    )   
    .from(
        ".logo-advanced.circle",
        {
            y: "-100px",
            opacity: "0",
            ease: "power4.out",
            filter: "blur(5px)",
            duration: 1,
            delay: 1,
        },0
    ) 
    .from(
        ".logo-advanced.badge",
        {
            x: "+100px",
            opacity: "0",
            ease: "power4.out",
            filter: "blur(5px)",
            duration: 1,
            delay: 1,
        },0
    )   



    const badges2 = gsap
    .timeline({
        scrollTrigger: {
            trigger: "#logo-advanced",
            start: "top 80%", // when top of the element hits 20% of viewport
            toggleActions: "play reverse play reverse", // Customize as needed           
          },
    })    
    .from(
        ".logo-basic.background",
        {
            x: "-100px",
            opacity: "0",
            ease: "power4.out",
            filter: "blur(5px)",
            duration: 1,
            delay: 2,
        }
    )   
    .from(
        ".logo-basic.circle",
        {
            y: "-100px",
            opacity: "0",
            ease: "power4.out",
            filter: "blur(5px)",
            duration: 1,
            delay: 2,
        },0
    ) 
    .from(
        ".logo-basic.badge",
        {
            x: "+100px",
            opacity: "0",
            ease: "power4.out",
            filter: "blur(5px)",
            duration: 1,
            delay: 2,
        },0
    )   

}