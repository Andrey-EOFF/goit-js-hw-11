
fetch('https://pixabay.com/api/?key=34809960-e72b1bf02b7f952b124a41dc8&q=dog')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.log(error));

  
