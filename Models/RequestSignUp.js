import SignUp from "../Views/Results/SignUp.js";
import ValidationError from "../ValidationError.js";

async function requestSignUp(url, data) {
  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  let signup = new SignUp();

  try {
    if (response.ok) {
      signup.signedUp();
    } else {
      throw new ValidationError("Email already in use.");
    }
  } catch (error) {
    signup.notSignedUp(error);
  }
}

export default requestSignUp;
