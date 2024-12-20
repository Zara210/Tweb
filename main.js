window.onscroll = function() { atualizarNavbar() };

function atualizarNavbar() {
    const navbar = document.querySelector('nav');
    const profileIcon = document.querySelector('.nav-buttons_pc .login-btn img');

    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scroll'); // Adiciona a classe do scroll
        profileIcon.src = 'img/profile_verde.jpg'; // Altera o ícone para verde
    } else {
        navbar.classList.remove('navbar-scroll'); // Remove a classe do scroll
        profileIcon.src = 'img/profile_branco.png'; // Volta para o ícone branco
    }
}
