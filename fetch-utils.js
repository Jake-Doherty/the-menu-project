const APP_ID = "e850f419";
const APP_KEY = "674d07700faee2184d3902c1de51433c";

// DATA FUNCTIONS
export async function getRecipes(recipe) {
    const baseURL = `https://api.edamam.com/search?q=${recipe}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const response = await fetch(baseURL);
    const data = await response.json();
    return data;
}
