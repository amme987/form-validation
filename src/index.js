import './style.css';

const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const email = document.getElementById('email');
const emailError = document.querySelector('#email + .error');
const country = document.getElementById('country');
const countryError = document.querySelector('#country + .error');
const zipcode = document.getElementById('zipcode');
const zipcodeError = document.querySelector('#zipcode + .error');
const password = document.getElementById('password');
const passwordError = document.querySelector('#password + .error');
const confirmation = document.getElementById('confirmation');
const confirmationError = document.querySelector('#confirmation + .error');

inputs.forEach(input =>
  input.addEventListener('input', () => {
    confirmation.nextElementSibling.textContent = '';
    confirmation.classList.remove('invalid');
    if (input.validity.valid) {
      input.nextElementSibling.textContent = '';
      if (
        (confirmation.validity.valid || password.validity.valid) &&
        confirmation.value !== password.value
      ) {
        showError();
      }
    } else {
      showError();
    }
  })
);

form.addEventListener('submit', e => {
  inputs.forEach(input => {
    if (!input.validity.valid || confirmation.classList.contains('invalid')) {
      showError();
      e.preventDefault();
    }
  });
});

function showError() {
  inputs.forEach(input => {
    if (input.validity.valueMissing) {
      input.nextElementSibling.textContent = 'Please enter value';
    }
  });
  if (email.validity.typeMismatch) {
    emailError.textContent = 'Entered value needs to be an email';
  }
  if (country.validity.patternMismatch) {
    countryError.textContent = 'Entered value must be a country name';
  }
  if (zipcode.validity.patternMismatch) {
    zipcodeError.textContent = 'Please enter a 5-digit zipcode';
  }
  if (confirmation.value !== password.value) {
    // Invalid class added for styling
    confirmation.classList.add('invalid');
    confirmationError.textContent = 'Passwords need to match';
  }
  if (password.validity.patternMismatch) {
    passwordError.textContent = 'Password needs to be 13-16 characters long';
  }
}
