// IMPORTS
import {
    getMoreRecipes,
    getRecipes,
    getRecipesOnPageLoad,
} from "../fetch-utils.js";
import { renderRecipes } from "../render-utils.js";
import "../auth/user.js";

// GET DOM ELEMENTS
const recipeSearchForm = document.getElementById("recipe-search-form");
const recipesList = document.getElementById("recipes-list");
const errorDisplay = document.getElementById("error-display");
const queryTotalCount = document.getElementById("query-total-count");
const nextPage = document.getElementById("next-page");

// STATE
let error = null;
let recipes = [];
let paging = {
    page: "1",
    nextPage_url: null,
};
let count = "";

// async function resultCountFunc(response) {
//     let resultCount = await response.hits.length;
//     additionalCount += resultCount;

//     return additionalCount;
// }

// EVENTS
window.addEventListener("load", async () => {
    const recipe = {
        dish_name: "pizza",
    };

    let response = await getRecipesOnPageLoad(recipe.dish_name);
    count = response.hits.length;

    recipes = response;

    displayRecipes();
});

nextPage.addEventListener("click", async () => {
    const response = await getMoreRecipes(recipes._links.next.href);

    paging.nextPage_url = response._links.next.href;
    paging.page++;
    count += response.hits.length;

    recipes = response;

    displayMoreRecipes();
});

recipeSearchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(recipeSearchForm);

    const recipe = {
        dish_name: formData.get("recipe-search"),
        health_restrictions: formData.get("health-restrictions"),
    };

    let response = await getRecipes(
        recipe.dish_name,
        recipe.health_restrictions
    );

    recipes = response;

    displayError();
    displayRecipes();
});

// DISPLAY
function displayRecipes() {
    recipesList.innerHTML = "";
    queryTotalCount.textContent = `displaying ${count} of ${recipes.count} results`;
    for (const recipe of recipes.hits) {
        const recipeEl = renderRecipes(recipe);
        recipesList.append(recipeEl);
    }
}

function displayMoreRecipes() {
    queryTotalCount.textContent = `displaying ${count} of ${recipes.count} results`;
    for (const recipe of recipes.hits) {
        const recipeEl = renderRecipes(recipe);
        recipesList.prepend(recipeEl);
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
