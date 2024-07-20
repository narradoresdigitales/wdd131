// select the DOM elements for output

document.addEventListener('DOMContentLoaded', (event) => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textcontent = currentYear;


    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last modified: ${lastModified}`;
});

// Add the year and last modified date
