const navbar = document.querySelector("nav");
const menu = document.querySelector(".meNU");
const menuBtn = document.querySelector(".menu-btn")

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle('nav-background');
    menu.classList.toggle('nav-toggle');
});
