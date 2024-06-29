import recipes from "./recipes.mjs";

function random(num) {
    return Math.floor(Math.random() * num);
}

function pickRecipe(recipes) {
    const recipesLength = recipes.length;
    const randomNum = random(recipesLength);
    return recipes[randomNum];
}

function rating_stars(rating) {
    let returned = "";
    const empty_stars = 5 - rating;
    for (let i = 0; i < rating; i++) {
        returned += '<span aria-hidden="true" class="icon-star">⭐</span>';
    }
    for (let i = 0; i < empty_stars; i++) {
        returned += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
    }
    return returned;
}

function displayTags(tags) {
    let tagsHTML = "";
    for (let tag of tags) {
        tagsHTML += `<h3>${tag}</h3>`;
    }
    return tagsHTML;
}

function recipeTemplate(recipe) {
    return `<div class="recipe">
            <img src="${recipe.image}" alt="${recipe.name}">
            <section>
                ${displayTags(recipe.tags)}
                <h2>${recipe.name}</h2>
                <span
                    class="rating"
                    role="img"
                    aria-label="Rating: ${recipe.rating} out of 5 stars"
                >
                    ${rating_stars(recipe.rating)}
                </span>
                <p>${recipe.description}</p>
            </section>
        </div>`;
}

function renderRecipes(recipeList) {
    // Get the element we will output the recipes into
    const main = document.querySelector("main");
    // Use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    const recipeHTML = recipeList.map(recipeTemplate).join('');
    // Set the HTML strings as the innerHTML of our output element.
    main.innerHTML = recipeHTML;
}

function filter(query) {
    const filtered = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.tags.find(tag => tag.toLowerCase().includes(query))
    );
    // sort by name
    const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
}

function searchHandler(e) {
    e.preventDefault();
    // get the search input
    const inputElement = document.querySelector("input");
    const searchInput = inputElement.value.toLowerCase();
    // use the filter function to filter our recipes
    const filteredRecipes = filter(searchInput);
    // render the filtered list
    renderRecipes(filteredRecipes);
}

function init() {
    // Get a random recipe
    const recipe = pickRecipe(recipes);
    // Render the recipe with renderRecipes.
    renderRecipes([recipe]);
}

document.addEventListener('DOMContentLoaded', () => {
    const buttonElement = document.querySelector("button");
    buttonElement.addEventListener('click', searchHandler);
    init();
});
