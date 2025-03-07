const restaurantImages = {
  'On The Rocks Restobar': {
    images: ['images/morn1.jpg', 'images/morn4.jpg', 'images/morn3.jpg'],
    amount: "$20",
    rating: 4.2
  },
  'Citrus Cafe': {
    images: ['images/restaurant2_1.jpg', 'images/restaurant2_2.jpg', 'images/restaurant2_3.jpg'],
    amount: "$15",
    rating: 4.1
  },
  'Treat': {
    images: ['images/restaurant3_1.jpg', 'images/restaurant3_2.jpg', 'images/restaurant3_3.jpg'],
    amount: "$25",
    rating: 4.3
  },
  'Hide in Heaven': {
    images: ['images/restaurant4_1.jpg', 'images/restaurant4_2.jpg', 'images/restaurant4_3.jpg'],
    amount: "$30",
    rating: 4.4
  },
};

function displayAdditionalImages(restaurantName) {
  const data = restaurantImages[restaurantName];
  const additionalImagesContainer = document.getElementById('additional-images');

  // Clear previous content
  additionalImagesContainer.innerHTML = `<h2>More images of ${restaurantName}</h2>`;
  additionalImagesContainer.innerHTML += `<p>Average Amount: ${data.amount}</p>`;
  additionalImagesContainer.innerHTML += `<p>Rating: ${data.rating}</p>`;

  data.images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image;
    imgElement.alt = `${restaurantName} image`;
    imgElement.style.width = '150px';
    imgElement.style.margin = '10px';
    imgElement.style.border = '1px solid #ccc';
    imgElement.style.borderRadius = '5px';
    additionalImagesContainer.appendChild(imgElement);
  });
}

// Adding hover effect and click event to all restaurant cards
const restaurantCards = document.querySelectorAll('.restaurant-card');

restaurantCards.forEach(card => {
  const img = card.querySelector('img');

  // Adding hover effect
  card.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.1)';
    img.style.transition = 'transform 0.3s ease-in-out';
  });

  card.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
  });

  // Click event to fetch and display additional images
  card.addEventListener('click', () => {
    const restaurantName = card.getAttribute('data-name');
    displayAdditionalImages(restaurantName);
  });
});
