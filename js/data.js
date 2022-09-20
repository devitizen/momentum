export const quotes = [
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

export const images = ["Maldives.jpg", "Rio.jpg", "Toronto.jpeg"];

export const getGreeting = function () {
    const hours = new Date().getHours();
    if (hours > 5 && hours < 9) {
        return "Good Morning!";
    } else if (hours > 12 && hours < 14) {
        return "Good Afternoon!";
    } else if (hours > 17 && hours < 19) {
        return "Good Evening!";
    } else {
        const greetingText = ["Hello,", "How are you?"];
        return greetingText[Math.floor(Math.random() * 2)];
    }
};
