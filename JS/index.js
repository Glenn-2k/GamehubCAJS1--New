import { apiUrl } from "./api.js";
import { gamesPage } from "../JS/products/games.js";
import { getGames } from "../JS/products/games.js";
import { gamePage } from "./products/game.js";
import { checked } from "./menu.js";
import * as formPage from "./form.js";

const cleanedUrl = location.pathname.replace(/\/|\.html$/g, "");

const formContainer = document.querySelector(`.formContainer`);

switch (cleanedUrl) {
  case "games":
    try {
      gamesPage();
    } catch (error) {
      console.error("error rendering products");
    }
    break;

  case "product-specific.html":
    try {
      gamePage();
    } catch (error) {
      console.error("error rendering products");
    }
}

formContainer.addEventListener("submit", validateForm);
