// IMPORTS
import {
    getMoreRecipes,
    getRecipes,
    getRecipesOnPageLoad,
} from "../fetch-utils.js";
import { renderRecipes } from "../render-utils.js";

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

// EVENTS
window.addEventListener("load", async () => {
    const recipe = {
        dish_name: "pizza",
    };

    let response = await getRecipesOnPageLoad(recipe.dish_name);

    recipes = response;

    displayRecipes();
});

nextPage.addEventListener("click", async () => {
    const response = await getMoreRecipes(recipes._links.next.href);

    console.log(recipes);

    (paging.nextPage_url = response._links.next.href), paging.page++;

    recipes = response;

    console.log(paging.page);
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
    queryTotalCount.textContent = `Randomly displaying ${recipes.hits.length} of ${recipes.count} results`;
    for (const recipe of recipes.hits) {
        const recipeEl = renderRecipes(recipe);
        recipesList.append(recipeEl);
    }
}

function displayMoreRecipes() {
    queryTotalCount.textContent = `Randomly displaying ${recipes.hits.length} of ${recipes.count} results`;
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
