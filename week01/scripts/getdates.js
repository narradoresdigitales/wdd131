// select the DOM elements for output

document.addEventListener('DOMContentLoaded', (event) => {
    const lastModified = document.lastModified;
    document.getElementById('date-time').textContent = lastModified;
});

