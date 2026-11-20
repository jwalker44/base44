export function getContent() {
    console.log('getContent');


    const endpointUrl = 'https://kenaninstitute.unc.edu/wp-json/custom/v1/yearbook24';

    // GRAND CHALLENGE
    fetch(endpointUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response body as JSON
      })
      .then(data => {
        // Process the data
        data.forEach((post, index) => {
            const cards = document.getElementsByClassName('card event');
            if (cards.length) {
              const cardBody = cards[index].getElementsByClassName('card-body');
              const cardTitle = cardBody[0].getElementsByClassName('card-title');
              const cardText = cardBody[0].getElementsByClassName('card-text');
              const cardImage = cards[index].getElementsByClassName('card-img-top');
              const cardAction = cards[index].getElementsByClassName('card-action');
              
              //post._embedded['wp:featuredmedia']['0'].source_url

              cardTitle[0].innerHTML = post.post_title;
              cardText[0].innerHTML = post.short_copy;
              cardImage[0].src = post.image_url;
              cardImage[0].alt = post.post_title;
              cardAction[0].innerHTML = "Read More";
              cardAction[0].setAttribute('href', post.link);
              cardAction[0].classList.remove('placeholder');
              

              console.log('Title:', post.post_title);
              console.log('Content:', post.short_copy);
              //console.log('Author ID:', post.author);
              console.log('---------------------');
            } 
        });

        // ANIMATE CARDS fix me
        const timelines = {};
        document.querySelectorAll('.gcrow').forEach((row, index) => {
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


      
      
      })
     .catch(error => {
        console.error('Error:', error);
      });  
      
     
      
// FRONTIERS
const endpointUrlF = 'https://kenaninstitute.unc.edu/wp-json/custom/v1/ar24frontiers';
// Make the request
fetch(endpointUrlF)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the response body as JSON
  })
  .then(data => {
    // Process the data
    data.forEach((post, index) => {
        const cards = document.getElementsByClassName('card frontiers');
        if (cards.length) {
          const cardBody = cards[index].getElementsByClassName('card-body');
          const cardTitle = cardBody[0].getElementsByClassName('card-title');
          const cardText = cardBody[0].getElementsByClassName('card-text');
          const cardImage = cards[index].getElementsByClassName('card-img-top');
          const cardAction = cards[index].getElementsByClassName('card-action');
          
          //post._embedded['wp:featuredmedia']['0'].source_url

          cardTitle[0].innerHTML = post.post_title;
          cardText[0].innerHTML = post.short_copy;
          cardImage[0].src = post.image_url;
          cardImage[0].alt = post.post_title;
          cardAction[0].innerHTML = "Read More";
          cardAction[0].setAttribute('href', post.link);
          cardAction[0].classList.remove('placeholder');
          

          console.log('Title:', post.post_title);
          console.log('Content:', post.short_copy);
          //console.log('Author ID:', post.author);
          console.log('---------------------');
        } 
        
    });
    
    // ANIMATE CARDS fix me
    const ftimelines = {};
    document.querySelectorAll('.frow').forEach((row, index) => {
        let rowID = row.id;
        const timelineName = `ftimeline_${index}`;
        ftimelines[timelineName] = gsap.timeline({
            scrollTrigger: {
                trigger: `#${rowID}`, // Use the specific container as the trigger
                start: "top 30%", // Adjust as needed
                toggleActions: "play reverse play reverse", // Customize as needed
            }
        })
        .to( `#${rowID} .card` , 
        {
            opacity: 1,
            stagger: 0.25,
            y: '0',
            ease: "power2.out",
            filter: 'blur(0px)',
        });
        ScrollTrigger.refresh();
    });
  });





// FRONTIERS
const endpointUrlFe = 'https://kenaninstitute.unc.edu/wp-json/custom/v1/ar24frontiers';
// Make the request
fetch(endpointUrlF)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the response body as JSON
  })
  .then(data => {
    // Process the data
    data.forEach((post, index) => {
        const cards = document.getElementsByClassName('card fellows');
        if (cards.length) {
          const cardBody = cards[index].getElementsByClassName('card-body');
          const cardTitle = cardBody[0].getElementsByClassName('card-title');
          const cardText = cardBody[0].getElementsByClassName('card-text');
          const cardImage = cards[index].getElementsByClassName('card-img-top');
          const cardAction = cards[index].getElementsByClassName('card-action');
          
          //post._embedded['wp:featuredmedia']['0'].source_url

          cardTitle[0].innerHTML = post.post_title;
          cardText[0].innerHTML = post.short_copy;
          cardImage[0].src = post.image_url;
          cardImage[0].alt = post.post_title;
          cardAction[0].innerHTML = "Read More";
          cardAction[0].setAttribute('href', post.link);
          cardAction[0].classList.remove('placeholder');
          

          console.log('Title:', post.post_title);
          console.log('Content:', post.short_copy);
          //console.log('Author ID:', post.author);
          console.log('---------------------');
        } 
        
    });
    
    // ANIMATE CARDS fix me
    const ftimelines = {};
    document.querySelectorAll('.ferow').forEach((row, index) => {
        let rowID = row.id;
        const timelineName = `fetimeline_${index}`;
        ftimelines[timelineName] = gsap.timeline({
            scrollTrigger: {
                trigger: `#${rowID}`, // Use the specific container as the trigger
                start: "top 30%", // Adjust as needed
                toggleActions: "play reverse play reverse", // Customize as needed
            }
        })
        .to( `#${rowID} .card` , 
        {
            opacity: 1,
            stagger: 0.25,
            y: '0',
            ease: "power2.out",
            filter: 'blur(0px)',
        });
        ScrollTrigger.refresh();

    });
  });


}