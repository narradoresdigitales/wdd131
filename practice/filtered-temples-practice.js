
const burger = document.querySelector('#burgerMenu')
const closeButton = document.querySelector('#closeButton')
const nav = document.querySelector('#menu')

burger.addEventListener('click', () => {
    nav.classList.toggle('open')
    closeButton.classList.toggle('show')
})

closeButton.addEventListener('click', () => {
    nav.classList.toggle('open')
    closeButton.classList.toggle('show')
})

const temples = [
    {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    region: "Africa",
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    region: "North America",
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    region: "North America",
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    region: "Western Pacific",
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    region: "North America",
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    region: "South America",
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    region: "Mexico",
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
    templeName: "Buenos Aires, Argentina",
    location: "Buenos Aires, Argentina",
    dedicated: "1986, January, 17",
    area: 17687,
    region: "South America",
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/buenos-aires-argentina/400x250/buenos-airies-argentina-temple-1009069-wallpaper.jpg"
    },
    {
    templeName: "Córdoba, Argentina",
    location: "Córdoba, Argentina",
    dedicated: "2015, May, 17",
    area: 34369,
    region: "South America",
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cordoba-argentina/400x250/cordoba-argentina-temples-buildings-1436938-wallpaper.jpg"
    }
];

createTempleCard(temples);

// Creating variables for each link
const oldTemplesLink = document.querySelector(".old");
const newTemplesLink = document.querySelector(".new");
const largeTemplesLink = document.querySelector(".large");
const smallTemplesLink = document.querySelector(".small");
const southAmericaLink = document.querySelector(".southAmerica");
const northAmericaLink = document.querySelector(".northAmerica");
const africaLink = document.querySelector(".africa");
const mexicoLink = document.querySelector(".mexico");
const westernPacificLink = document.querySelector(".westernPacific");

// Add event listeners for each variable/link 
southAmericaLink.addEventListener("click", function(event) {
    event.preventDefault();
    createTempleCard(temples.filter(temple => temple.region === "South America"));
    closeMenu();
});

northAmericaLink.addEventListener("click", function(event) {
    event.preventDefault();
    createTempleCard(temples.filter(temple => temple.region === "North America"));
    closeMenu();
});

africaLink.addEventListener("click", function(event) {
    event.preventDefault();
    createTempleCard(temples.filter(temple => temple.region === "Africa"));
    closeMenu();
});

mexicoLink.addEventListener("click", function(event) {
    event.preventDefault();
    createTempleCard(temples.filter(temple => temple.region === "Mexico"));
    closeMenu();
});

westernPacificLink.addEventListener("click", function(event) {
    event.preventDefault();
    createTempleCard(temples.filter(temple => temple.region === "Western Pacific"));
    closeMenu();
});

oldTemplesLink.addEventListener("click", function(event) { 
    event.preventDefault();
    createTempleCard(temples.filter(temple => new Date (temple.dedicated) < new Date ("2000-01-01")));
    closeMenu();
});

newTemplesLink.addEventListener("click", function(event) {
    event.preventDefault(); 
    createTempleCard(temples.filter(temple => new Date (temple.dedicated) >= new Date ("2000-01-01")));
    closeMenu();
});

largeTemplesLink.addEventListener("click", function(event)  {
    event.preventDefault();
    createTempleCard(temples.filter(temple => temple.area > 90000));
    closeMenu();
});

smallTemplesLink.addEventListener("click", function(event)  {
    event.preventDefault();
    createTempleCard(temples.filter(temple => temple.area < 10000));
    closeMenu();
});

function closeMenu() {
    nav.classList.remove('open');
    closeButton.classList.remove('show');
    
}


function createTempleCard(filteredTemples) {
    document.querySelector(".res-grid").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area  = document.createElement("p");
        let region = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        region.innerHTML = `<span class="label">Region:</span> ${temple.region}`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(region);
        card.appendChild(img);

        document.querySelector(".res-grid").appendChild(card);



    });




}