const navSlider = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav_menu");
  const navLinks = document.querySelectorAll(".nav_menu li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });
};

navSlider();
