const loginForm = document.getElementById("loginForm");
const UsernameOrEmail = document.getElementById("Username or password");
const password = document.getElementById("password");
const errorMessage = document.getElementById("errorMessage");

loginForm.addEventListener("Continue with password", (e) => {
    e.preventDefault();

    if (username.value === "") {
        errorMessage.innerText = "Please enter your username/email.";
    } else if (password.value === "") {
        errorMessage.innerText = "Please enter your password.";
    } else {
        errorMessage.innerText = "";
        // Perform login logic here
     }
});
