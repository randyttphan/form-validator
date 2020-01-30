const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//Showing input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//Success messages
function showSuccess(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//function to validate email
function emailValidation(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//function to check required fields
function checkRequired(inputArray) {
  inputArray.forEach(function(input) {
    if (input.value.trim() === "") {
      showError(input, "Field Required");
    } else {
      showSuccess(input);
    }
  });
}

form.addEventListener("submit", function(e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
});
