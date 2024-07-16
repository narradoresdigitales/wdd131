// Define your image objects
const imageObjects = [
    {
        src: 'images/conda_activate.png',
        alt: 'Activate your conda environment.'
    },
    {
        src: 'images/cd_filepath.png',
        alt: 'Select working directory.'
    },
    {
        src: 'images/whisper_running.png',
        alt: 'whisper.ai workflow'
    },
    {
        src: 'images/whisper_transcribe_complete.png',
        alt: 'whisper workflow complete.'
    }
];

// Preload images when the page loads
const images = [];
imageObjects.forEach((imgObj) => {
    const img = new Image();
    img.src = imgObj.src;
    images.push(img);
});

// Select all image containers
const imageContainers = document.querySelectorAll('.image-container');

// Function to display the image and show instruction on hover
function displayImage(container, imgObj) {
    // Find the corresponding image object index
    const index = imageObjects.findIndex(obj => obj.src === imgObj.src);

    // Set the background image of the container
    container.style.backgroundImage = `url(${images[index].src})`;
    container.style.backgroundSize = 'cover';
    container.style.backgroundPosition = 'center';

    // Show the hover instruction
    const hoverInstruction = container.nextElementSibling;
    hoverInstruction.classList.remove('hidden');
}

// Function to reset the container and hide instruction on mouseout
function resetContainer(container) {
    container.style.backgroundImage = 'none';

    // Hide the hover instruction
    const hoverInstruction = container.nextElementSibling;
    hoverInstruction.classList.add('hidden');
}

// Add event listeners for hover on each image container
imageContainers.forEach((container, index) => {
    container.addEventListener('mouseover', function() {
        displayImage(container, imageObjects[index]);
    });

    container.addEventListener('mouseout', function() {
        resetContainer(container);
    });
});

function displayImage(container, imgObj) {
    // Find the corresponding image object index
    const index = imageObjects.findIndex(obj => obj.src === imgObj.src);

    // Set the background image of the container
    container.style.backgroundImage = `url(${images[index].src})`;
    container.style.backgroundSize = 'contain'; // Adjust to 'cover' if needed
    container.style.backgroundPosition = 'center';
    container.style.backgroundRepeat = 'no-repeat';

    // Show the hover instruction
    const hoverInstruction = container.nextElementSibling;
    hoverInstruction.classList.remove('hidden');
}
