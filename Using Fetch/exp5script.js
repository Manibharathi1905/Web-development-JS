function loadContent(buttonId) {
    const restaurantGrid = document.getElementById('restaurantGrid');
  
    // Clear previous content
    restaurantGrid.innerHTML = '';
  
    // Define mock data for each button
    const mockData = {
      1: [
        { title: 'Restaurant A', rating: 4.5, image: 'https://example.com/restaurantA.jpg' },
        { title: 'Restaurant B', rating: 4.2, image: 'https://example.com/restaurantB.jpg' }
      ],
      2: [
        { title: 'Restaurant C', rating: 4.8, image: 'https://example.com/restaurantC.jpg' },
        { title: 'Restaurant D', rating: 4.1, image: 'https://example.com/restaurantD.jpg' }
      ],
      3: [
        { title: 'Restaurant E', rating: 4.7, image: 'https://example.com/restaurantE.jpg' },
        { title: 'Restaurant F', rating: 4.3, image: 'https://example.com/restaurantF.jpg' }
      ],
      4: [
        { title: 'Restaurant G', rating: 4.6, image: 'https://example.com/restaurantG.jpg' },
        { title: 'Restaurant H', rating: 4.4, image: 'https://example.com/restaurantH.jpg' }
      ]
    };
  
    // Get data based on buttonId
    const restaurants = mockData[buttonId];
  
    // Populate restaurant cards
    restaurants.forEach(restaurant => {
      restaurantGrid.innerHTML += `
        <div class="restaurant-card">
          <img src="${restaurant.image}" alt="${restaurant.title}">
          <div class="restaurant-info">
            <h3>${restaurant.title}</h3>
            <p class="rating">Rating: ${restaurant.rating}</p>
          </div>
        </div>
      `;
    });
  }
  