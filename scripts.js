const baseEndpoint = `http://www.recipepuppy.com/api`;
//const proxy = `https://cors-anywhere.herokuapp.com/`;
const form = document.querySelector(".search");
const recipesGrid = document.querySelector(".recipes");

async function fetchRecipes(query) {
    const res = await fetch(`${baseEndpoint}?q=${query}`);
    const data = await res.json();
    return data;
}

function displayRecipes(recipes) {
    const html = recipes.map(
        recipe => 
        `<div class="recipe">
            <h2>${recipe.title}</h2>
            <p>${recipe.ingredients}</p>
            <a href="${recipe.href}">Go to recipe</a>
        </div>`
    );
    recipesGrid.innerHTML = html.join(" ");
}

async function handleSubmit(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.submit.disabled = true;
    const recipes = await fetchRecipes(element.query.value);
    element.submit.disabled = false;
    displayRecipes(recipes.results);
}

form.addEventListener("submit", handleSubmit);