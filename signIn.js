let form = document.querySelector("form");

let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");

form.addEventListener("submit", (el) => {
  el.preventDefault();

  let getEmail = JSON.parse(localStorage.getItem("emailInput"));
  let getPassword = JSON.parse(localStorage.getItem("passwordInput"));

  if (emailInput.value === getEmail && passwordInput.value === getPassword) {
    location.href = "index.html";
  }
});
