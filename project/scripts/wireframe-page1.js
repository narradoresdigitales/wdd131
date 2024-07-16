document.addEventListener('DOMContentLoaded', function() {
    // Define your image objects
    const imageObjects = [
        {
            src: 'images/pdf_text.png',
            alt: 'Python library and code to extract text.'
        },
        {
            src: 'images/python_translate.png',
            alt: 'Description of the second image.'
        }
    ];

    // Select all image containers
    const imageContainers = document.querySelectorAll('.image-container');

    // Loop through each image container
    imageContainers.forEach((container, index) => {
        // Create a new image element
        const img = new Image();
        img.src = imageObjects[index].src; // Set the image src from imageObjects
        img.alt = imageObjects[index].alt; // Set the alt text from imageObjects

        // Append the image to the container (initially hidden)
        img.style.display = 'none';
        container.appendChild(img);

        // Event listener for hover
        container.addEventListener('mouseover', function() {
            img.style.display = 'block'; // Display the image on hover
        });

        // Event listener for mouseout
        container.addEventListener('mouseout', function() {
            img.style.display = 'none'; // Hide the image when mouse leaves
        });
    });
});
