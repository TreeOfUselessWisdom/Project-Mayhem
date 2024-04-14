// Define product data
const products = [
    { name: "Ceiling Light Fixture", category: "ceiling-lights", brand: "radiant-ray", price: "5,000 PKR", image: "Products/Fabric Shade Semi-Flush Mount Ceiling Light.jpg", specifications: "Illuminate your home with this Semi-Flush Mount Ceiling Fabric Shade from Radiant Ray™ with Magnolia. Featuring a fabric drum shade and iron body in solid brass finish, it adds modern style to any space.", discountPrice: null },
    { name: "Wall Sconce", category: "wall-lights", brand: "glow-up-decor", price: "6,000 PKR", image: "Products/Wall Sconce.jpg", specifications: "The Novogratz x Globe Linus Wall Sconce features an exposed bulb, black finish, and oval backplate, offering a unique style. Versatile for any interior, it's perfect for bedside reading or living room ambiance, with plug-in or hardwired options.", discountPrice: null },
    { name: "Table Lamp", category: "lamps", brand: "glow-galore", price: "8,000 PKR", image: "Products/Faux Wood Mini Table Lamp White - Threshold.jpg", specifications: "Brighten your space with the Faux Wood Mini Table Lamp from Glow Galore™. Featuring an off-white faux wood base and white tapered drum shade, it's perfect for side tables or nightstands.", discountPrice: "10,000 PKR" },
    { name: "Outdoor Lantern", category: "outdoor-lights", brand: "illuminate-co", price: "7,000 PKR", image: "Products/Outdoor Lantern.jpg", specifications: "Upgrade your decor with this elegant rectangular candle lantern. Its starry cutouts create a cosmic effect, enhanced by candlelight. Easy to open and sturdy for indoor or outdoor use. Available in black or white.", discountPrice: null },
    { name: "LED Spotlight", category: "led-lights", brand: "radiant-ray", price: "3,000 PKR", image: "Products/LED Spotlight.jpg", specifications: "These plastic LED outdoor lights, measuring 3.92 H x 3.46 W x 7.41 D and weighing 1 pound each, emit 30 lumens at 3000 Kelvin. They feature automatic operation and can be staked or hung, with weather-resistant qualities. Powered by solar energy, each light includes 2 AA lithium-ion batteries, with a 1-year limited warranty.", discountPrice: null },
    { name: "Smart Bulb", category: "led-lights", brand: "glow-galore", price: "2,500 PKR", image: "Products/Smart Bulb.jpg", specifications: "This LED light bulb, with a standard Edison Medium Screw Base E26, produces 1100 lumens of clear light at 2700 Kelvin. Energy Star Certified, it has a bulb life of 22 years, equivalent to a 75-watt output, and is dimmable with a full range of settings.", discountPrice: "3,000 PKR" },
    { name: "Tripod Floor Lamp", category: "lamps", brand: "glow-galore", price: "7,000 PKR", image: "Products/Ellis Tripod Floor Lamp Brass - Threshold.jpg", specifications: "Illuminate your space with the Ellis Tripod Floor Lamp from Glow Galore™. Featuring a tripod-leg base and a white drum shade, it's finished in gold-tone brass for a stylish touch. Perfect for your seating area or living room.", discountPrice: null },
    { name: "Globe Chandelier", category: "ceiling-lights", brand: "brilliant-design", price: "1,000 PKR", image: "Products/Frosted Glass Geneva Globe Chandelier Brass.jpg", specifications: "Brighten your space with Brilliant Design™ Frosted Glass Geneva Globe Chandelier. Featuring a brass finish and six frosted glass globes, it comes with dimmable LED bulbs for customizable lighting.", discountPrice: "15,000 PKR" },
    { name: "Ceiling Light Semi Flush", category: "ceiling-lights", brand: "radiant-ray", price: "6,000 PKR", image: "Products/Ceiling Light Fixture.jpg", specifications: "Upgrade your home with this set of two semi-flushmount ceiling lights, featuring earthy burlap shades and bronze canopies, ideal for rustic or country-cottage style settings.", discountPrice: null }


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