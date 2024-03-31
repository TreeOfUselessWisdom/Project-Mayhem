// Function to update ticker content
function updateTicker() {
    // Get current date and time
    var currentDate = new Date();
    var currentTime = currentDate.toLocaleTimeString();

    // Check if geolocation is supported by the browser
    if ("geolocation" in navigator) {
        // Retrieve current location
        navigator.geolocation.getCurrentPosition(
            function(position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                var location = `Location: ${latitude}, ${longitude}`;

                // Update ticker content with date, time, and location
                var ticker = document.getElementById('ticker');
                ticker.textContent = `${currentTime} | ${location}`;
            },
            function(error) {
                // Handle geolocation errors gracefully
                console.error('Error getting location:', error.message);
            }
        );
    } else {
        // Geolocation is not supported
        console.error('Geolocation is not supported by this browser.');
    }
}

// Update ticker content every second
setInterval(updateTicker, 1000);

