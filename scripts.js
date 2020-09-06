const baseEndpoint = `http://www.recipepuppy.com/api`;
const proxy = `https://cors-anywhere.herokuapp.com/`;
const form = document.querySelector(".search");

async function fetchRecipes(query) {
    const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
    const data = await res.json();
    return data;
}

async function handleSubmit(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.submit.disabled = true;
    const recipes = await fetchRecipes(element.query.value);
    console.log(recipes);
    element.submit.disabled = false;
}

form.addEventListener("submit", handleSubmit);