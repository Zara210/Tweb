// Selecionando o botão de menu e o menu em si
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

// Adicionando evento de clique ao botão do menu
menuBtn.addEventListener('click', () => {
    // Alterna a classe 'active' para mostrar ou esconder o menu
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
});
