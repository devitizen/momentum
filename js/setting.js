import { USERNAME_KEY } from "./greetings.js";

const rename = document.querySelector("#rename");

rename.addEventListener("click", (e) => {
    localStorage.removeItem(USERNAME_KEY);
    window.location.reload();
});
