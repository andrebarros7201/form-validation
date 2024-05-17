import "./style.css";
import { showEmailError } from "./inputValidations/showError";

//Get all the form elements
const form = document.querySelector("form");

const email = document.querySelector("#email");
const emailError = document.querySelector("#email + span.error");

const country = document.querySelector("#country");

const zip = document.querySelector("#zip");
const zipError = document.querySelector("#zip + .error");

const password = document.querySelector("#password");
const passwordError = document.querySelector("#password + .error");

const confirmPassword = document.querySelector("#confirm-password");
const confirmPasswordError = document.querySelector(
  "#confirm-password + .error"
);

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showEmailError(emailError, email);
  }
});

//Criar addEventListener para cada campo e verificar se é valido ou não

form.addEventListener("submit", (event) => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showEmailError(emailError, email);
    event.preventDefault();
  }
});
