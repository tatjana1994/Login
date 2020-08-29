import DOM from "./DOMStrings.js";

class InputViews {
  constructor() {}

  deleteEmail() {
    DOM.email.value = "";
  }

  deletePassword() {
    DOM.password.value = "";
  }

  deleteConfirmPassword() {
    DOM.confirmPassword.value = "";
  }
}

export default InputViews;
