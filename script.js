

const countries = document.getElementById('countries');


fetch('./country.json')
.then(response => response.json())
.then(data => {
    countries.innerHTML = data.map(country => `
    <div id="Card">
        <div id="flag"><img src="${country.flag}" alt="${country.name}"></div>
        <div id="name"><i class="fas fa-globe-africa"></i>${country.nameFR}</div>
        <div id="capital"><i class="fas fa-city"></i>${country.capitalFR}</div>
    </div>
    `).join('');
});



