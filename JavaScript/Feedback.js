document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedbackForm');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      if (form.checkValidity()) {
        // Form is valid, you can submit it here
        console.log('Form submitted successfully!');
        // For example, you can send the form data to a server using fetch API
        // Replace the URL with your actual endpoint
        fetch('https://example.com/submit-feedback', {
          method: 'POST',
          body: new FormData(form)
        })
        .then(response => response.json())
        .then(data => {
          console.log('Server response:', data);
          // Optionally, you can show a success message to the user
          alert('Feedback submitted successfully!');
          // Reset the form after submission
          form.reset();
        })
        .catch(error => {
          console.error('Error:', error);
          // Show an error message if something goes wrong
          alert('An error occurred while submitting feedback. Please try again later.');
        });
      } else {
        // Form is invalid, prevent submission and display validation errors
        form.reportValidity();
      }
    });
  });