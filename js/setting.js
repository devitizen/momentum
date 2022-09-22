import { USERNAME_KEY } from "./key.js";

const rename = document.querySelector("#rename");

rename.addEventListener("click", (e) => {
    localStorage.removeItem(USERNAME_KEY);
    window.location.reload();
});
