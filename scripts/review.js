
document.addEventListener('DOMContentLoaded', () => {
    // Check if the counter exists in localStorage
    let reviewCounter = localStorage.getItem('reviewCounter');
    
    // If it doesn't exist or is not a number, initialize it to 0
    if (isNaN(reviewCounter) || reviewCounter === null) {
        reviewCounter = 0;
    } else {
        // Convert the string to an integer
        reviewCounter = parseInt(reviewCounter, 10);
    }
    
    // Increment the counter
    reviewCounter += 1;
    
    // Save the updated counter back to localStorage
    localStorage.setItem('reviewCounter', reviewCounter);
    
    // Display the counter value to the user
    document.getElementById('reviewCount').textContent = reviewCounter;
});







// document.addEventListener('DOMContentLoaded', () => {
//     // Check if the counter exists in localStorage
//     let reviewCounter = localStorage.getItem('reviewCounter');
    
//     // If it doesn't exist, initialize it to 0
//     if (!reviewCounter) {
//         reviewCounter = 0;
//     }
    
//     // Increment the counter
//     reviewCounter = parseInt(reviewCounter) + 1;
    
//     // Save the updated counter back to localStorage
//     localStorage.setItem('reviewCounter', reviewCounter);
    
//     // Display the counter value to the user
//     document.getElementById('reviewCount').textContent = reviewCounter;
// });