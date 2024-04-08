// Define product data
const products = [
    { name: "Ceiling Light Fixture", category: "ceiling-lights", brand: "radiant-ray", price: "5,000 PKR", image: "Products/Fabric Shade Semi-Flush Mount Ceiling Light.jpg", specifications: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", discountPrice: null },
    { name: "Wall Sconce", category: "wall-lights", brand: "glow-up-decor", price: "6,000 PKR", image: "Products/Wall Sconce.jpg", specifications: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", discountPrice: null },
    { name: "Table Lamp", category: "lamps", brand: "glow-galore", price: "8,000 PKR", image: "Products/Faux Wood Mini Table Lamp White - Threshold.jpg", specifications: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", discountPrice: "10,000 PKR" },
    { name: "Outdoor Lantern", category: "outdoor-lights", brand: "illuminate-co", price: "7,000 PKR", image: "Products/Outdoor Lantern.jpg", specifications: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", discountPrice: null },
    { name: "LED Spotlight", category: "led-lights", brand: "radiant-ray", price: "3,000 PKR", image: "Products/LED Spotlight.jpg", specifications: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", discountPrice: null },
    { name: "Smart Bulb", category: "led-lights", brand: "glow-galore", price: "2,500 PKR", image: "Products/Smart Bulb.jpg", specifications: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", discountPrice: "3,000 PKR" }
    
  ];

  // Function to display products
  function displayProducts(productList) {
    $('#productList').empty(); // Clear existing products
    productList.forEach(product => {
      $('#productList').append(`
        <div class="col-md-4 mb-3">
          <div class="product-card">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.specifications}</p>
              <p class="price">${product.price} ${product.discountPrice ? `<span class="discount-price">${product.discountPrice}</span>` : ''}</p>
              ${product.discountPrice ? `<span class="sale-icon">Sale</span>` : ''}
            </div>
          </div>
        </div>
      `);   
    });
  }

  // Initial display of all products
  displayProducts(products);

  // Search functionality
  $('#searchInput').on('input', function() {
    const searchTerm = $(this).val().toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    displayProducts(filteredProducts);
  });

  // Filter by category
  $('#categoryFilter').change(function() {
    const category = $(this).find(':selected').data('category');
    if (category === undefined) {
      displayProducts(products);
    } else {
      const filteredProducts = products.filter(product => product.category.toLowerCase().includes(category));
      displayProducts(filteredProducts);
    }
  });

  // Filter by brand
  $('#brandFilter').change(function() {
    const brand = $(this).find(':selected').data('brand');
    if (brand === undefined) {
      displayProducts(products);
    } else {
      const filteredProducts = products.filter(product => product.brand.toLowerCase().includes(brand));
      displayProducts(filteredProducts);
    }
  });