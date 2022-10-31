// IMPORTS
import { renderRecipes } from "../render-utils.js";
import "../auth/user.js";
import { getFeaturedRecipesOnPageLoad } from "./fetch-utils.js";
import { renderFeaturedRecipe } from "./render-utils.js";

// GET DOM ELEMENTS
const recipesList = document.getElementById("featured-recipe-list");
const errorDisplay = document.getElementById("error-display");

// STATE
let error = null;
let featuredRecipes = [];

// EVENTS
window.addEventListener("load", async () => {
    const recipe = {
        dish_name: "pizza",
    };

    let response = await getFeaturedRecipesOnPageLoad(recipe.dish_name);

    featuredRecipes = response;

    displayError();
    displayRecipes();
});

// DISPLAY
function displayRecipes() {
    recipesList.innerHTML = "";
    for (const recipe of featuredRecipes.hits) {
        const recipeEl = renderFeaturedRecipe(recipe);
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
