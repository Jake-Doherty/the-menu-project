export function renderRecipes(recipe) {
    const li = document.createElement("li");
    li.textContent = `${recipe.recipe.label}`;

    const img = document.createElement("img");
    img.src = `${recipe.recipe.image}`;

    console.log("render function console log", recipe);

    li.append(img);

    return li;
}
