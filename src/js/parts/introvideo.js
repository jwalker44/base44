export function introvideo() {
    console.log('intro video');

    // const playBtn = gsap
    // .fromTo(
    //   ".play-video",
    //   {
    //     y: '-20px',
    //     duration: 2,
    //     ease: "circ.out",
    //   },
    //   {
    //     y: '-5',
    //     duration: 2,
    //     repeat: -1,
    //     yoyo: true,
    //     ease: "circ.in",
    //   }
    // );

    let videoPlayBtns = document.querySelectorAll('.play-video');
    videoPlayBtns.forEach((btn) => {
      btn.addEventListener('click', (event) => {
    
        // Hide parent element safely
        if (event.currentTarget.parentElement) {
            event.currentTarget.parentElement.style.display = "none";
        }
    
        // Find the first iframe (ensure it exists)
        let iframe = event.currentTarget.parentElement.parentElement.getElementsByTagName("iframe")[0]; // Adjust if needed
        if (iframe) {
            const iframeWindow = iframe.contentWindow;
            iframeWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        } else {
          console.log('no iframe');
        }
      });
    })

    
    window.addEventListener("scroll", () => {
      // Get all YouTube iframes
      let iframes = document.querySelectorAll("iframe[src*='youtube.com/embed']");
  
      iframes.forEach((iframe) => {
          if (iframe.contentWindow) {
              iframe.contentWindow.postMessage('{"event": "command", "func": "pauseVideo", "args": ""}', '*');
          }
      });
  });
  
}