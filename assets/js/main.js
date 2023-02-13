const navToggle = document.querySelector(".nav__toogle")
const navMenu = document.querySelector(".nav__menu")
const navhome = document.querySelector(".home")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible")
})

navhome.addEventListener("click", () => {
    navMenu.classList.remove("nav-menu_visible")
})