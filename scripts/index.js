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

const darkMode = document.getElementById("light-dark");

const darkModeToggle = () => {
  const body = document.querySelector("body");
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  const navLinks = document.querySelectorAll(".primary-navigation");

  body.classList.toggle("body2")
  navLinks.classList.toggle(".black-text")
  header.classList.toggle("header2")
  footer.classList.toggle("footer2")
};

// const blackText = () => {
//   let navLinks = document.querySelector(".name");

//   navLinks.classList.toggle(".black-text");
// };

darkMode.addEventListener("click", darkModeToggle);