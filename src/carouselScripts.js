// render images as html elements
export const imagePositionTags = {
  0: "offscreenL-image",
  1: "left-image",
  2: "center-image",
  3: "right-image",
  4: "offscreenR-image",
};

export function createImgElement(imgUrl, alt, imgSrc) {
  let imageElement = document.createElement("a");
  //   imageElement.href = imgSrc;

  let img = document.createElement("img");
  img.src = imgUrl;
  img.alt = alt;
  imageElement.className = "carousel-image";
  imageElement.append(img);

  return imageElement;
}

// carousel scrolling anims
export function scrollToLeft(imageElements) {
  // selects image elements to move
  let offscreenLeftImg = document.querySelector(".offscreenL-image");
  let leftImg = document.querySelector(".left-image");
  let centerImg = document.querySelector(".center-image");
  let rightImg = document.querySelector(".right-image");
  let offscreenRightImg = document.querySelector(".offscreenR-image");

  // selects new offscreen image element
  let currentOffScrIndex = Array.prototype.indexOf.call(
    imageElements,
    offscreenLeftImg
  );
  let newOffScrLeftImg =
    imageElements[
      currentOffScrIndex - 1 > 0
        ? currentOffScrIndex - 1
        : imageElements.length - 1
    ];

  // updates classlists for scrolling
  newOffScrLeftImg.classList.add("offscreenL-image");

  offscreenLeftImg.classList.remove("offscreenL-image");
  offscreenLeftImg.classList.add("left-image");

  leftImg.classList.remove("left-image");
  leftImg.classList.add("center-image");

  centerImg.classList.remove("center-image");
  centerImg.classList.add("right-image");

  rightImg.classList.remove("right-image");
  rightImg.classList.add("offscreenR-image");

  offscreenRightImg.classList.remove("offscreenR-image");
}

export function scrollToRight(imageElements) {
  // selects image elements to move
  let offscreenLeftImg = document.querySelector(".offscreenL-image");
  let leftImg = document.querySelector(".left-image");
  let centerImg = document.querySelector(".center-image");
  let rightImg = document.querySelector(".right-image");
  let offscreenRightImg = document.querySelector(".offscreenR-image");

  // selects new offscreen image element
  let currentOffScrIndex = Array.prototype.indexOf.call(
    imageElements,
    offscreenRightImg
  );
  let newOffScrRightImg =
    imageElements[
      currentOffScrIndex + 1 === imageElements.length
        ? 0
        : currentOffScrIndex + 1
    ];

  // updates classlists for scrolling
  offscreenLeftImg.classList.remove("offscreenL-image");

  leftImg.classList.remove("left-image");
  leftImg.classList.add("offscreenL-image");

  centerImg.classList.remove("center-image");
  centerImg.classList.add("left-image");

  rightImg.classList.remove("right-image");
  rightImg.classList.add("center-image");

  offscreenRightImg.classList.remove("offscreenR-image");
  offscreenRightImg.classList.add("right-image");

  newOffScrRightImg.classList.add("offscreenR-image");
}
