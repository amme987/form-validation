import './style.css';

const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const email = document.getElementById('email');
const emailError = document.querySelector('#email + .error');
const country = document.getElementById('country');
const zipcode = document.getElementById('zipcode');
const password = document.getElementById('password');
const confirmation = document.getElementById('confirmation');

email.addEventListener('input', () => {
  if (email.validity.valid) {
    emailError.textContent = '';
  } else {
    showError();
  }
});

form.addEventListener('submit', e => {
  [...inputs].forEach(input => {
    if (!input.validity.valid) {
      showError();
      e.preventDefault();
    }
  });
  // if (!email.validity.valid) {
  //   showError();
  //   e.preventDefault();
  // }
});

function showError() {
  if (email.validity.typeMismatch) {
    emailError.textContent = 'Entered value needs to be an email';
  }
}
