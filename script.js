const main = document.getElementById("main");
const search = document.getElementById("search");
const card = main.getElementsByClassName("card");

// Mount country
fetch("./country.json")
    .then((response) => response.json())
    .then((data) => {
        main.innerHTML = data
            .map(
                (el) => `
    <div class="card">
        <div class="flag"><img src="${el.flag}" alt="${el.name}"></div>
        <div class="card-info">
            <div class="country"><i class="fas fa-globe-africa"></i>${el.nameFR}</div>
            <div class="capital"><i class="fas fa-city"></i>${el.capitalFR}</div>
        </div>
    </div>
    `
            )
            .join("");
    });

// Search
function filter() {
    let filter = search.value.toUpperCase();

    for (let i = 0; i < card.length; i++) {
        let name = card[i].getElementsByClassName("country")[0];
        let txtValue = name.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            card[i].style.display = "";
        } else {
            card[i].style.display = "none";
        }
        console.log(name);
    }
}
