
import AuthValidator from './AuthValidator.js'


let validator = new AuthValidator();
document.getElementById('btnClick').onclick = onSubmit;

let email_error = document.getElementById('email_error');
let pass_error = document.getElementById('pass_error');

function onSubmit(){

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let spinner = document.getElementById('spinner');

    spinner.classList.add('spinner');

    setTimeout(() => {
        try {
            spinner.classList.remove('spinner');
            validator.validateEmail(email);
            
        } catch (error) {
            
            email_error.classList.remove("hidden");
            document.getElementById('email_error').innerHTML = error.message;
            return false;
        }
        try {
            validator.validatePassword(password);
            alert ("login");

        } catch (error) {
            pass_error.classList.remove("hidden");
            document.getElementById('pass_error').innerHTML = error.message;
            return false;
        }       
    }, 2000);   
}

function removeEmailError(){
    email_error.classList.add("hidden");
}

document.getElementById('email').addEventListener('input', removeEmailError);

function removePasswordError(){
    pass_error.classList.add("hidden");
}
document.getElementById('password').addEventListener('input', removePasswordError);