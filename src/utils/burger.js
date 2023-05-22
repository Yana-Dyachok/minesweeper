import {
    menuBurger,
    nav,
    overlay,
  } from "./create.js";

const body = document.querySelector("body");
const navLink = document.querySelectorAll(".nav-link-item");

menuBurger.addEventListener("click", () => {
  menuBurger.classList.toggle("-active");
  nav.classList.toggle("-active");
  overlay.classList.toggle("-active");
  body.classList.toggle("-active");
});

overlay.addEventListener("click", () => {
  menuBurger.classList.remove("-active");
  nav.classList.remove("-active");
  overlay.classList.remove("-active");
  body.classList.toggle("-active");
});

navLink.forEach((el) => {
  el.addEventListener("click", () => {
    menuBurger.classList.remove("-active");
    nav.classList.remove("-active");
    overlay.classList.remove("-active");
    body.classList.remove("-active");
  });
});