import DOM from "../DOMStrings.js";
import LogIn from "../Results/LogIn.js";
import LoginError from "./LoginError.js";

class SignUpError extends LoginError {
  constructor() {
    super();
  }

  showConfirmPasswordError(error) {
    DOM.confirm_pass_error.innerHTML = error.message;
    DOM.confirm_pass_error.classList.remove("hidden");
  }

  removeConfirmPasswordError() {
    DOM.confirm_pass_error.classList.add("hidden");
  }
}

export default SignUpError;
