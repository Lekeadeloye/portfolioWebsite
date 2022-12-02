// let darkMode = document.getElementById("light-dark");

// function toggleDarkMode() {
//   let body = document.querySelector("body");
//   let header = document.querySelector("header");
//   let footer = document.querySelector("footer");

//   body.style.backgroundColor = "black";
//   body.style.color = "beige";
//   header.style.backgroundColor = "white";
//   header.style.color = "black";
//   footer.style.backgroundColor = "white";
//   footer.style.color = "white";
// }

// darkMode.addEventListener("click", toggleDarkMode);



let darkMode = document.getElementById("light-dark");

darkMode.addEventListener("click", () => {

  let body = document.querySelector("body");
  let header = document.querySelector("header");
  let footer = document.querySelector("footer");

  body.classList.toggle("body2");
  header.classList.toggle("header2");
  footer.classList.toggle("footer2");
});
