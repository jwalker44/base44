window.globalObj = {
    currentElement: 1,
};
var x = 'HW';

export function featured() {
    console.log('featured');

    const fLine = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".line-mask-2",
        start: "top 60%", 
        toggleActions: "play reverse play reverse",
      },
    })
    .to(
        ".line-mask-2",
        {
            width: "305px",
            duration: 0.5,
            delay: 0.5,
            ease: "power1.in",
        }, 0
    )

    const stLetter = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#featured",
        start: "top 60%", 
        toggleActions: "play reverse play reverse",
      },
    })
    .to(
        "#featured-title",
        {
            y: 0,
            opacity:1,
            duration: 1.5,
            ease: "power4.out",
        }, 0
    )
    .from(
        "#carolina-inn",
        {
            y: -300,
            opacity:0,
            duration: 1.5,
            ease: "power4.out",
        }
    )
    .to(
        "#featured-text",
        {
            opacity: 1,
            duration: 1.5,
            ease: "power4.out",
        }, 0.5
    );


    const stIcon = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#content-icon",
        start: "top 80%", 
        scrub: 1,
      },
    })
    .from(
        ".featured-icon:nth-of-type(1)",
        {

            y: -150,
        }, 0
    )
    .from(
        ".featured-icon:nth-of-type(2)",
        {
            y: -100,
            x: -75,
        }, 0
    )
    .from(
        ".featured-icon:nth-of-type(3)",
        {
            y: -100,
            x: 75,
        }, 0
    );



    /*
    var elements = document.getElementsByClassName('event');
    for (var i = 0; i < elements.length; i++) {
        var correctedRow = i+1;
        var dynamicVariableName = 'elementObject' + correctedRow;
        globalObj.currentElement = correctedRow;
        dynamicVariableName = gsap
        .timeline({
          scrollTrigger: {
            trigger: "#row" + correctedRow,
            start: "top 40%", 
            end: "+=200",
            toggleActions: "play reverse play reverse",
          },
          onStart: function () {
            console.log('CORRECTED', x);
                var allRows = document.getElementsByClassName('event');
                //console.log(this);
                var currentIndex = this.vars.scrollTrigger.trigger;
                for (var i = 0; i < allRows.length; i++) {
                    allRows[i].style.zIndex = 1; 
                } 
                console.log('current',currentIndex); 
                var currentElement = document.getElementById(currentIndex.slice(1));
                currentElement.style.zIndex = 5;
            },
        })
        .from(
            "#row" + correctedRow,
            {
                //y: 20,

                duration: 1.5,
                //opacity: 0.2,
                x: -100,
                //scaleX: 0.98,
                //scaleY: 0.98,
                ease: "power1.out",
            }, 0
        );
    }
    */

}