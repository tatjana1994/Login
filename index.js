import ValidationError from "./ValidationError.js";

document.getElementById("btnClick").onclick = onSubmit;

let email_error = document.getElementById("email_error");
let pass_error = document.getElementById("pass_error");
let login_error = document.getElementById("login_error");

function onSubmit() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let spinner = document.getElementById("spinner");

  spinner.classList.add("spinner");

  try {
    spinner.classList.remove("spinner");
    if (!email || !password) {
      throw new ValidationError("Fields shouldn't be empty!");
    }
    Login()
      .then(() => {
        login_error.classList.remove("hidden");
        document.getElementById("login_error").innerHTML = "YOU ARE LOGGED IN!";
      })
      .catch((error) => {
        login_error.classList.remove("hidden");
        document.getElementById("login_error").innerHTML =
          "Account doesn't exist! Try again";
      });
  } catch (error) {
    login_error.classList.remove("hidden");
    document.getElementById("login_error").innerHTML = error.message;
    return false;
  }

  async function Login() {
    let responseData;

    let data = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };

    let response = await fetch(
      "https://dentministrator.herokuapp.com/auth/signin",
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
      return responseData;
    } else {
      spinner.classList.remove("spinner");
      throw new Error("Account already exists!");
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
}
