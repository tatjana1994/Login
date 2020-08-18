import AuthValidator from "./AuthValidator.js";

let validator = new AuthValidator();
document.getElementById("btnClick").onclick = onSubmit;

let email_error = document.getElementById("email_error");
let pass_error = document.getElementById("pass_error");
let confirm_pass_error = document.getElementById("confirm_pass_error");

function onSubmit() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let spinner = document.getElementById("spinner");
  let confirmPassword = document.getElementById("confirm_password").value;
  let accountText = document.getElementById("account").innerHTML;

  try {
    validator.validateEmail(email);
  } catch (error) {
    email_error.classList.remove("hidden");
    document.getElementById("email_error").innerHTML = error.message;
    return false;
  }
  try {
    validator.validatePassword(password);
  } catch (error) {
    pass_error.classList.remove("hidden");
    document.getElementById("pass_error").innerHTML = error.message;
    return false;
  }
  try {
    validator.validateConfirmPassword(password, confirmPassword);
    spinner.classList.add("spinner");
    signUp()
      .then(() => {
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("confirm_password").value = "";
        document.getElementById("account").innerHTML = "Account created.";
      })
      .catch((error) => {
        document.getElementById("account").innerHTML = error.message;
      });
  } catch (error) {
    confirm_pass_error.classList.remove("hidden");
    document.getElementById("confirm_pass_error").innerHTML = error.message;
  }
}

function removeEmailError() {
  email_error.classList.add("hidden");
}

document.getElementById("email").addEventListener("input", removeEmailError);

function removePasswordError() {
  pass_error.classList.add("hidden");
}
document
  .getElementById("password")
  .addEventListener("input", removePasswordError);

function removeConfirmPasswordError() {
  confirm_pass_error.classList.add("hidden");
}
document
  .getElementById("confirm_password")
  .addEventListener("input", removeConfirmPasswordError);

async function signUp() {
  let responseData;

  let data = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  let response = await fetch(
    "https://dentministrator.herokuapp.com/auth/signup",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (response.ok) {
    spinner.classList.remove("spinner");
    responseData = await response.json();
    console.log(responseData);
    return responseData;
  } else {
    spinner.classList.remove("spinner");
    throw new Error("Account already exists!");
  }
}
