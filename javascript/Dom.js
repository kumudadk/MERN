document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("newHobbyBtn").addEventListener("click", function () {
    const inputVal = document.querySelector(".hobbiesInput").value;
    addHobies(inputVal);
  });
});

function addHobies(inputVal) {
  const inputList = document.querySelectorAll(".hobbiesInput");
  const brnode = document.createElement("br");

  if (inputList.length < 5) {
    let inputElement = document.createElement("input");
    inputElement.setAttribute("class", "hobbiesInput");
    inputElement.setAttribute("value", inputVal);
    const hobbiesList = document.getElementById("hobbiesList");
    hobbiesList.appendChild(brnode);
    hobbiesList.appendChild(inputElement);
  }
}
