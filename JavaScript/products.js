$(document).ready(function() {
    const products = [
      { name: "Product 1", category: "Ceiling Lights", brand: "RadiantRay", price: "$50", image: "image1.jpg" },
      { name: "Product 2", category: "Wall Lights", brand: "GlowUpDecor", price: "$40", image: "image2.jpg" },
      // more products...
    ];

    // Function to display products
    function displayProducts(productList) {
      $('#productList').empty(); // Clear existing products
      productList.forEach(product => {
        $('#productList').append(`
          <div class="col-md-4 mb-3">
            <div class="card">
              <img src="${product.image}" class="card-img-top" alt="${product.name}">
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.category}</p>
                <p class="card-text">Brand: ${product.brand}</p>
                <p class="card-text">Price: ${product.price}</p>
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
});
