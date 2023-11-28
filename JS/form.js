const formContainer = document.querySelector(`.formContainer`);
const firstName = document.querySelector(`.firstName`);
const firstNameError = document.querySelector(`.firstNameError`);
const lastName = document.querySelector(`.lastName`);
const lastNameError = document.querySelector(`.lastNameError`);

function validateForm() {
  event.preventDefault();

  console.log("hello");
}

formContainer.addEventListener("submit", validateForm);
