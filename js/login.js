function setFromMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form_message");

    messageElement.textContent = message;
    message.classList.remove("form_message-success", "form_message-error");
    messageElement.classList.add(`form_message-${type}`);

}

function setInputError(inputElement, message) {
    inputElement.classList.add("form_input-error");
    inputElement.parentElement.querySelector(".form_input-error-message").textContent = message;
}

// setFromMessage(loginForm,"success","You're logged in!")

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login")
    const createAccountForm = document.querySelector("#createAccount")

    document.querySelector("#linkCreateAccount").addEventListener("click", e =>{
        e.preventDefault();
        loginForm.classList.add("form_hidden");
        createAccountForm.classList.remove("form_hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e =>{
        e.preventDefault();
        loginForm.classList.remove("form_hidden");
        createAccountForm.classList.add("form_hidden");
    });

    // loginForm.addEventListener("submit", e => {
    //     e.preventDefault();
    //     setFromMessage(loginForm, "error", "Invalid Email/Password")
    // })

    // document.querySelectorAll(".form_input").forEach(inputElement => {
    //     inputElement.addEventListener("blur", e => {

    //     })
    // })
});