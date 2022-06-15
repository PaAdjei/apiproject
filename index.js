const menuToggle = document.querySelector(".menu-icon");
const closeToggle = document.querySelector(".close-icon");
const menuContainer = document.querySelector(".mobile-menu-container");

menuToggle.addEventListener("click", () => {
  menuContainer.classList.add("active");
});
closeToggle.addEventListener("click", () => {
  menuContainer.classList.remove("active");
});
