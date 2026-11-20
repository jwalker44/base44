export function newgrandchallenge() {
    console.log('2025 grandchallenge');

    const newgrandchallengecontainer = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#newgrandchallenge-container",
        scrub: 2,
        pin: true,
        start: "top top",
        // start: "top 10px", // when top of the element hits 20% of viewport
        // toggleActions: "play reverse play reverse", // Customize as needed
      },
    })
    .to (
        "#newgrandchallenge-background",
        {
            opacity: '1',
            filter: 'blur(0px)',
            duration: 4,
        }, 0
    )
    .to (
        "#newgrandchallenge-image img",
        {
            clipPath: "polygon(100% 0%, 0% 20%, 0% 90%, 100% 70%)",
            delay: 2,
            duration: 2,
        },0
    )
    .to(
        "#newgrandchallenge-title h1",
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
        "#newgrandchallenge-title p",
        {
            y: '0',
            opacity: '1',
            filter: 'blur(0px)',
            duration: 0.5,
            delay: 0.45,
            ease: 'power4.out',
            stagger: 0.25,
        },0
    )    
    .to(
        "#newgrandchallenge-title h3",
        {
            y: '0',
            opacity: '1',
            filter: 'blur(0px)',
            duration: 0.35,
            ease: 'power4.out',
        },0
    )
    .to(
        "#newgrandchallenge-title h2",
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
        "#newgrandchallenge-image img",
        {
            clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
            duration: 5,
        }
    )  
    .to(
        "#newgrandchallenge-title h3",
        {
            opacity: '0',
            filter: 'blur(5px)',
            duration: 4,
            ease: 'power4.out',
            y: '-200',
        },4
    )
    .to(
        "#newgrandchallenge-title p",
        {
            opacity: '0',
            filter: 'blur(5px)',
            duration: 4,
            ease: 'power4.out',
            y: '-300',
        },4
    )
}
