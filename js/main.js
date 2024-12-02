var signUpName = document.getElementById("N-inputUp");
var signUpEmail = document.getElementById("E-inputUp");
var signUpPassword = document.getElementById("P-inputUp");
var logInEmail = document.getElementById("E-inputIn");
var logInPassword = document.getElementById("P-inputIn");
var error = document.getElementById("error");
var success = document.getElementById("success");
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var passwordRegex = /^(?=.*?[0-9])(?=.*?[a-zA-Z]).{3,30}$/
/*************SignUp**************/
function signUp() {
    error.innerHTML = "";
    success.innerHTML = "";
    if (!signUpName.value.trim() || !signUpEmail.value.trim() || !signUpPassword.value.trim()) {
        error.innerHTML = "All inputs are required";
        return;
    }
    if (!emailRegex.test(signUpEmail.value.trim())) {
        error.innerHTML = "Please enter a valid email";
        return;
    }
    if (!passwordRegex.test(signUpPassword.value.trim())) {
        error.innerHTML = "please enter a valid password";
        return;
    }
    localStorage.setItem("SignUpName", signUpName.value.trim());
    localStorage.setItem("SignUpEmail", signUpEmail.value.trim());
    localStorage.setItem("SignUpPassword", signUpPassword.value.trim());
    success.innerHTML = "success";
    clearValuesSignUp();
}
/*************LogIn**************/
function logIn() {
    error.innerHTML = "";
    success.innerHTML = "";
    if (!logInEmail.value.trim() || !logInPassword.value.trim()) {
        error.innerHTML = "All inputs are required.";
        return;
    }
    var storedEmail = localStorage.getItem("SignUpEmail");
    var storedPassword = localStorage.getItem("SignUpPassword");
    var storedName = localStorage.getItem("SignUpName");

    if (logInEmail.value.trim() === storedEmail && logInPassword.value.trim() === storedPassword) {
        localStorage.setItem("LoggedInUser", storedName);
        window.location.href = "welcome.html";
    } else {
        error.innerHTML = "Invalid email or password.";
    }
    clearValuesLogIn();
}
/*************ClearSignUp**************/
function clearValuesSignUp() {
    signUpName.value = "";
    signUpEmail.value = "";
    signUpPassword.value = "";
}
/*************ClearLogIn**************/
function clearValuesLogIn() {
    logInEmail.value = "";
    logInPassword.value = "";
}