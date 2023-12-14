document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("img1").addEventListener("mouseover", setImage1);
  document.getElementById("img2").addEventListener("mouseover", setImage2);
  document.getElementById("img3").addEventListener("mouseover", setImage3);

  document.getElementById("img1").addEventListener("mouseout", removeImage1);
  document.getElementById("img2").addEventListener("mouseout", removeImage2);
  document.getElementById("img3").addEventListener("mouseout", removeImage3);
});

let containerRef = document.getElementById("imgContainer");

let containerImgSrc = containerRef.src;

// store the url of original image (not available image)

function setImage1() {
  let imageRef = document.getElementById("img1");
  // containerRef.src = imageRef.src

  // or

  let img = imageRef.getAttribute("src");

  // img =  "https://img.freepik.com/premium-photo/image-planet-outer-space-mixed-media-elements-image-furnished-by-nasa_641298-3434.jpg?w=2000">

  containerRef.setAttribute("src", img);
  imageRef.style.border = "10px solid green";
}

function setImage2() {
  let imageRef = document.getElementById("img2");
  // containerRef.src = imageRef.src

  // or

  let img = imageRef.getAttribute("src");

  // img =  "https://img.freepik.com/premium-photo/image-planet-outer-space-mixed-media-elements-image-furnished-by-nasa_641298-3434.jpg?w=2000">

  containerRef.setAttribute("src", img);
  imageRef.style.border = "10px solid green";
}

function setImage3() {
  let imageRef = document.getElementById("img3");
  // containerRef.src = imageRef.src

  // or

  let img = imageRef.getAttribute("src");

  //exaplnantion of above code
  // img =  "https://img.freepik.com/premium-photo/image-planet-outer-space-mixed-media-elements-image-furnished-by-nasa_641298-3434.jpg?w=2000">

  containerRef.setAttribute("src", img);
  imageRef.style.border = "10px solid green";
}

function removeImage1() {
  containerRef.src = containerImgSrc;
  const imageRef = document.getElementById("img1");
  imageRef.style.border = "none";
}

function removeImage2() {
  containerRef.src = containerImgSrc;
  const imageRef = document.getElementById("img2");
  imageRef.style.border = "none";
}

function removeImage3() {
  containerRef.src = containerImgSrc;
  const imageRef = document.getElementById("img3");
  imageRef.style.border = "none";
}
