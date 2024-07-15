//Typing text
const typingText = document.querySelector('.typing-text');
const message = "I have a passion for web development and enjoy working with HTML, CSS, and JavaScript. Explore my projects to see what I've been working on recently!";
let index = 0;
const typingSpeed = 50; // Adjust typing speed as needed

function typeEffect() {
    if (index < message.length) {
        typingText.textContent += message.charAt(index);
        index++;
        setTimeout(typeEffect, typingSpeed);
    }
}

// Start typing effect when content is loaded
document.addEventListener('DOMContentLoaded', () => {
    typeEffect();
});
  