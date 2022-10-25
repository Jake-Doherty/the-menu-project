export function renderRecipes(recipe) {
    const aPageLink = document.createElement("a");
    aPageLink.href = `${recipe.recipe.url}`;
    aPageLink.target = "_blank";

    const li = document.createElement("li");
    li.classList.add("recipe-item");

    const recipeInfoDiv = document.createElement("div");
    recipeInfoDiv.classList.add("recipe-info");

    const pLabel = document.createElement("p");
    pLabel.textContent = `${recipe.recipe.label}`;
    pLabel.classList.add("recipe-title");

    const pTimeToCook = document.createElement("p");
    pTimeToCook.textContent = `${recipe.recipe.totalTime} min`;
    pTimeToCook.classList.add("cook-time");
    if (pTimeToCook.textContent === "0 min") {
        pTimeToCook.classList.add("hidden");
    }

    const pServings = document.createElement("p");
    pServings.textContent = `Serves ${recipe.recipe.yield}`;
    pServings.classList.add("servings");

    const img = document.createElement("img");
    img.src = `${recipe.recipe.images.THUMBNAIL.url}`;
    img.alt = `${recipe.recipe.label}`;
    img.classList.add("recipe-preview");

    recipeInfoDiv.append(pLabel, pTimeToCook, pServings);

    li.append(recipeInfoDiv, img);

    aPageLink.append(li);

    return aPageLink;
}
