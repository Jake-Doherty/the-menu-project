export function renderFeaturedRecipe(recipe) {
    // original recipe publishing
    const aPageLink = document.createElement("a");
    aPageLink.classList.add("featured-recipe-link");
    aPageLink.href = `${recipe.recipe.url}`;
    aPageLink.target = "_blank";

    // recipe card
    const li = document.createElement("li");
    li.classList.add("featured-recipe-item");

    // recipe text container
    const recipeInfoDiv = document.createElement("div");
    recipeInfoDiv.classList.add("featured-recipe-info");

    // recipe title
    const pLabel = document.createElement("p");
    pLabel.textContent = `${recipe.recipe.label}`;
    pLabel.classList.add("featured-recipe-title");

    // recipe cook time
    const pTimeToCook = document.createElement("p");
    pTimeToCook.textContent = `${recipe.recipe.totalTime} min`;
    pTimeToCook.classList.add("featured-cook-time");
    if (pTimeToCook.textContent === "0 min") {
        pTimeToCook.classList.add("hidden");
    }

    // recipe servings
    const pServings = document.createElement("p");
    pServings.textContent = `Serves ${recipe.recipe.yield}`;
    pServings.classList.add("featured-servings");

    // recipe image preview
    const img = document.createElement("img");
    img.src = `${recipe.recipe.images.THUMBNAIL.url}`;
    img.alt = `${recipe.recipe.label}`;
    img.classList.add("featured-recipe-preview");

    // insert recipe info text into info container
    recipeInfoDiv.append(pLabel, pTimeToCook, pServings);

    // insert recipe info and image into recipe card
    li.append(recipeInfoDiv, img);

    // insert recipe card into anchor to create link
    aPageLink.append(li);

    return aPageLink;
}

export function renderRecipes(recipe) {
    // original recipe publishing
    const aPageLink = document.createElement("a");
    aPageLink.href = `${recipe.recipe.url}`;
    aPageLink.target = "_blank";

    // recipe card
    const li = document.createElement("li");
    li.classList.add("recipe-item");

    // recipe text container
    const recipeInfoDiv = document.createElement("div");
    recipeInfoDiv.classList.add("recipe-info");

    // recipe title
    const pLabel = document.createElement("p");
    pLabel.textContent = `${recipe.recipe.label}`;
    pLabel.classList.add("recipe-title");

    // recipe cook time
    const pTimeToCook = document.createElement("p");
    pTimeToCook.textContent = `${recipe.recipe.totalTime} min`;
    pTimeToCook.classList.add("cook-time");
    if (pTimeToCook.textContent === "0 min") {
        pTimeToCook.classList.add("hidden");
    }

    // recipe servings
    const pServings = document.createElement("p");
    pServings.textContent = `Serves ${recipe.recipe.yield}`;
    pServings.classList.add("servings");

    // recipe image preview
    const img = document.createElement("img");
    img.src = `${recipe.recipe.images.THUMBNAIL.url}`;
    img.alt = `${recipe.recipe.label}`;
    img.classList.add("recipe-preview");

    // insert recipe info text into info container
    recipeInfoDiv.append(pLabel, pTimeToCook, pServings);

    // insert recipe info and image into recipe card
    li.append(recipeInfoDiv, img);

    // insert recipe card into anchor to create link
    aPageLink.append(li);

    return aPageLink;
}
