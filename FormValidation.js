function ValidateForm() {
  console.log("inside Validate Form");

  let nameBoxValue = document.getElementById("nameBox").value;

  let email = document.getElementById("emailBox").value;

  if (nameBoxValue === "") {
    alert("Please enter name");
    return false;
  }
  if (email === "") {
    alert("Please enter email");
    return false;
  }

  var mobile = document.getElementById("mobileBox").value;
  var mobilePattern = /^\d{10}$/;

  if (!mobile.match(mobilePattern)) {
    alert("please enter mobile no.");
    return false;
  }
}
