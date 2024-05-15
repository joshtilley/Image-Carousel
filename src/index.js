import "./style.css";
import {
  imagePositionTags,
  createImgElement,
  scrollToLeft,
  scrollToRight,
} from "./carouselScripts.js";

async function populate() {
  // functions to get data from json file.
  const requestURL = "/src/images.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const imageData = await response.json();

  // main function
  const imageCarousel_div = document.querySelector(".carousel");

  for (let i in imageData) {
    let img = imageData[i];
    let imageElement = createImgElement(img.url, img.alt, img.src);
    imageElement.classList.add(imagePositionTags[i]);
    imageCarousel_div.append(imageElement);
  }
}

populate();

// carousel animations
const imageElements = document.getElementById("carousel").children;
const scrollLeft_btn = document.querySelector("#left");
const scrollRight_btn = document.querySelector("#right");

scrollLeft_btn.addEventListener("click", () => scrollToLeft(imageElements));

scrollRight_btn.addEventListener("click", () => scrollToRight(imageElements));

setInterval(() => scrollToRight(imageElements), 6000);

// header border animation
const headerBoxBorder_div = document.querySelector(".header-border");
setInterval(() => {
  headerBoxBorder_div.classList.toggle("header-border-size-animation");
  headerBoxBorder_div.classList.toggle("header-border-position-animation");
}, 2500);
