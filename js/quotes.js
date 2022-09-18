const quotes = [
    {
        quote: "Happiness is an uphill battle. Wear the good shoes.",
        author: "Kurt Vonnegut",
    },
    {
        quote: "Without ice cream, there would be chaos and darkness.",
        author: "Don Kardong",
    },
    {
        quote: "When things go wrong, don't go with them.",
        author: "Elvis Presley",
    },
    {
        quote: "Happiness is a warm puppy.",
        author: "Charles M. Schulz",
    },
    {
        quote: "Happiness never decreases by being shared.",
        author: "Buddha",
    },
    {
        quote: "Happiness is like jam. You can't spread even a little without getting some on yourself.",
        author: "Anonymous",
    },
    {
        quote: "For every minute you are angry you lose 60 seconds of happiness.",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "Think big thoughts but relish small pleasures.",
        author: "Jackson Brown Jr.",
    },
    {
        quote: "Perfect happiness is the absence of the striving for happiness.",
        author: "Chuang-Tse",
    },
    {
        quote: "The present moment is filled with joy and happiness. If you are attentive, you will see it.",
        author: "Thich Nhat Hanh",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


