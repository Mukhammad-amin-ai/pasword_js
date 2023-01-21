let input = document.getElementById("input");
let line = document.getElementById("line");
let del = document.getElementById("del");
let look = document.getElementById("look");
let hidden = document.getElementById("hidden");
let reset =document.getElementById("reset")
let h1 = document.getElementById("h1");

let a = del = reset

input.addEventListener("keyup", (event) => {
  let a = event.target.value;

  if (a.length == 4) {
    line.style.width = 25 + "%";
    line.style.backgroundColor = "red";
  } else if (a.length > 4 && a.length <= 6) {
    line.style.width = 50 + "%";
    line.style.backgroundColor = "yellow";
  } else if (a.length >= 8) {
    line.style.width = 100 + "%";
    line.style.backgroundColor = "green";
    h1.innerHTML = "Succes";
  }
});

hidden.addEventListener("click", () => {
  input.setAttribute("type", "text");
  hidden.classList.toggle("show_me");
  look.classList.toggle("hid");
});
look.addEventListener("click", () => {
  input.setAttribute("type", "password");
  look.classList.remove("show_me");
  hidden.classList.toggle("show_me");
});


