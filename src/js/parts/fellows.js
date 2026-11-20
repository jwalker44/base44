export function fellows() {
    console.log('fellows');

    const fellowsX = gsap
    .timeline({
      scrollTrigger: {                
        trigger: "#landing-fellows-contents",
        scrub: 2,
        pin: true,        
        start: "top top", // when top of div hits center of viewport
      },
    })
    .to (
      "#fellows-title h1",
      {
        y: '0',
        opacity: '1',
        filter: 'blur(0px)',
        duration: 1,
        ease: 'power4.out',
      }
    )
    .to(
      "#fellows-title p",
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
    ".fellow",
    {
        y: '0',
        opacity: '1',
        filter: 'blur(0px)',
        duration: 1,
        stagger: 0.25,
        ease: 'power4.out',
    }
  )  


  const timelines = {};
  document.querySelectorAll('.fellowscards').forEach((row, index) => {
      let rowID = row.id;
      const timelineName = `timeline_${index}`;
      timelines[timelineName] = gsap.timeline({
          scrollTrigger: {
              trigger: `#${rowID}`, // Use the specific container as the trigger
              start: "top 30%", // Adjust as needed
              toggleActions: "play reverse play reverse", // Customize as needed
          }
      })
      .to( `#${rowID} .card` , 
      {
          opacity: 1,
          stagger: 0.15,
          y: '0',
          ease: "power4.out",
          filter: 'blur(0px)',
      });
      ScrollTrigger.refresh();
  });    
  document.querySelectorAll('.fellowscards2').forEach((row, index) => {
      let rowID = row.id;
      const timelineName = `timeline_${index}`;
      timelines[timelineName] = gsap.timeline({
          scrollTrigger: {
              trigger: `#${rowID}`, // Use the specific container as the trigger
              start: "top 30%", // Adjust as needed
              toggleActions: "play reverse play reverse", // Customize as needed
          }
      })
      .to( `#${rowID} .card` , 
      {
          opacity: 1,
          stagger: 0.15,
          y: '0',
          ease: "power4.out",
          filter: 'blur(0px)',
      });
      ScrollTrigger.refresh();
  });    


  
  
  const fellowsThanks = gsap
  .timeline({
    scrollTrigger: {                
      trigger: "#thanks",
      start: "top 90%", // when top of div hits center of viewport
      toggleActions: "play reverse play reverse", // Customize as needed
    },
  })  
  .to (
    "#thanks",
    {
      y: '0',
      opacity: '1',
      filter: 'blur(0px)',
      duration: 1,
      ease: 'power4.out',
    }
  )





}