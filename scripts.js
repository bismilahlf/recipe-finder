const baseEndpoint = "http://www.recipepuppy.com/api";
const proxy = "https://cors-anywhere.herokuapp.com/";
const form = document.querySelector(".search");

async function fetchRecipes(query) {
    const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
    const data = await res.json();
    console.log(data)
}

//fetchRecipes("salad");

function handleSubmit(event) {
    event.preventDefault();
    console.log(event.currentTarget.query.value)
}

form.addEventListener("submit", handleSubmit);