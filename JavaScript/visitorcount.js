
    // Check if the visitor count is stored in localStorage
    if(localStorage.getItem('visitorCount')) {
        // If it exists, retrieve the count and update the display
        let count = parseInt(localStorage.getItem('visitorCount'));
        document.getElementById('count').textContent = count;
    } else {
        // If it doesn't exist, initialize the count to 0
        localStorage.setItem('visitorCount', 0);
    }

    // Increment the count and update the display
    let count = parseInt(localStorage.getItem('visitorCount')) + 1;
    localStorage.setItem('visitorCount', count);
    document.getElementById('count').textContent = count;

