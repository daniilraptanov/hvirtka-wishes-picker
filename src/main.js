import "./style.css";
import "./utils.css";
import Alpine from "alpinejs";
import { loadTemplate } from "./utils.js";

import wishesPicker from "./components/wishes-picker.js";

window.Alpine = Alpine;

Alpine.data("wishesPicker", wishesPicker);

async function init() {
    await loadTemplate(
        "./src/templates/selected-wishes.html",
        "#selected-wishes"
    );
    await loadTemplate(
        "./src/templates/categories-dropdown.html",
        "#categories-dropdown"
    );
    await loadTemplate("./src/templates/wishes-list.html", "#wishes-list");

    Alpine.start();
}

init();
