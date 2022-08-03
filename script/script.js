"use strict";

const form = document.getElementById("form");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkInputs();
});

const checkInputs = function () {
  // Get the values from the inputs
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstNameValue === "") {
    setErrorFor(firstName, "First name cannot be blank");
  } else {
    setSuccessFor(firstName);
  }

  if (lastNameValue === "") {
    setErrorFor(lastName, "Last name cannot be blank");
  } else {
    setSuccessFor(lastName);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid!");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else {
    setSuccessFor(password);
  }
};

const setErrorFor = function (input, message) {
  const formControl = input.parentElement;
  const span = formControl.querySelector("span");

  // Add error message into the span
  span.innerText = message;

  // Add error class
  formControl.className = "content__form--control error";
};

const setSuccessFor = function (input) {
  const formControl = input.parentElement;
  formControl.className = "content__form--control success";
};

const isEmail = function (email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};
