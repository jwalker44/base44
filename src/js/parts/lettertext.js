export function lettertext() {
    console.log('letter text');

    const lettertext = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#letter-text",
        start: "top 30%", // when top of the element hits 20% of viewport
        toggleActions: "play reverse play reverse", // Customize as needed
        // scrub: 1,
        // pin: true,
      },
    })
    .to (
      "#letter-building",
      {
        y: "0",
        opacity: "1",
        filter: "blur(0px)",
        ease: "power1.out",
      }
    )
    .to (
      "#letter-text-contents h3",
      {
        y: "0",
        opacity: "1",
        filter: "blur(0px)",
        ease: "power1.out",
      }
    )
    .to (
        ".letter-text-p",
        {
          y: "0",
          opacity: "1",
          filter: "blur(0px)",
          ease: "power1.in",
        }
      )
      // .to (
      //   "#letter-text",
      //   {
      //     opacity: "0",
      //     delay: 4,
      //   }
      // );


      // const lettertext2 = gsap
      // .timeline({
      //   scrollTrigger: {
      //     trigger: "#letter-text",
      //     start: "bottom 100%", // when top of the element hits 20% of viewport
      //     toggleActions: "play reverse play reverse", // Customize as needed
      //   },
      // })
      // .to (
      //   "#letter-text",
      //   {
      //     opacity: "0",
      //     duration: 0.5,
      //     ease: "power4.out",
      //   }
      // )    
      // .to (
      //   "#landing-letter",
      //   {
      //     opacity: "0",
      //     duration: 0.5,
      //     ease: "power4.out",
      //   }, 0
      // )          
}