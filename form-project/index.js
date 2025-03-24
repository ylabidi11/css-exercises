let countValid = 0;

let passwordValue;

const form = document.getElementById('form');

const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const phoneNumberInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm');

const arr = [
  { input: firstNameInput, valid: false, error: "empty" },
  { input: lastNameInput, valid: false, error: "empty" },
  { input: emailInput, valid: false, error: "empty" },
  { input: phoneNumberInput, valid: false, error: "empty" },
  { input: passwordInput, valid: false, error: "empty" },
  { input: confirmPasswordInput, valid: false, error: "empty" }
]

firstNameInput.addEventListener('change', () => {
  if (firstNameInput.value !== '') {
    arr[0].valid = true;
  } else {
    arr[0].valid = false;
    arr[0].error = 'empty';
  }
})

lastNameInput.addEventListener('change', () => {
  if (lastNameInput.value !== '') {
    arr[1].valid = true;
  } else {
    arr[1].valid = false;
    arr[1].error = 'empty';
  }
})

emailInput.addEventListener('change', () => {
  if (emailInput.validity.valid) {
    arr[2].valid = true;
  } else {
    arr[2].valid = false;
    if (emailInput.validity.typeMismatch) arr[2].error = 'pattern';
    else if (emailInput.validity.valueMissing) arr[2].error = 'empty';
  }
})

phoneNumberInput.addEventListener('change', () => {
  if (phoneNumberInput.validity.valid) {
    arr[3].valid = true;
  } else {
    arr[3].valid = false;
    if (emailInput.validity.typeMismatch) arr[3].error = 'pattern';
    else if (emailInput.validity.valueMissing) arr[3].error = 'empty';
  }
})

passwordInput.addEventListener('change', () => {
  if (passwordInput.value.length >= 8) {
    arr[4].valid = true;
    passwordValue = passwordInput.value;
  } else {
    arr[4].valid = false;
    if (passwordInput.value === '') arr[4].error = 'empty';
    else if (passwordInput.value.length > 0 && passwordInput.value.length < 8) arr[4].error = 'short';
  }
})

confirmPasswordInput.addEventListener('change', () => {
  if (confirmPasswordInput.value === passwordValue) {
    arr[5].valid = true;
  } else {
    arr[5].valid = false;
    if (emailInput.validity.valueMissing) arr[5].error = 'empty';
    else if (emailInput.value !== passwordValue) arr[5].error = 'not-match';
  }
})

form.addEventListener('submit', (e) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].valid === false) {
      break;
    } countValid++;
  }

  if (countValid !== 6) {
    countValid = 0;
    e.preventDefault();
    showError();
  }
});

function showError() {
  for (let i = 0; i < arr.length; i++) {
    let span = document.getElementById(`span-${i + 1}`);
    if (!arr[i].valid) {
      span.className = 'invalidity'
      if (arr[i].error === 'empty') {
        span.innerText = 'Please fill this out';
      } else if (arr[i].error === 'pattern') {
        span.innerText = 'Follow pattern';
      } else if (arr[i].error === 'short') {
        span.innerText = 'Too short';
      } else if (arr[i].error === 'not-match') {
        span.innerText = 'Match Passwords';
      }
    } else {
      span.className = 'validity';
      span.innerText = 'Valid';
    }
  }
}