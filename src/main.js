import "./style.css";
import "./utils.css";
import Alpine from "alpinejs";
import { loadTemplate } from "./utils.js";

import selectedWishes from "./components/selected-wishes.js";
import categoriesList from "./components/categories-dropdown.js";

window.Alpine = Alpine;

Alpine.data("selectedWishes", selectedWishes);
Alpine.data("categoriesDropdown", categoriesList);

async function init() {
    await loadTemplate(
        "./src/templates/selected-wishes.html",
        "#selected-wishes"
    );
    await loadTemplate(
        "./src/templates/categories-dropdown.html",
        "#categories-dropdown"
    );

    Alpine.start();
}

init();
