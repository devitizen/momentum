const date = document.querySelector("#date");
const time = document.querySelector("#time");

function getDate() {
    const today = new Date();
    const year = String(today.getFullYear());
    const month = today.toLocaleDateString("en-US", { month: "long" });
    const day = String(today.getDate());
    date.innerText = `${month.substring(0, 3)} ${day} ${year}`;
}

function getTime() {
    const today = new Date();
    const hours = String(today.getHours()).padStart(2, "0");
    const minutes = String(today.getMinutes()).padStart(2, "0");
    const seconds = String(today.getSeconds()).padStart(2, "0");
    time.innerText = `${hours}:${minutes}:${seconds}`;
}

getDate();
getTime();
setInterval(getTime, 1000);
