// IMPORTS

// GET DOM ELEMENTS
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");
const navMenuLinks = document.querySelectorAll(".nav-menu-link");

// STATE

// EVENTS
menuBtn.addEventListener("click", () => {
    if (menuBtn.className === "toggle-menu-closed") {
        menuBtn.classList.toggle("toggle-menu-open");
        menuBtn.classList.toggle("toggle-menu-closed");
    } else if (menuBtn.className === "toggle-menu-open") {
        menuBtn.classList.toggle("toggle-menu-closed");
        menuBtn.classList.toggle("toggle-menu-open");
    }
    if (navMenu.className === "toggle-nav-menu-closed") {
        navMenu.classList.toggle("toggle-nav-menu-open");
        navMenu.classList.toggle("toggle-nav-menu-closed");
        for (const navMenuLink of navMenuLinks) {
            navMenuLink.classList.add("link-open-opacity");
            navMenuLink.classList.remove("link-closed-opacity");
        }
    } else if (navMenu.className === "toggle-nav-menu-open") {
        navMenu.classList.toggle("toggle-nav-menu-closed");
        navMenu.classList.toggle("toggle-nav-menu-open");
        for (const navMenuLink of navMenuLinks) {
            navMenuLink.classList.add("link-closed-opacity");
            navMenuLink.classList.remove("link-open-opacity");
        }
    }
});

// DISPLAY
