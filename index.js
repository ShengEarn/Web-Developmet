const img = document.querySelector("img");
const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");

const images = ["indeximage1.jpg", "indeximage2.jpg"];

let currentIndex = 0;

leftButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  img.src = images[currentIndex];
});

rightButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  img.src = images[currentIndex];
});
