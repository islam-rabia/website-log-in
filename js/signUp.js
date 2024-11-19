let form = document.querySelector("form");

let user = document.querySelector(".user-name input");
let email = document.querySelector(".email input");
let password = document.querySelector(".password input");

form.addEventListener("submit", (event) => {
  if (user.value !== "" && email.value !== "" && password.value !== "") {
    location.href = "signIn.html";
  }
  event.preventDefault();
});

function userName() {
  user.addEventListener("keyup", () => {
    localStorage.setItem("user", JSON.stringify(user.value));
  });
}
userName();

function emailFunc() {
  email.addEventListener("keyup", () => {
    localStorage.setItem("email", JSON.stringify(email.value));
  });
}
emailFunc();

function passwordFunc() {
  password.addEventListener("keyup", () => {
    localStorage.setItem("password", JSON.stringify(password.value));
  });
}
passwordFunc();
