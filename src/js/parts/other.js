export function other() {
    console.log('other');

    const other = gsap
    .timeline({
        scrollTrigger: {
            trigger: "#landing-other",
            start: "top 50%", // when top of the element hits 20% of viewport
            toggleActions: "play reverse play reverse", // Customize as needed           
          },
    })
    .to(
        ".other-text", 
        {
            y:"0px",
            opacity: "1",
            ease: "power4.out",
            filter: "blur(0px)",
            duration: 1,
        }
    )
    .to(
        ".other-panel", 
        {
            y:"0px",
            opacity: "1",
            ease: "power4.out",
            filter: "blur(0px)",
            duration: 1,
            stagger: 0.5,
        }
    )
    .to(
        ".other-background", 
        {
            y:"0px",
            opacity: "1",
            ease: "power4.out",
            filter: "blur(2px)",
            duration: 1,
            stagger: 0.5,
        }, 1.5
    )
    .to(
        ".other-icon", 
        {
            y:"0px",
            opacity: "1",
            ease: "power4.out",
            duration: 1,
            stagger: 0.5,
        }, 1.5
    )

}