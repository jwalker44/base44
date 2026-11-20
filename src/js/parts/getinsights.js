export function getInsights() {
    console.log('getInsights');
    const endpointUrl = 'https://kenaninstitute.unc.edu/wp-json/wp/v2/kenan-insight/?_embed&per_page=24';

    // Make the request
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
            const cards = document.getElementsByClassName('card');
            const cardBody = cards[index].getElementsByClassName('card-body');
            const cardTitle = cardBody[0].getElementsByClassName('card-title');
            const cardText = cardBody[0].getElementsByClassName('card-text');
            const cardImage = cards[index].getElementsByClassName('card-img-top');
            
            //post._embedded['wp:featuredmedia']['0'].source_url

            cardTitle[0].innerHTML = post.title.rendered;
            cardText[0].innerHTML = post._shortCopy;
            cardImage[0].src = post._embedded['wp:featuredmedia']['0'].source_url;

          console.log('Title:', post.title.rendered);
          console.log('Content:', post.content.rendered);
          console.log('Author ID:', post.author);
          console.log('---------------------');
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });    

}