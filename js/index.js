const harmburger = document.getElementById("harmburger");
const navLinks = document.querySelector(".nav-links");

harmburger.addEventListener("click", () => {
    navLinks.classList.toggle("display");
});