import { API_KEY } from "./key.js";

const city = document.querySelector("#weather div:first-child");
const weather = document.querySelector("#weather div:last-child");

function onGeoOk(position) {
    const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = BASE_URL + `lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    axios(url)
        .then((response) => {
            const data = response.data;
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main}  ${Math.round(data.main.temp * 10) / 10}°C`;
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
