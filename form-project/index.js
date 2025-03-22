let countValid = 0;

const form = document.getElementById("form");

const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const phoneNumberInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm");

const arr = [
  firstNameInput,
  lastNameInput,
  emailInput,
  phoneNumberInput,
  passwordInput,
  confirmPasswordInput
]

form.addEventListener("submit", (e) => {
  // if the email field is invalid
  if (countValid !== 6) {
    // display an appropriate error message
    for (let i = 0; i < arr.length; i++) {
      
    }
      showError();
    // prevent form submission
    e.preventDefault();
  }
});

function showError(email) {
  if (email.validity.valueMissing) {
    // If empty
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    // If it's not an email address,
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    // If the value is too short,
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
  // Add the `active` class
  emailError.className = "error active";
}