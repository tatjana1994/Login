import ValidationError from "./ValidationError.js";

export default class AuthValidator {
  constructor() {}

  validateEmail(email) {
    if (!email.includes("@") || email.length < 10) {
      throw new ValidationError(
        `Email should contain "@" and should be at least 10 characters long.`,
        "email"
      );
    } else {
      return email;
    }
  }

  validatePassword(password) {
    let minPasswordLength = 3;
    let alphanumericChars = /[a-z0-9]+/i;
    let specialChars = /[!@#$%^&*(),.?":{}|<>]/;

    if (password.length < minPasswordLength) {
      throw new ValidationError(
        `Password is too short. It should be at least ${minPasswordLength} characters long`,
        "password"
      );
    } else if (
      !password.match(alphanumericChars) ||
      !password.match(specialChars)
    ) {
      throw new ValidationError(
        "Password should include at least 1 alphanumerical and 1 special character",
        "password"
      );
    } else {
      return password;
    }
  }

  validateFirstName(firstName) {
    let minNameLength = 3;

    if (firstName.length < minNameLength) {
      throw new ValidationError(
        `Name is too short. It should be at least ${minNameLength} characters long.`
      );
    } else {
      return firstName;
    }
  }

  validateConfirmPassword(password, confirmPassword) {
    if (password !== confirmPassword) {
      throw new ValidationError("Passwords do not match!", "confirmPassword");
    } else {
      return confirmPassword;
    }
  }

  softValidateEmail(email) {
    if (!email) {
      throw new ValidationError("This field should not be empty.", "email");
    } else {
      return email;
    }
  }
  softValidatePassword(password) {
    if (!password) {
      throw new ValidationError("This field should not be empty.", "password");
    } else {
      return password;
    }
  }
}
