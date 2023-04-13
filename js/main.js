// Description: JavaScript file for the form validation
// Author: Farhad Zaare
// Date: 2023-04-13
// Version: 1.0

// Get the form element
const form = document.getElementById("Form");

// Get the form fields
const nameField = form["name"];
const phoneField = form["phone"];
const emailField = form["email"];
const passwordField = form["password"];

function isValidEmail(email) {
  // Regular expression to check for a valid email address
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  // Regular expression to check for a valid phone number
  const phoneRegex = /^\d{11}$/;
  return phoneRegex.test(phone);
}

function isValidPassword(password) {
  // Regular expression to check for a valid password
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return passwordRegex.test(password);
}

// Get the error elements
const nameError = document.getElementById("nameError");
const phoneError = document.getElementById("phoneError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

// Add event listeners to the form fields
nameField.addEventListener("input", (event) => {
  if (!event.target.value) {
    nameError.style.display = "list-item";
  } else {
    nameError.style.display = "none";
  }
});

phoneField.addEventListener("input", (event) => {
  if (!isValidPhone(event.target.value)) {
    phoneError.style.display = "list-item";
  } else {
    phoneError.style.display = "none";
  }
});

emailField.addEventListener("input", (event) => {
  if (!isValidEmail(event.target.value)) {
    emailError.style.display = "list-item";
  } else {
    emailError.style.display = "none";
  }
});

passwordField.addEventListener("input", (event) => {
  if (!isValidPassword(event.target.value)) {
    passwordError.style.display = "list-item";
  } else {
    passwordError.style.display = "none";
  }
});

form.addEventListener("submit", (event) => {
  
  // Prevent the default form submission
  event.preventDefault();

  // Set the initial validity state
  let isValid = true;

  // Validate the form
  if (!nameField.value) {
    isValid = false;
    nameError.style.display = "list-item";
  }
  if (!isValidPhone(phoneField.value)) {
    isValid = false;
    phoneError.style.display = "list-item";
  }
  if (!isValidEmail(emailField.value)) {
    isValid = false;
    emailError.style.display = "list-item";
  }
  if (!isValidPassword(passwordField.value)) {
    isValid = false;
    passwordError.style.display = "list-item";
  }
  // Submit the form if it is valid
  if (isValid) {
    submitFormData(
      nameField.value,
      phoneField.value,
      emailField.value,
      passwordField.value
    );
  }
});

function submitFormData(name, phone, email, password) {
  // Submit the form data to the server
  console.log(
    `Name: ${name}, Phone: ${phone}, Email: ${email}, Password: ${password}`
  );
  // Display a success message
  alert("Form submitted successfully!");
  // Reset the form
  form.reset();
}
