export function scholars() {
    console.log('SCHOLARS');

    const scholarscontainer = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#scholars-container",
        scrub: 2,
        pin: true,
        start: "top top",
        // start: "top 10px", // when top of the element hits 20% of viewport
        // toggleActions: "play reverse play reverse", // Customize as needed
      },
    })
    .to (
        "#scholars-background",
        {
            opacity: '1',
            filter: 'blur(0px)',
        }, 0
    )
    .to (
        "#scholars-image img",
        {
            clipPath: "polygon(100% 0%, 0% 20%, 0% 90%, 100% 70%)",
            delay: 2,
        },0
    )
    .to(
        "#scholars-title h1",
        {
            y: '0',
            opacity: '1',
            filter: 'blur(0px)',
            delay: 0.25,
            ease: 'power4.out',
        },0
    )
    .to(
        "#scholars-title p",
        {
            y: '0',
            opacity: '1',
            filter: 'blur(0px)',
            delay: 0.45,
            stagger: 0.5,
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
        "#scholars-image img",
        {
            clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
            duration: 5,
        }
    )  


    // const timelines = {};
    // document.querySelectorAll('.prow').forEach((row, index) => {
    //     let rowID = row.id;
    //     const timelineName = `timeline_${index}`;
    //     timelines[timelineName] = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: `#${rowID}`, // Use the specific container as the trigger
    //             start: "top 30%", // Adjust as needed
    //             toggleActions: "play reverse play reverse", // Customize as needed
    //         }
    //     })
    //     .to( `#${rowID} .card` , 
    //     {
    //         opacity: 1,
    //         stagger: 0.15,
    //         y: '0',
    //         ease: "power4.out",
    //         filter: 'blur(0px)',
    //     });
    //     ScrollTrigger.refresh();
    // });    



    const scholarscontainer2 = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#scholars-content",
        start: "top 40%", // when top of the element hits 20% of viewport
        toggleActions: "play reverse play reverse", // Customize as needed
      },
    })    
    .to (
        "#scholars-content .left p", 
        {
            y: '0',
            opacity: '1',
            filter: 'blur(0px)',
            ease: 'power4.out',      
            stagger: 0.25,      
        }
    )
    .to (
        "#scholars-content .button",
        {
            y: '0',
            opacity: '1',
            filter: 'blur(0px)',
            ease: 'power4.out',            
            stagger: 0.25,
        }, 0.15
    )

}
