document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('feedbackForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (form.checkValidity()) {
      // Form is valid, you can show the success message here
      console.log('Form submitted successfully!');
      // Show a success message to the user
      alert('Thank you for your feedback! Your feedback has been submitted successfully.');
      // Reset the form after submission
      form.reset();
    } else {
      // Form is invalid, prevent submission and display validation errors
      form.reportValidity();
    }
  });
});
