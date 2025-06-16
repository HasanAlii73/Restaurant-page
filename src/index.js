import "./style.css";
import shawarmaImg from "./img/shawarma.jpeg";
import {homePageLoad} from "./home.js";
import { menuePageLoad } from "./menue.js";
import { aboutPageLoad } from "./about.js";

homePageLoad(shawarmaImg);

document.querySelector(".btnHome").addEventListener("click", () => {
    homePageLoad(shawarmaImg);
});
document.querySelector(".btnMenue").addEventListener("click", () => {
    menuePageLoad();
});
document.querySelector(".btnAbout").addEventListener("click", () => {
    aboutPageLoad();
});