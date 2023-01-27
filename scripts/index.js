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
  const nav = document.querySelector(".nav-bar2");
  const navLinks = document.querySelectorAll(".nav-bar2 li");
  
  burger.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
      }
    });
    
    // Burger Animation
    burger.classList.toggle("toggle");
  })

  navLinks.forEach(n => n.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
      }
    });
  }));
}

navSlide();

// const normal = () => {
//   document.querySelectorAll(".nav-bar2 li").forEach(n => n.addEventListener("click", () => {
//     nav.classList.toggle("nav-active");
//     burger.classList.toggle("toggle");
//   }));
// }

// const app = () => {
//   navSlide();
//   normal();
// }

// app();


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

darkMode.addEventListener("click", darkModeToggle);