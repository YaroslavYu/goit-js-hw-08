const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
let formData = {};

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

setInitialDatainForm();

// const formData = localStorage.getItem('feedback-form-state')
//   ? JSON.parse(localStorage.getItem('feedback-form-state'))
//   : {};

// const defaultValue = JSON.parse(localStorage.getItem('feedback-form-state'));
// const defaultValue = formData;

// if (defaultValue?.email) {
//   form.elements.email.value = defaultValue.email;
// }
// if (defaultValue?.message) {
//   form.elements.message.value = defaultValue.message;
// }

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function setInitialDatainForm() {
  const defaultValue = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (defaultValue) {
    formData = defaultValue;
    if (defaultValue.email) {
      form.elements.email.value = defaultValue.email;
    }
    if (defaultValue.message) {
      form.elements.message.value = defaultValue.message;
    }
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(formData);
  form.reset();
  localStorage.removeItem('feedback-form-state');
  formData = {};
}
