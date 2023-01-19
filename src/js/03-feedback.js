import throttle from "lodash.throttle";

const formEl = document.querySelector(".feedback-form");
const emailInput = document.querySelector("input");
const messageInput = document.querySelector("textarea");

formEl.addEventListener("input", throttle(dataFormEl, 500));
formEl.addEventListener("submit", onFormSubmit);

const STORAGE_KEY = "feedback-form-state";

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

auditLocalStorage();

function dataFormEl(evt) {
  formData[evt.target.name] = evt.target.value;
  //   console.log(formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(formData);
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}

function auditLocalStorage() {
  const savedFormData = localStorage.getItem(STORAGE_KEY);
  const parsedFormData = JSON.parse(savedFormData);

  if (parsedFormData) {
    emailInput.value = formData.email || "";
    messageInput.value = formData.message || "";
  }
}
