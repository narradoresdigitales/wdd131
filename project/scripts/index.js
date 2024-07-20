// Function to generate a personalized greeting
function generateGreeting(userName) {
    if (userName) {
        return `Hello, ${userName}! Please remember to contact me with any comments or questions. I look forward to hearing from you!.`;
    } else {
        return 'Hello! Welcome to my website.';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Example user (replace with actual user data or input)
    let user = {
        name: 'kind Visitor'
    };

    // Generate greeting message
    let greetingMessage = generateGreeting(user.name);

    // Display greeting message on the webpage
    let greetingContainer = document.getElementById('greetingContainer');
    greetingContainer.textContent = greetingMessage;
});









/// 


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

//

//

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

// Visit Count // 

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve visit count from local storage
    let visitCount = localStorage.getItem('visitCount');

    // Initialize visit count if it doesn't exist in local storage
    if (!visitCount) {
        visitCount = 0;
    } else {
        visitCount = parseInt(visitCount); // Parse stored count as integer
    }

    // Update visit count in the span elements with class 'visit-count'
    const visitCountElements = document.querySelectorAll('.visit-count');
    visitCountElements.forEach(element => {
        element.textContent = visitCount;
    });

    // Increment visit count and update local storage on page load
    visitCount++;
    localStorage.setItem('visitCount', visitCount.toString());
});



