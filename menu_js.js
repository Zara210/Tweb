document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');
    const menu = document.getElementById('menu');
    const nav = document.querySelector('nav'); // Seleciona o nav
    const body = document.body;

    // Abrir o menu
    menuBtn.addEventListener('click', () => {
        menu.style.display = 'flex';
        body.classList.add('menu-open'); // Adiciona ao body
        nav.classList.add('menu-open'); // Adiciona ao nav
    });

    // Fechar o menu
    closeBtn.addEventListener('click', () => {
        menu.style.display = 'none';
        body.classList.remove('menu-open'); // Remove do body
        nav.classList.remove('menu-open'); // Remove do nav
    });
});
