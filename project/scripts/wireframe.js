document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burgerMenu');
    const navLinks = document.querySelector('.nav-links');

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
});
