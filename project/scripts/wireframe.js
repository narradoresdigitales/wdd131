document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burgerMenu');
    const navLinks = document.querySelector('.nav-links');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close-btn');
    const modalBody = document.getElementById('modal-body');

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

    if (modal && modalBody) {
        // Open modal with card content
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', () => {
                const content = card.innerHTML;
                modalBody.innerHTML = content;
                modal.style.display = 'block';
            });
        });

        if (closeBtn) {
            // Close modal
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        } else {
            console.error('Close button element not found.');
        }

        // Close modal when clicking outside of the modal content
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    } else {
        if (!modal) console.error('Modal element not found.');
        if (!modalBody) console.error('Modal body element not found.');
    }
});

//Display summary for 'About Me' card
document.addEventListener('DOMContentLoaded', () => {
    const aboutCard = document.getElementById('aboutCard');
    const modal = document.getElementById('myModal');
    const modalBody = document.querySelector('.modal-body');
    const detailsHidden = document.querySelector('.details-hidden'); // Adjust selector based on your HTML structure

    if (aboutCard && modal && modalBody && detailsHidden) {
        // Update modal content with details-hidden HTML
        modalBody.innerHTML = detailsHidden.innerHTML;

        // Open modal when clicking on the About Me card
        aboutCard.addEventListener('click', () => {
            modal.style.display = 'block';
        });

        // Close modal when clicking on close button
        const closeBtn = modal.querySelector('.close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        } else {
            console.error('Close button element not found.');
        }

        // Close modal when clicking outside of modal content
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    } else {
        console.error('Elements not found.');
    }
});

