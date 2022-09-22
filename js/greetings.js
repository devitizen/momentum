import { USERNAME_KEY } from './key.js';

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const greetingText = document.querySelector("#greeting div:first-child");
const nameText = document.querySelector("#greeting div:last-child");
const rename = document.querySelector("#rename");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreeting(userName);
}

function getGreeting() {
    const hours = new Date().getHours();
    if (hours > 6 && hours < 9) {
        return "Good Morning!";
    } else if (hours > 12 && hours < 15) {
        return "Good Afternoon!";
    } else if (hours > 17 && hours < 20) {
        return "Good Evening!";
    } else {
        const greetingText = ["Hello,", "How are you?"];
        return greetingText[Math.floor(Math.random() * 2)];
    }
};

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

