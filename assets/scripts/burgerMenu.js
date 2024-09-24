const burgerMenu = document.querySelector(".burger-menu");
const navMenu = document.querySelector(".nav");
const ulItem = document.querySelector(".navbar");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  navMenu.classList.toggle("open");
});

ulItem.addEventListener("click", () => {
  navMenu.classList.remove("open");
  burgerMenu.classList.remove("active");
});
