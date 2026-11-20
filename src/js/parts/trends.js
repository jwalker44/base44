export function trends() {
    console.log('trends');

    const trends = gsap
    .timeline({
      scrollTrigger: {                
        trigger: "#landing-trends-contents",
        // scrub: 2,
        // pin: true,        
        start: "top 20%", // when top of div hits center of viewport
        toggleActions: "play reverse play reverse",  
      },
    })
    .to (
      "#trends-title h1",
      {
        y: '0',
        opacity: '1',
        filter: 'blur(0px)',
        duration: 1,
        ease: 'power4.out',
      }
    )
    .to (
        "#trends-title p",
        {
          y: '0',
          opacity: '1',
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power4.out',
        }, 0.25
      )
      .to (
        ".trend", 
        {
            x: '0',
            duration: 1,
            stagger: 0.25,
            ease: 'power4.out',
        }, 0.5
      )


      const eaccontainer4 = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#trends-btn-container",
          // scrub: 2,
          // pin: true,
          // markers: true,
          start: "top 50%",
          // start: "top 10px", // when top of the element hits 20% of viewport
          toggleActions: "play reverse play reverse", // Customize as needed
        },
      })    
      .to (
          '#trends-btn',
          {
              y: '0',
              opacity: '1',
              filter: 'blur(0px)',            
          }
      )      

}