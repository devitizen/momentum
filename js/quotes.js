const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote div:last-child");

const URL = "https://api.quotable.io/random";
/* 
// option 1: using fetch
fetch(URL)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Can't fetch quotes");
        }
        return response.json();
    })
    .then((data) => {
        quote.innerText = `"${data.content}"`;
        author.innerText = data.author;
    })
    .catch((error) => {
        console.log(error.message);
    });
 */

// option 2: using axios
axios(URL)
    .then((response) => {
        quote.innerText = `"${response.data.content}"`;
        author.innerText = response.data.author;
    })
    .catch((error) => {
        console.log(error.message);
    });
