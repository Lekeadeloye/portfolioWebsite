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

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-bar");
  const navLinks = document.querySelectorAll(".nav-bar li");
  
  burger.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
    });
    
    // Burger Animation
    burger.classList.toggle("toggle");
  })
}

navSlide();

// const darkMode = document.getElementById("light-dark");

// const darkModeToggle = () => {
//   const body = document.querySelector("body");
//   const header = document.querySelector("header");
//   const footer = document.querySelector("footer");
//   const navLinks = document.querySelectorAll(".primary-navigation");

//   body.classList.toggle("body2")
//   navLinks.classList.toggle(".black-text")
//   header.classList.toggle("header2")
//   footer.classList.toggle("footer2")
// };

// darkMode.addEventListener("click", darkModeToggle);