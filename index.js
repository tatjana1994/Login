import User from './User.js'
import AuthValidator from './AuthValidator.js';

let validator = new AuthValidator();
document.getElementById('btnClick').onclick = onSubmit;

function onSubmit(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if(email == validator.validateEmail(email)){
        
        if(password == validator.validatePassword(password)){
            alert("You are logged in!");
        }
    }
}

window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; 
});