const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");

const currentyear = document.querySelector("#currentyear");
document.getElementById("lastModified").innerHTML = document.lastModified;

const today = new Date();

currentyear.innerHTML = today.getFullYear();

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open")

    if (navigation.classList.contains("open")) {
        menuButton.textContent = "X";
        menuButton.setAttribute("aria-label", "Close navigation menu")
    } else {
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Open navigation menu");
    }
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "St. George Utah",
        location: "St. George, Utah",
        dedicated: "1877, April, 8",
        area: 143969,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/st.-george-utah-temple/st.-george-utah-temple-40435-main.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah",
        dedicated: "1893, April, 24",
        area: 382207,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
    },
    {
        templeName: "Gilbert Arizona",
        location: "Gilbert, Arizona",
        dedicated: "2014, March, 2",
        area: 85326,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/gilbert-arizona-temple/gilbert-arizona-temple-3802-main.jpg"
    },
];

const templeContainer = document.querySelector(".container")

function displayTemples(temples) {
    templeContainer.innerHTML = "";

    temples.forEach((temple) => {
        const card = document.createElement("section");
        const name = document.createElement("h2");
        const location = document.createElement("p");
        const dedicated = document.createElement("p");
        const area = document.createElement("p");
        const image = document.createElement("img");

        name.textContent = temple.templeName;
        location.textContent = `Location: ${temple.location}`;
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;
        area.textContent = `Area: ${temple.area} sq ft`;

        image.src = temple.imageUrl;
        image.alt = `${temple.templeName} Temple`;
        image.loading = "lazy"
        image.width = 400;
        image.height = 250;

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        templeContainer.appendChild(card);
    });
}

displayTemples(temples);

function filterTemples(filterfunction) {
    displayTemples(temples.filter(filterfunction));
}

document.querySelector("#home").addEventListener("click", (e) => {
    e.preventDefault();
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", (e) => {
    e.preventDefault();
    filterTemples(temple => parseInt(temple.dedicated) < 1900);
});

document.querySelector("#new").addEventListener("click", (e) => {
    e.preventDefault();
    filterTemples(temple => parseInt(temple.dedicated) > 2000);
});

document.querySelector("#large").addEventListener("click", (e) => {
    e.preventDefault();
    filterTemples(temple => temple.area > 90000);
});

document.querySelector("#small").addEventListener("click", (e) => {
    e.preventDefault();
    filterTemples(temple => temple.area < 10000);
});