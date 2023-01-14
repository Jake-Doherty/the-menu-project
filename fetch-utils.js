//
//
//
//
// EDAMAM API CALLS

const APP_ID = "e850f419";
const APP_KEY = "674d07700faee2184d3902c1de51433c";
// OLD const baseURL = `https://api.edamam.com/search?q=${recipe}&app_id=${APP_ID}&app_key=${APP_KEY}&random=true`;
// const baseURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${recipe}&app_id=${APP_ID}&app_key=${APP_KEY}`;

// DATA FUNCTIONS
export async function getRecipes(recipe, health_restrictions) {
    if (recipe && health_restrictions) {
        const baseURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${recipe}&app_id=${APP_ID}&app_key=${APP_KEY}&health=${health_restrictions}`;
        let response = await fetch(baseURL);
        const data = await response.json();
        return data;
    } else if (recipe) {
        const baseURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${recipe}&app_id=${APP_ID}&app_key=${APP_KEY}`;
        let response = await fetch(baseURL);
        const data = await response.json();
        return data;
    } else if (health_restrictions) {
        const baseURL = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${APP_KEY}&health=${health_restrictions}`;
        let response = await fetch(baseURL);
        const data = await response.json();
        return data;
    }
}

export async function getRecipesOnPageLoad(recipe, health_restrictions) {
    // const baseURL = `https://api.edamam.com/search?q=${recipe}&app_id=${APP_ID}&app_key=${APP_KEY}&random=true`;
    if (recipe) {
        const baseURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${recipe}&app_id=${APP_ID}&app_key=${APP_KEY}`;
        let response = await fetch(baseURL);
        const data = await response.json();
        return data;
    }
}

export async function getFeaturedRecipesOnPageLoad(recipe) {
    // const baseURL = `https://api.edamam.com/search?q=${recipe}&app_id=${APP_ID}&app_key=${APP_KEY}&random=true`;
    if (recipe) {
        const baseURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${recipe}&app_id=${APP_ID}&app_key=${APP_KEY}&random=true`;
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

export async function insertRecipeToDb(url, userId) {
    // console.log("URL TO BE SCRAPED", { url });
    const baseURL = "http://localhost:7890/api/v1/recipes/myrecipes";
    let response = await fetch(baseURL, {
        method: "POST",
        mode: "cors",
        // credentials: "include",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({ url, userId }),
    });
    const addedAlert = alert("added to your recipes!");
    return addedAlert;
}

//
//
//
//
// SUPABASE CALLS

const SUPABASE_URL = "https://csmavwimvjsxbxwvwfxk.supabase.co";
const SUPABASE_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzbWF2d2ltdmpzeGJ4d3Z3ZnhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTY5OTYsImV4cCI6MTk4MjE3Mjk5Nn0.G079_-YncXBbnPxw7YR8mtpL5rTWtUFmWrS8uGwtGo8";
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

//
/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

//
/* DATA FUNCTIONS */
