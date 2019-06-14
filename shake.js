
let name = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#loginForm");

form.addEventListener("submit", e => {
    e.preventDefault();
    if (name.value === "" || email.value === "" || password.value === "") {
        // console.log("complete fields");
        form.classList.add('error');
    } else {
        console.log("success");
        window.location.href = "./splash.html"
    }
});