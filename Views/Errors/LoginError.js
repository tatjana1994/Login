import DOM from "../DOMStrings.js";

class LoginError {
  constructor() {}

  showEmailError(error) {
    DOM.email_error.innerHTML = error.message;
    DOM.email_error.classList.remove("hidden");
  }

  removeEmailError() {
    DOM.email_error.classList.add("hidden");
  }

  showPasswordError(error) {
    DOM.pass_error.innerHTML = error.message;
    DOM.pass_error.classList.remove("hidden");
  }

  removePasswordError() {
    DOM.pass_error.classList.add("hidden");
  }
}
export default LoginError;
