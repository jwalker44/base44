export function letter() {
    console.log('letter');

    const letter = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#landing-letter",
        scrub: 1,
        pin: true,
      },
    })
    .to (
      "#letter-title",
      {
        y:0,
        opacity:1,
        filter: "blur(0px)",
        duration: 3,
      }
    )
    .to (
      "#landing-background img",
      {
        filter: "blur(5px)",
        duration: 3,
      },0
    )
    .to (
      "#mail",
      {
        y: "0",
        opacity: 1,
        filter: "blur(0px)",
        duration: 3,
      },0
    )
    .to(
      "#mail-middle",
      {
        y: "-20",
        duration: 3,
      },0
    )
    .to(
      "#mail",
      {
        scaleX: 55,
        scaleY: 55,
        delay: 3,
        duration:10,
      }, 0.5
    )
    .to (
      "#landing-contents",
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)", 
        delay: 3,
        duration:3,
      }, 0.5
    )
    .to (
      "#landing-contents",
      {
        y: "-=100",
        filter: "blur(5px)",
        duration: 1,
      }
    )
    // .to (
    //   "#landing-letter",
    //   {
    //     opacity: 0,
    //     duration: 4,
    //     filter: "blur(5px)", 
    //   }, 10
    // )

  // .to (
  //   "#landing-letter-orange",
  //   {
  //     y: "-=380",
  //     height: "+=400"
  //   },0
  // )
  // .to (
  //   "#landing-letter-blue",
  //   {
  //     y: "-=300",
  //   },0
  // )
  // .to (
  //   "#landing-letter-contents",
  //   {
  //     opacity:1,
  //   },0
  // )

}