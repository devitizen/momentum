const images = ["Maldives.jpg", "Rio.jpg", "Toronto.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const imagePath = `img/${chosenImage}`;
document.body.style.backgroundImage = `url(${imagePath})`;
