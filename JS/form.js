const formContainer = document.querySelector(`.formContainer`);
const firstName = document.querySelector(`#firstName`);
const firstNameError = document.querySelector(`#firstNameError`);
const lastName = document.querySelector(`#lastName`);
const lastNameError = document.querySelector(`#lastNameError`);
const email = document.querySelector(`#email`);
const emailError = document.querySelector(`#emailError`);

function validateForm() {
  if (checkLength(firstName.value, 0) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
    event.preventDefault();
  }

  if (checkLength(lastName.value, 2) === true) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
    event.preventDefault();
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
    event.preventDefault();
  }

  console.log("hello");
}

formContainer.addEventListener("submit", validateForm);

function checkLength(value, length) {
  if (value.trim().length > length) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const emailMatch = regEx.test(email);
  return emailMatch;
}
