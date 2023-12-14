// document.addEventListener("DOMContentLoaded", function () {
//   const imageIds = ["img1", "img2", "img3"];
//   for (let i = 0; i < imageIds.length; i++) {
//     addMouseOverListener(imageIds[i]);
//   }
// });
// let containerRef = document.getElementById("imgContainer");
// let containerImgSrc = containerRef.src;
// function addMouseOverListener(imageId) {
//   let imageRef = document.getElementById(imageId);
//   imageRef.addEventListener("mouseover", function () {
//     setImage(imageRef);
//   });
//   imageRef.addEventListener("mouseout", function () {
//     removeImage(imageRef);
//   });
// }
// function setImage(imageRef) {
//   let img = imageRef.getAttribute("src");
//   containerRef.setAttribute("src", img);
//   imageRef.style.border = "10px solid green";
// }
// function removeImage(imageRef) {
//   containerRef.src = containerImgSrc;
//   imageRef.style.border = "none";
// }

//another solution

document.addEventListener("DOMContentLoaded", function () {
  const containerRef = document.getElementById("imgContainer");
  const containerImgSrc = containerRef.src;

  function setImage(imageId) {
    const imageRef = document.getElementById(imageId);
    const img = imageRef.getAttribute("src");
    containerRef.setAttribute("src", img);
    imageRef.style.border = "10px solid green";
  }

  function removeImage(imageId) {
    containerRef.src = containerImgSrc;
    const imageRef = document.getElementById(imageId);
    imageRef.style.border = "none";
  }

  for (let i = 1; i <= 3; i++) {
    const imageId = `img${i}`;
    document
      .getElementById(imageId)
      .addEventListener("mouseover", () => setImage(imageId));
    document
      .getElementById(imageId)
      .addEventListener("mouseout", () => removeImage(imageId));
  }
});
