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

const darkModeToggle = () => {
  let main = document.querySelector("main");
  let header = document.querySelector("header");
  let footer = document.querySelector("footer");

  main.classList.toggle("body2");
  header.classList.toggle("header2");
  footer.classList.toggle("footer2");
}

const blackText = () => {
  let navLinks = document.querySelector(".primary-navigation")

  navLinks.classList.toggle(".black-text");
};

darkMode.addEventListener("click", darkModeToggle, blackText);