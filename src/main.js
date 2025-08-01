import "./style.css";
import "./utils.css";
import Alpine from "alpinejs";
import nav from "./components/nav.js";
import card from "./components/card.js";

window.Alpine = Alpine;
Alpine.data("navApp", nav);
Alpine.data("cardApp", card);

Alpine.start();
