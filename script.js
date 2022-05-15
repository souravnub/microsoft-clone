const hammenu = document.querySelector(".hammenu");
const hammenu_nav = document.querySelector(".hammenu-link-container");
const body = document.querySelector("body");

hammenu.addEventListener("click", () => {
    hammenu.classList.toggle("opened");
    body.classList.toggle("no-scroll");
    hammenu_nav.classList.toggle("hammenu-opened");
});
