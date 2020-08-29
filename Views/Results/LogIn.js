import DOM from "../DOMStrings.js";
import InputViews from "../InputViews.js";
import LoadingSpinner from "../LoadingSpinner.js";
import LoginError from "../Errors/LoginError.js";

class LogIn {
  constructor() {
    this.inputView = new InputViews();
    this.loginError = new LoginError();
    this.spinner = new LoadingSpinner();
  }

  loggedIn() {
    DOM.login_error.innerHTML = "You are logged in!";
    DOM.login_error.classList.remove("hidden");
    this.inputView.deleteEmail();
    this.inputView.deletePassword();
    this.spinner.hideSpinner();
  }

  notLoggedIn(error) {
    this.loginError.showEmailError(error);
    this.inputView.deletePassword();
    this.spinner.hideSpinner();
  }
}
export default LogIn;
