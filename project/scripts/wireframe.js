document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burgerMenu');
    const navLinks = document.querySelector('.nav-links');
    const modal = document.getElementById('myModal');
    const modalBody = document.querySelector('.modal-body');
    const closeBtn = document.querySelector('.closeBtn');
    const cards = document.querySelectorAll('.card');

    if (burgerMenu) {
        burgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    } else {
        console.error('Burger menu element not found.');
    }

    // Add the year and last modified date
    const currentYear = document.getElementById('currentYear');
    const lastModified = document.getElementById('lastModified');
    
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    } else {
        console.error('Current year element not found.');
    }

    if (lastModified) {
        lastModified.textContent = document.lastModified;
    } else {
        console.error('Last modified element not found.');
    }

    // Function to open modal with content
    function openModal(content) {
        modalBody.innerHTML = content;
        modal.style.display = 'block';
    }

    // Function to close modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Event listeners for opening modals on card click
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const detailsHidden = card.querySelector('.details-hidden');
            if (detailsHidden) {
                openModal(detailsHidden.innerHTML);
            } else {
                console.error('Details hidden element not found in card.');
            }
        });
    });

    // Event listener for closing modal when close button is clicked
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            closeModal();
        });
    } else {
        console.error('Close button element not found.');
    }

    // Event listener for closing modal when clicking outside of modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});
