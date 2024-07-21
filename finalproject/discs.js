import discs from "./discs.mjs";

function discTemplate(disc) {
    return `<div class="disc-section">
                <img src="${disc.imgURL}" alt="${disc.imgAlt}">
                <div class="text-section">
                    <h2>${disc.discName}</h2>
                    <h3>Disc Type: ${disc.discType}</h3>
                    <h3>Speed: ${disc.speed}</h3>
                    <h3>Glide: ${disc.glide}</h3>
                    <h3>Turn: ${disc.turn}</h3>
                    <h3>Fade: ${disc.fade}</h3>
                    <p>${disc.description}</p>
                </div>
            </div>`;
}

function filter(query) {
    const filtered = discs.filter(disc =>
        disc.discName.toLowerCase().includes(query) ||
        disc.discType.toLowerCase().includes(query) ||
        disc.description.toLowerCase().includes(query)
    );

    const sorted = filtered.sort((a, b) => a.discName.localeCompare(b.discName));
    return sorted;
}

function returnHTML(discs) {
    let discNumber = 0;
    let htmlToAdd = "";
    discs.forEach(disc => {
        htmlToAdd += discTemplate(disc);
        discNumber += 1;
    });
    if (discNumber === 0) {
        return "<h2>No discs with that search found</h2>";
    } else {
        return htmlToAdd;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const main = document.getElementById("discs-main");
    const buttonElement = document.querySelector("button");

    main.innerHTML = returnHTML(discs);

    buttonElement.addEventListener('click', function() {
        const searchBar = document.querySelector("input");
        var searchValue = searchBar.value.toLowerCase();
        if (searchValue !== "") {
            var searchedDiscs = filter(searchValue);
            main.innerHTML = returnHTML(searchedDiscs);
        } else {
            main.innerHTML = "<h2>No discs with that search found</h2>";
        }
    });
});

