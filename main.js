let icon = document.querySelector(".icon");
let login = document.querySelector(".login");

if (localStorage.length <= 0) {
  icon.remove();
} else {
  login.remove();
  LogOut();
  myFunc();
}

function myFunc() {
  let para = document.querySelector(".icon p");

  if (localStorage.getItem("userInput")) {
    let getUser = JSON.parse(localStorage.getItem("userInput"));
    para.innerHTML = `Welcome ${getUser}`;
  }
}

function LogOut() {
  let logOut = document.querySelector(".log-out");
  logOut.addEventListener("click", () => {
    localStorage.clear();
    location.href = "signUp.html";
  });
}

let arr = [1, 2];
