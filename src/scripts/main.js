const hamburger = document.querySelector(".header__hamburger");
const menuClose = document.querySelector(".nav__btn");
const menu = document.querySelector(".nav");
const overlay = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  menu.classList.add("nav--opened");
});

menuClose.addEventListener("click", () => {
  menu.classList.remove("nav--opened");
});

overlay.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav")) {
    menu.classList.remove("nav--opened");
  }
});