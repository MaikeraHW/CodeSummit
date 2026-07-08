const hamburger = document.getElementById("hamburger");
const headNav = document.getElementById("headNav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    headNav.classList.toggle("active");
});

// Fecha o menu ao clicar em um item
document.querySelectorAll(".navListItem a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        headNav.classList.remove("active");
    });
});