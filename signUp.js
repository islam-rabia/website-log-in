let form = document.querySelector("form");

let userInput = document.querySelector("#user");
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
let cPasswordInput = document.querySelector("#cPassword");

form.addEventListener("submit", (el) => {
  el.preventDefault();
  if (
    userInput.value !== "" ||
    emailInput.value !== "" ||
    passwordInput.value !== "" ||
    cPasswordInput.value !== ""
  ) {
    if (cPasswordInput.value === passwordInput.value) {
      location.href = "signIn.html";
    }
  }
});

function valueInputFunc() {
  userInput.addEventListener("keyup", () => {
    localStorage.setItem("userInput", JSON.stringify(userInput.value));
  });
}

valueInputFunc();

function valueEmailFunc() {
  emailInput.addEventListener("keyup", () => {
    localStorage.setItem("emailInput", JSON.stringify(emailInput.value));
  });
}

valueEmailFunc();

function valuePasswordFunc() {
  passwordInput.addEventListener("keyup", () => {
    localStorage.setItem("passwordInput", JSON.stringify(passwordInput.value));
  });
}

valuePasswordFunc();

function valueCPasswordFunc() {
  cPasswordInput.addEventListener("keyup", () => {
    if (cPasswordInput.value === passwordInput.value) {
      console.log(true);
    }
    console.log(false);
  });
}

valueCPasswordFunc();
