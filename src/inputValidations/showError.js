const showEmailError = (emailError, email) => {
  if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an email address.";
  }

  emailError.className = "error active";
};

export { showEmailError };
