let form = document.querySelector("form");

let email = document.querySelector(".email input"),
  password = document.querySelector(".password input");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let emailValue = JSON.parse(localStorage.getItem("email"));
  let passwordValue = JSON.parse(localStorage.getItem("password"));

  if (
    email.value === emailValue &&
    email.value !== "" &&
    password.value === passwordValue &&
    password.value !== ""
  ) {
    location.href = "index.html";
  }
});
