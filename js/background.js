const images = ["0.JPG", "1.JPG", "2.JPG"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgimage = document.createElement("img");
bgimage.src = `img/${chosenImage}`;

document.body.appendChild(bgimage);
//append : at the end/bottom
//prepend : at the front/top