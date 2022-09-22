const NUMBER_IMAGES = 10;
const imageName = `${Math.ceil(Math.random() * NUMBER_IMAGES)}.jpg`;
const imageURL = `url(img/${imageName})`;

document.body.style.backgroundImage = imageURL;
