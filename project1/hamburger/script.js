const btn = document.getElementById("btn");
const nav = document.getElementById("nav");

btn.addEventListener("click", () => {
    nav.classList.toggle("abc");
    btn.classList.toggle("abc");
});