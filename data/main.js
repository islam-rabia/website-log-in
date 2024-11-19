let para = document.querySelector("p");
let button = document.querySelector("button");
let img = document.querySelector("img");

para.innerHTML = `Welcome ${JSON.parse(localStorage.getItem("user"))}`;

button.addEventListener("click", () => {
  localStorage.clear();
  location.href = "signUp.html";
});

img.src = "img/pexels-han-chieh-lee-1234591373-22944463.jpg";
