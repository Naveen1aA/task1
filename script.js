document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Show success message
    document.getElementById('successMessage').style.display = 'block';

    // Clear form fields
    document.getElementById('contactForm').reset();
});
