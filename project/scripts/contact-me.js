document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        console.log('Form found, adding submit event listener.');

        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission
            console.log('Form submitted, redirecting to confirmation page.');

            // Perform any form validation or data processing here

            // Redirect to the confirmation page
            window.location.href = 'contact-me-confirmation.html';
        });
    } else {
        console.log('Form not found.');
    }
});
