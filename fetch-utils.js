const APP_ID = "e850f419";
const APP_KEY = "674d07700faee2184d3902c1de51433c";

// DATA FUNCTIONS
export async function getRecipes(recipe, health_restrictions) {
    // const baseURL = `https://api.edamam.com/search?q=${recipe}&app_id=${APP_ID}&app_key=${APP_KEY}&random=true`;
    if (recipe && health_restrictions) {
        const baseURL = `https://api.edamam.com/api/recipes/v2?type=public&from=0&to=50&q=${recipe}&app_id=${APP_ID}&app_key=${APP_KEY}&health=${health_restrictions}`;
        let response = await fetch(baseURL);
        const data = await response.json();
        return data;
    } else if (recipe) {
        const baseURL = `https://api.edamam.com/api/recipes/v2?type=public&from=0&to=50&q=${recipe}&app_id=${APP_ID}&app_key=${APP_KEY}`;
        let response = await fetch(baseURL);
        const data = await response.json();
        return data;
    } else if (health_restrictions) {
        const baseURL = `https://api.edamam.com/api/recipes/v2?type=public&from=0&to=50&app_id=${APP_ID}&app_key=${APP_KEY}&health=${health_restrictions}`;
        let response = await fetch(baseURL);
        const data = await response.json();
        return data;
    }
}

export async function getRecipesOnPageLoad(recipe, health_restrictions) {
    // const baseURL = `https://api.edamam.com/search?q=${recipe}&app_id=${APP_ID}&app_key=${APP_KEY}&random=true`;
    if (recipe && health_restrictions) {
        const baseURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${recipe}&app_id=${APP_ID}&app_key=${APP_KEY}&health=${health_restrictions}&random=true`;
        let response = await fetch(baseURL);
        const data = await response.json();
        return data;
    } else if (recipe) {
        const baseURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${recipe}&app_id=${APP_ID}&app_key=${APP_KEY}`;
        let response = await fetch(baseURL);
        const data = await response.json();
        return data;
    } else if (health_restrictions) {
        const baseURL = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${APP_KEY}&health=${health_restrictions}&random=true`;
        let response = await fetch(baseURL);
        const data = await response.json();
        return data;
    }
}

export async function getMoreRecipes(nextURL) {
    const baseURL = `${nextURL}`;
    let response = await fetch(baseURL);
    const data = await response.json();
    return data;
}
