import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');

formEl.addEventListener('input', throttle(dataFormEl, 500));
formEl.addEventListener('submit', onFormSubmit);

const STORAGE_KEY = 'feedback-form-state';

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

checkLocalStorage();

function dataFormEl(e) {
  formData[e.target.name] = e.target.value;
  //   console.log(formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  // console.log(formData);

  if (!emailInput.value || !messageInput.value) {
    alert('Please make sure all fields are filled in correctly.');
  }

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}

function checkLocalStorage() {
  const savedFormData = localStorage.getItem(STORAGE_KEY);
  const parsedFormData = JSON.parse(savedFormData);

  if (parsedFormData) {
    emailInput.value = formData.email || ' ';
    messageInput.value = formData.message || ' ';
  }
}
