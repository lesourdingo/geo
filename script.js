const main = document.getElementById("main");
const submit = document.getElementById("submit");
const search = document.getElementById("search");

// Mount country
fetch("./country.json")
    .then((response) => response.json())
    .then((data) => {
        main.innerHTML = data
            .map(
                (country) => `
    <div class="card">
        <div class="flag"><img src="${country.flag}" alt="${country.name}"></div>
        <div class="card-info">
            <div class="name"><i class="fas fa-globe-africa"></i>${country.nameFR}</div>
            <div class="capital"><i class="fas fa-city"></i>${country.capitalFR}</div>
        </div>
    </div>
    `
            )
            .join("");
    });

// Search
// function searchCountry(e) {
//     e.preventDefault();

// Get search term
//     const term = search.value;

//     if (term.trim()) {

//     } else {
//         alert("Entrer un pays");
//     }
// }

// submit.addEventListener("submit", searchCountry);
