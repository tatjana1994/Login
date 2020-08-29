import DOM from "../DOMStrings.js";
import InputViews from "../InputViews.js";
import LoadingSpinner from "../LoadingSpinner.js";
import SignUpError from "../Errors/SignUpError.js";

class SignUp {
  constructor() {
    this.inputView = new InputViews();
    this.signUpError = new SignUpError();
    this.spinner = new LoadingSpinner();
  }

  signedUp() {
    DOM.accountText.innerHTML = "Account created.";
    DOM.accountText.classList.remove("hidden");
    this.inputView.deleteEmail();
    this.inputView.deletePassword();
    this.inputView.deleteConfirmPassword();
    this.spinner.hideSpinner();
  }

  notSignedUp(error) {
    this.signUpError.showEmailError(error);
    this.inputView.deletePassword();
    this.inputView.deleteConfirmPassword();
    this.spinner.hideSpinner();
  }
}

export default SignUp;
