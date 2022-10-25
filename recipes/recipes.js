// IMPORTS
import { getRecipes } from "../fetch-utils.js";
import { renderRecipes } from "../render-utils.js";

// GET DOM ELEMENTS
const recipeSearchForm = document.getElementById("recipe-search-form");
const recipesList = document.getElementById("recipes-list");
const errorDisplay = document.getElementById("error-display");

// STATE
let error = null;
let recipes = [];

// EVENTS
recipeSearchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(recipeSearchForm);

    const recipe = {
        dish_name: formData.get("recipe-search"),
        health_restrictions: formData.get("health-restrictions"),
    };

    const response = await getRecipes(
        recipe.dish_name,
        recipe.health_restrictions
    );

    recipes = response;

    console.log("search form console log", recipes);
    console.log("search form console log2", recipe.health_restrictions);

    displayError();
    displayRecipes();
});

// DISPLAY
function displayRecipes() {
    recipesList.innerHTML = "";
    for (const recipe of recipes.hits) {
        const recipeEl = renderRecipes(recipe);
        recipesList.append(recipeEl);
    }
}

function displayError() {
    if (error) {
        //eslint-disable-next-line no-console
        console.log(error);
        errorDisplay.textContent = error.message;
    } else {
        errorDisplay.textContent = "";
    }
}
