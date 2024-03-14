import './style.css';

const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
// const inputErrors = document.getElementsByClassName('error');
const email = document.getElementById('email');
const emailError = document.querySelector('#email + .error');
const country = document.getElementById('country');
const countryError = document.querySelector('#country + .error');
const zipcode = document.getElementById('zipcode');
const password = document.getElementById('password');
const confirmation = document.getElementById('confirmation');

inputs.forEach(input =>
  input.addEventListener('input', () => {
    if (input.validity.valid) {
      input.nextElementSibling.textContent = '';
    } else {
      showError();
    }
  })
);

form.addEventListener('submit', e => {
  inputs.forEach(input => {
    if (!input.validity.valid) {
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
}
