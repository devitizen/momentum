import { API_KEY } from "./key.js";

function onGeoOk(position) {
    const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?"
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = BASE_URL + `lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
