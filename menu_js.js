// Seleciona os elementos necessários
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const nav = document.querySelector("nav");
const closeBtn = document.getElementById("closeBtn");

// Abrir o menu ao clicar no botão de menu
menuBtn.addEventListener("click", () => {
    nav.classList.add("menu-open"); // Adiciona a classe "menu-open"
    menu.style.display = "flex"; // Mostra o menu
});

// Fechar o menu ao clicar no botão de fechar
closeBtn.addEventListener("click", () => {
    nav.classList.remove("menu-open"); // Remove a classe "menu-open"
    menu.style.display = "none"; // Esconde o menu
});
