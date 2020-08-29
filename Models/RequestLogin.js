import LogIn from "../Views/Results/LogIn.js";
import ValidationError from "../ValidationError.js";

async function requestLogin(url, data) {
  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  let log = new LogIn();

  try {
    if (response.ok) {
      log.loggedIn();
    } else {
      throw new ValidationError("Account not found.");
    }
  } catch (error) {
    log.notLoggedIn(error);
  }
}

export default requestLogin;
