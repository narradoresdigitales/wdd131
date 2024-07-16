// Define your image object
const imageObject = {
    src: 'images/project2_image.png', // Update with the path to your Project 2 image
    alt: 'Responsive web design example.'
};

// Select the image container and the hover instruction
const imageContainer = document.querySelector('.image-container');
const hoverInstruction = document.querySelector('.hover-instruction');

// Function to load the image
function loadImage() {
    // Create a new image element
    const img = new Image();
    img.src = imageObject.src; // Set the image source
    img.alt = imageObject.alt; // Set the image alt text

    // Append the image to the image container
    imageContainer.innerHTML = ''; // Clear previous content
    imageContainer.appendChild(img);

    // Hide the hover instruction by adding a CSS class
    hoverInstruction.classList.add('hidden');
}

// Function to unload the image
function unloadImage() {
    // Clear the image container
    imageContainer.innerHTML = '';

    // Show the hover instruction by removing the CSS class
    hoverInstruction.classList.remove('hidden');
}

// Event listeners for hover
imageContainer.addEventListener('mouseover', loadImage);
imageContainer.addEventListener('mouseout', unloadImage);
