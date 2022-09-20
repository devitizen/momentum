import { getGreeting } from './data.js';

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const greetingText = document.querySelector("#greeting div:first-child");
const nameText = document.querySelector("#greeting div:last-child");
const rename = document.querySelector("#rename");

const HIDDEN_CLASSNAME = "hidden";
export const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreeting(userName);
}

function paintGreeting(userName) {
    greetingText.innerText = getGreeting();
    nameText.innerText = userName;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    rename.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting(savedUserName);
}
